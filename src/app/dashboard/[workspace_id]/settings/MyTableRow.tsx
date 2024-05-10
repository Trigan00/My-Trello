import { useState } from 'react'
import { IUser, ROLES } from '@/types/auth.types'
import {
	SelectChangeEvent,
	TableCell,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	Button,
	styled,
	TableRow
} from '@mui/material'
import React from 'react'
import { useUpdateRole } from '@/hooks/workspace-hooks/useUpdateRole'
import { useDeleteWorkspaceUser } from '@/hooks/workspace-hooks/useDeleteWorkspaceUser'
import DeleteModal from '@/components/dashboard-layout/DeleteModal'

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
}

export default function MyTableRow({ workspace_id, row, i }: MyTableRowI) {
	const { updateRole } = useUpdateRole()
	const { deleteWorkspaceUser, isDeleteUserPending } = useDeleteWorkspaceUser()
	const [isDelete, setIsDelete] = useState(false)
	const [role, setRole] = useState<ROLES>(row.role)

	const handleRoleChange = (event: SelectChangeEvent) => {
		const newRole = event.target.value as ROLES
		setRole(newRole)
		updateRole({ ws_id: workspace_id, role: newRole, user_id: row.id })
	}

	return (
		<React.Fragment>
			<StyledTableRow key={row.id}>
				<TableCell>{i + 1}</TableCell>
				<TableCell>{row.username}</TableCell>
				<TableCell>{row.email}</TableCell>
				<TableCell>
					<FormControl sx={{ width: '135px' }}>
						<InputLabel id='select-label'>role</InputLabel>
						<Select
							labelId='select-label'
							id='select'
							value={role}
							label='role'
							onChange={handleRoleChange}
							size='small'
							sx={{
								fontSize: '14px'
							}}
						>
							<MenuItem value={ROLES.ADMIN}>{ROLES.ADMIN}</MenuItem>
							<MenuItem value={ROLES.EMPLOYEE}>{ROLES.EMPLOYEE}</MenuItem>
							<MenuItem value={ROLES.OBSERVER}>{ROLES.OBSERVER}</MenuItem>
						</Select>
					</FormControl>
				</TableCell>
				<TableCell align='right'>
					{/* <IconButton
		aria-label='delete'
		color='error'
	>
		<DeleteOutlineIcon />
	</IconButton> */}
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
