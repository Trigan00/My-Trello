import MyModal from '@/components/UI/MyModal'
import { useWorkspaceUsers } from '@/hooks/workspace-hooks/useWorkspaceUsers'
import { Box, Button, Skeleton, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { Delete } from './Delete'
import { useEditBoardName } from '@/hooks/board-hooks/useEditBoardName'
import { BoardMemberI } from '@/types/board.types'
import { useBoardMembers } from '@/hooks/board-hooks/useBoardMembers'
import { useAddMemberToBoard } from '@/hooks/board-hooks/useAddMemberToBoard'
import { useDeleteBoardMember } from '@/hooks/board-hooks/useDeleteBoardMember'
import MembersSelect from '@/components/dashboard-layout/MembersSelect'

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
	const { users } = useWorkspaceUsers(workspace_id)
	const { members } = useBoardMembers(board_id)
	const { addMember } = useAddMemberToBoard()
	const { deleteBoardMember } = useDeleteBoardMember()

	const [name, setName] = useState(heading_title)
	const [errMsg, setErrMsg] = useState('')
	const isNameMatch = name === heading_title

	const saveName = () => {
		if (!name.trim()) return setErrMsg('Не может быть пустым')
		if (name.length > 80) return setErrMsg('Лимит знаков: 80')
		setErrMsg('')
		editBoardName({ id: board_id, name })
	}

	const addUser = (member: BoardMemberI | undefined) =>
		member && addMember({ board_id, user_id: member?.id })

	const removeUser = (member: BoardMemberI | undefined) =>
		member && deleteBoardMember({ board_id, user_id: member?.id })

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
					sx={{ color: 'white', height: 'fit-content' }}
					onClick={saveName}
				>
					Сохранить
				</Button>
			</Box>

			{users && members ? (
				<MembersSelect
					all_users={users}
					addFunc={addUser}
					removeFunc={removeUser}
					members={members}
				/>
			) : (
				<Skeleton
					variant='rounded'
					sx={{ mt: 2, height: '40px', width: '100%', borderRadius: '15px' }}
				/>
			)}

			<Delete
				board_id={board_id}
				name={heading_title}
				workspace_id={workspace_id}
			/>
		</MyModal>
	)
}
