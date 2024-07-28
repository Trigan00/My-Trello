import MyModal from '@/components/UI/MyModal'
import { Box, Button, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { Delete } from './Delete'
import { useEditBoardName } from '@/hooks/board-hooks/useEditBoardName'
import { MembersSelect } from './MembersSelect'

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
	const { editBoardName, isPending } = useEditBoardName()
	const [name, setName] = useState(heading_title)
	const [errMsg, setErrMsg] = useState('')
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
			maxWidth={550}
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
					sx={{ color: 'white' }}
					onClick={saveName}
				>
					Сохранить
				</Button>
			</Box>
			<MembersSelect
				workspace_id={workspace_id}
				board_id={board_id}
			/>
			{/* {users && members ? (
				<MembersSelect
					workspace_id={workspace_id}
					board_id={board_id}
					// all_users={users}
					// addFunc={addUser}
					// removeFunc={removeUser}
					// members={members}
				/>
			) : (
				<Skeleton
					variant='rounded'
					sx={{ mt: 2, height: '40px', width: '100%', borderRadius: '15px' }}
				/>
			)} */}

			<Delete
				board_id={board_id}
				name={heading_title}
				workspace_id={workspace_id}
			/>
		</MyModal>
	)
}
