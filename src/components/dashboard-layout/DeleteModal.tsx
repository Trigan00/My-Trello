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
import { useDeleteWorkspace } from '@/hooks/workspace-hooks/useDeleteWorkspace'

interface DeleteModalProps {
	isModal: boolean
	setIsModal: React.Dispatch<React.SetStateAction<boolean>>
	title: string
	confirmation: string
	deleteFunction: () => void
	isLoading: boolean
	subtitle?: string
	resetFunc?: () => void
}

export default function DeleteModal({
	isModal,
	setIsModal,
	title,
	subtitle,
	confirmation,
	deleteFunction,
	isLoading,
	resetFunc
}: DeleteModalProps) {
	const [deleteIsActive, setDeleteIsActive] = useState(false)

	const onDelete = async () => {
		deleteFunction()
		setIsModal(false)
	}

	const onClose = () => {
		setDeleteIsActive(false)
		resetFunc && resetFunc()
	}

	return (
		<MyModal
			isModal={isModal}
			setIsModal={setIsModal}
			onClose={onClose}
		>
			<Box style={{ display: 'flex', justifyContent: 'space-between' }}>
				<Typography
					id='transition-modal-title'
					variant='h6'
					component='h2'
				>
					{title}
				</Typography>
				<CloseIcon
					sx={{ cursor: 'pointer' }}
					onClick={() => setIsModal(false)}
				/>
			</Box>
			{subtitle && (
				<Typography
					id='transition-modal-description'
					sx={{ mt: 2 }}
				>
					{subtitle}
				</Typography>
			)}
			<Typography sx={{ mt: 2 }}>
				<FormControlLabel
					control={
						<Checkbox
							checked={deleteIsActive}
							onChange={() => setDeleteIsActive(prev => !prev)}
							inputProps={{ 'aria-label': 'controlled' }}
						/>
					}
					label={confirmation}
				/>
			</Typography>
			<Box sx={{ mt: '20px', float: 'right' }}>
				{isLoading ? (
					<Loader />
				) : (
					<>
						<Button
							size='small'
							style={{ marginRight: '10px' }}
							onClick={() => {
								onClose()
								setIsModal(false)
							}}
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
