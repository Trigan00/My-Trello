import { useState } from 'react'
import { IUser } from '@/types/auth.types'
import { TableCell, Button, styled, TableRow, Box } from '@mui/material'
import React from 'react'
import { useUpdateRole } from '@/hooks/workspace-hooks/useUpdateRole'
import { useDeleteWorkspaceUser } from '@/hooks/workspace-hooks/useDeleteWorkspaceUser'
import DeleteModal from '@/components/dashboard-layout/DeleteModal'
import { IRole } from '@/types/workspace.types'
import RoleSelect from '@/components/dashboard-layout/RoleSelect'

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	'&:nth-of-type(odd)': {
		backgroundColor: theme.palette.action.hover
	},
	// hide last border
	'&:last-child td, &:last-child th': {
		border: 0
	}
}))

interface MyTableRowI {
	workspace_id: number
	row: IUser
	i: number
	roles: IRole[]
}

export default function MyTableRow({
	workspace_id,
	row,
	i,
	roles
}: MyTableRowI) {
	const { updateRole } = useUpdateRole(() => setRole(row.role))
	const { deleteWorkspaceUser, isDeleteUserPending } = useDeleteWorkspaceUser()
	const [isDelete, setIsDelete] = useState(false)
	const [role, setRole] = useState<string>(row.role)

	const handleRoleChange = (role: string) => {
		updateRole({ ws_id: workspace_id, role: role, user_id: row.id })
	}

	return (
		<React.Fragment>
			<StyledTableRow key={row.id}>
				<TableCell>{i + 1}</TableCell>
				<TableCell>{row.username}</TableCell>
				<TableCell>{row.email}</TableCell>
				<TableCell>
					<Box>
						<RoleSelect
							role={role}
							roles={roles}
							setRole={setRole}
							onClickFn={handleRoleChange}
						/>
					</Box>
				</TableCell>
				<TableCell align='right'>
					<Button
						size='small'
						color='error'
						onClick={() => setIsDelete(true)}
					>
						Удалить
					</Button>
				</TableCell>
			</StyledTableRow>
			<DeleteModal
				isModal={isDelete}
				setIsModal={setIsDelete}
				deleteFunction={() => deleteWorkspaceUser({ user_id: row.id })}
				isLoading={isDeleteUserPending}
				title='Удалить пользователя?'
				subtitle={`Пользователь «${row.username}» будет удален.`}
				confirmation='Удалить пользователя.'
			/>
		</React.Fragment>
	)
}
