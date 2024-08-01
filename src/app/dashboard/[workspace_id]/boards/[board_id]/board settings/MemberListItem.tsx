import { useState } from 'react'
import RoleSelect from '@/components/dashboard-layout/RoleSelect'
import { useDeleteBoardMember } from '@/hooks/board-hooks/useDeleteBoardMember'
import { useUpdateBoardMemberRole } from '@/hooks/board-hooks/useUpdateBoardMemberRole'
import { BoardMemberI } from '@/types/board.types'
import { IRole } from '@/types/workspace.types'
import {
	ListItem,
	ListItemAvatar,
	Avatar,
	ListItemText,
	Box,
	IconButton,
	Stack
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import DeleteModal from '@/components/dashboard-layout/DeleteModal'

interface MemberListItemProps {
	member: BoardMemberI
	roles: IRole[]
	board_id: number
}

export default function MemberListItem({
	member,
	roles,
	board_id
}: MemberListItemProps) {
	const { updateRole } = useUpdateBoardMemberRole(board_id, () =>
		setUserRole(member.role)
	)
	const { deleteBoardMember, isDeleteMemberPending } = useDeleteBoardMember()

	const [userRole, setUserRole] = useState<string>(member.role)
	const [isDelete, setIsDelete] = useState(false)

	const updateRoleHandler = (role: string) => {
		updateRole({ user_id: member.id, role })
	}

	const removeUser = () => deleteBoardMember({ user_id: member.id })

	return (
		<ListItem sx={{ px: 0, display: 'flex', justifyContent: 'space-between' }}>
			<Box sx={{ display: 'flex', alignItems: 'center' }}>
				<ListItemAvatar>
					<Avatar
						src={'/'}
						alt={member.username}
						sx={{
							width: 36,
							height: 36,
							border: theme => `solid 2px ${theme.palette.background.default}`
						}}
					>
						{member.username.charAt(0).toUpperCase()}
					</Avatar>
				</ListItemAvatar>
				<ListItemText
					primary={member.username}
					secondary={member.email}
				/>
			</Box>
			<Stack
				direction={'row'}
				alignItems={'center'}
				spacing={1}
			>
				<RoleSelect
					role={userRole}
					setRole={setUserRole}
					roles={roles}
					onClickFn={updateRoleHandler}
				/>
				<IconButton onClick={() => setIsDelete(true)}>
					<DeleteIcon />
				</IconButton>
			</Stack>
			<DeleteModal
				isModal={isDelete}
				setIsModal={setIsDelete}
				deleteFunction={removeUser}
				isLoading={isDeleteMemberPending}
				title='Удалить пользователя?'
				subtitle={`Пользователь «${member.username}» будет удален.`}
				confirmation='Удалить пользователя.'
			/>
		</ListItem>
	)
}
