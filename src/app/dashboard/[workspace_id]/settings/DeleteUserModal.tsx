import {
	Box,
	Button,
	Checkbox,
	FormControlLabel,
	Typography
} from '@mui/material'
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import MyModal from '@/components/UI/MyModal'
import { useDeleteWorkspaceUser } from '@/hooks/workspace-hooks/useDeleteWorkspaceUser'
import { Loader } from '@/components/UI/Loader/Loader'

interface DeleteModalProps {
	isModal: boolean
	setIsModal: React.Dispatch<React.SetStateAction<boolean>>
	username: string
	ws_id: number
	user_id: number
}

export default function DeleteUserModal({
	isModal,
	setIsModal,
	username,
	ws_id,
	user_id
}: DeleteModalProps) {
	const [deleteIsActive, setDeleteIsActive] = useState(false)
	const { deleteWorkspaceUser, isDeleteUserPending } = useDeleteWorkspaceUser()

	const onDelete = async () => {
		deleteWorkspaceUser({ user_id, ws_id })
		setIsModal(false)
	}

	return (
		<MyModal
			isModal={isModal}
			setIsModal={setIsModal}
		>
			<Box style={{ display: 'flex', justifyContent: 'space-between' }}>
				<Typography
					id='transition-modal-title'
					variant='h6'
					component='h2'
				>
					Удалить пользователя?
				</Typography>
				<CloseIcon
					sx={{ cursor: 'pointer' }}
					onClick={() => setIsModal(false)}
				/>
			</Box>
			<Typography
				id='transition-modal-description'
				sx={{ mt: 2 }}
			>
				Пользователь &#171;{username}&#187; будет удален
			</Typography>
			<Typography sx={{ mt: 2 }}>
				<FormControlLabel
					control={
						<Checkbox
							checked={deleteIsActive}
							onChange={() => setDeleteIsActive(prev => !prev)}
							inputProps={{ 'aria-label': 'controlled' }}
						/>
					}
					label={'Удалить пользователя'}
				/>
			</Typography>
			<Box sx={{ mt: '20px', float: 'right' }}>
				{isDeleteUserPending ? (
					<Loader />
				) : (
					<>
						<Button
							size='small'
							style={{ marginRight: '10px' }}
							onClick={() => setIsModal(false)}
						>
							Отменить
						</Button>
						<Button
							variant='contained'
							size='small'
							color='error'
							disabled={!deleteIsActive}
							onClick={() => {
								onDelete()
								setDeleteIsActive(false)
								setIsModal(false)
							}}
						>
							Удалить
						</Button>
					</>
				)}
			</Box>
		</MyModal>
	)
}
