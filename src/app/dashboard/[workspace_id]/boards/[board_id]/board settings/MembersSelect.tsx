import { useState } from 'react'
import { Loader } from '@/components/UI/Loader/Loader'
import { useBoardMembers } from '@/hooks/board-hooks/useBoardMembers'
import { useBoardsRoles } from '@/hooks/board-hooks/useBoardsRoles'
import { useWorkspaceUsers } from '@/hooks/workspace-hooks/useWorkspaceUsers'
import {
	Autocomplete,
	Box,
	Button,
	List,
	TextField,
	Typography
} from '@mui/material'
import MemberListItem from './MemberListItem'
import RoleSelect from '@/components/dashboard-layout/RoleSelect'
import { useAddMemberToBoard } from '@/hooks/board-hooks/useAddMemberToBoard'

interface MembersSelectI {
	workspace_id: number
	board_id: number
}

export function MembersSelect({ board_id, workspace_id }: MembersSelectI) {
	const { users } = useWorkspaceUsers(workspace_id)
	const { members, isLoading } = useBoardMembers(board_id)
	const { roles } = useBoardsRoles()

	const { addMember } = useAddMemberToBoard(board_id)

	const [user, setUser] = useState<{
		username: string
		id: number
	} | null>(null)
	const [userRole, setUserRole] = useState<string>('Наблюдатель')

	const addUser = () => {
		user && addMember({ board_id, user_id: user.id, role: userRole })
		setUser(null)
		setUserRole('Наблюдатель')
	}

	return (
		<Box mt={1}>
			<Typography
				variant='subtitle1'
				fontWeight={500}
			>
				Добавить участника
			</Typography>
			{roles && users ? (
				<Box
					display={'flex'}
					gap={1}
					mt={1}
				>
					<Box flex={4}>
						<Autocomplete
							value={user}
							onChange={(event: any, newValue: any | null) => {
								setUser(newValue)
							}}
							disablePortal
							options={users.map(
								m => new Object({ label: m.username, id: m.id })
							)}
							// sx={{ width: 300 }}
							renderInput={params => (
								<TextField
									{...params}
									label='Участник'
								/>
							)}
							isOptionEqualToValue={(option, value) =>
								option.label === value.label
							}
							size='small'
						/>
					</Box>
					<Box sx={{ maxWidth: '115px', width: '100%' }}>
						<RoleSelect
							role={userRole}
							roles={roles}
							setRole={setUserRole}
						/>
					</Box>
					<Button
						variant='contained'
						size='small'
						sx={{ color: 'white' }}
						onClick={addUser}
					>
						Добавить
					</Button>
				</Box>
			) : (
				<Loader />
			)}
			<Typography
				variant='subtitle1'
				fontWeight={500}
				sx={{ mt: 1 }}
			>
				Участники
			</Typography>
			{members && roles && (
				<List>
					{members.map(member => (
						<MemberListItem
							key={member.id}
							member={member}
							roles={roles}
							board_id={board_id}
						/>
					))}
				</List>
			)}
			{isLoading && <Loader />}
		</Box>
	)
}
