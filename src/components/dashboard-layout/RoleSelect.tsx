import { IRole } from '@/types/workspace.types'
import { Button, Menu, MenuItem, Box, Typography, Divider } from '@mui/material'
import { Dispatch, SetStateAction, useState } from 'react'

interface RoleSelectI {
	roles: IRole[]
	role: string
	setRole: Dispatch<SetStateAction<string>>
	onClickFn?: (role: string) => void
}

export default function RoleSelect({
	role,
	setRole,
	roles,
	onClickFn
}: RoleSelectI) {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
	const open = Boolean(anchorEl)

	const handleRoleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget)
	}
	const updateRoleHandler = (role: string) => {
		setRole(role)
		onClickFn && onClickFn(role)
		setAnchorEl(null)
	}

	return (
		<Box>
			<Button
				variant='outlined'
				fullWidth
				aria-controls={open ? 'basic-menu' : undefined}
				aria-haspopup='true'
				aria-expanded={open ? 'true' : undefined}
				sx={{
					textTransform: 'capitalize'
				}}
				onClick={handleRoleClick}
			>
				{role}
			</Button>
			<Menu
				id='basic-menu'
				anchorEl={anchorEl}
				open={open}
				onClose={() => setAnchorEl(null)}
				MenuListProps={{
					'aria-labelledby': 'basic-button'
				}}
			>
				{roles.map(r => (
					<MenuItem
						key={r.role}
						onClick={() => updateRoleHandler(r.role)}
						sx={{ width: 280, whiteSpace: 'normal' }}
						selected={r.role === role}
					>
						<Box>
							<Typography
								variant='subtitle2'
								textTransform='capitalize'
							>
								{r.role}
							</Typography>
							<Typography variant='caption'>{r.description}</Typography>
							<Divider />
						</Box>
					</MenuItem>
				))}
			</Menu>
		</Box>
	)
}
