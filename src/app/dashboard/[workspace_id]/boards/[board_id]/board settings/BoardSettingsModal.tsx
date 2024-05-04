import MyModal from '@/components/UI/MyModal'
import { useWorkspaceUsers } from '@/hooks/workspace-hooks/useWorkspaceUsers'
import { IUser } from '@/types/auth.types'
import { Box, Button, Skeleton, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import MembersSelect from './MembersSelect'
import { Delete } from './Delete'
import { useEditBoardName } from '@/hooks/board-hooks/useEditBoardName'
import { Loader } from '@/components/UI/Loader/Loader'

interface BoardSettingsModalI {
	isModal: boolean
	setIsModal: React.Dispatch<React.SetStateAction<boolean>>
	heading_title: string
	workspace_id: number
	board_id: number
}

export function BoardSettingsModal({
	isModal,
	setIsModal,
	heading_title,
	workspace_id,
	board_id
}: BoardSettingsModalI) {
	const [name, setName] = useState(heading_title)
	const [errMsg, setErrMsg] = useState('')
	const { editBoardName, isPending } = useEditBoardName()
	const isNameMatch = name === heading_title

	const saveName = () => {
		if (!name.trim()) return setErrMsg('Не может быть пустым')
		if (name.length > 80) return setErrMsg('Лимит знаков: 80')
		setErrMsg('')
		editBoardName({ id: board_id, name })
	}

	const onClose = () => {
		setName(heading_title)
		setErrMsg('')
	}

	return (
		<MyModal
			isModal={isModal}
			setIsModal={setIsModal}
			onClose={onClose}
		>
			<Typography
				sx={{
					fontWeight: '600',
					fontSize: '18px',
					textAlign: 'center',
					mb: '30px'
				}}
			>
				{heading_title}
			</Typography>
			<Box
				display='flex'
				gap={1}
			>
				<TextField
					variant='outlined'
					size='small'
					label='Название'
					value={name}
					onChange={e => setName(e.target.value)}
					error={!!errMsg}
					helperText={errMsg}
					sx={{
						flex: 1
					}}
				/>

				<Button
					disabled={isNameMatch || isPending}
					size='small'
					variant='contained'
					sx={{ color: 'white', height: 'fit-content' }}
					onClick={saveName}
				>
					Сохранить
				</Button>
			</Box>

			<MembersSelect workspace_id={workspace_id} />

			<Delete
				board_id={board_id}
				name={heading_title}
				workspace_id={workspace_id}
			/>
		</MyModal>
	)
}
