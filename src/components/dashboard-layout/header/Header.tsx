'use client'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import AdbIcon from '@mui/icons-material/Adb'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'
import { authService } from '@/services/auth.service'

const settings = ['Профиль', 'Аккаунт ', 'Выйти']

export function Header() {
	const router = useRouter()

	const { mutate } = useMutation({
		mutationKey: ['logout'],
		mutationFn: () => authService.logout(),
		onSuccess: () => router.push('/auth')
	})
	const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)

	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget)
	}

	const handleCloseUserMenu = () => {
		setAnchorElUser(null)
	}

	return (
		<AppBar
			position='static'
			color='transparent'
			sx={{ boxShadow: 'none', borderBottom: '1px solid rgb(229, 234, 242);' }}
		>
			<Toolbar disableGutters>
				<Box
					sx={{
						width: '270px',
						display: 'flex',
						pl: 3,
						boxSizing: 'border-box'
					}}
				>
					<AdbIcon
						sx={{ display: { md: 'flex' }, mr: 1 }}
						color='primary'
					/>
					<Typography
						variant='h6'
						noWrap
						component='a'
						color='primary'
						sx={{
							mr: 2,
							display: { md: 'flex' },
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							textDecoration: 'none'
						}}
					>
						LOGO
					</Typography>
				</Box>
				<Box sx={{ flexGrow: 1, display: 'flex' }}>
					<Button
						onClick={() => {}}
						sx={{ my: 2, display: 'block' }}
					>
						Сервисы
					</Button>
				</Box>

				<Box
					sx={{ flexGrow: 0, display: 'flex', boxSizing: 'border-box', pr: 3 }}
				>
					<Button
						onClick={() => {}}
						sx={{ mr: 4, display: 'block' }}
					>
						Ваш тариф
					</Button>
					<Tooltip title='Профиль'>
						<IconButton
							onClick={handleOpenUserMenu}
							sx={{ p: 0 }}
						>
							<Avatar
								alt='Remy Sharp' // TODO set RealName
								// src='/static/images/avatar/2.jpg'
							/>
						</IconButton>
					</Tooltip>
					<Menu
						sx={{ mt: '45px' }}
						id='menu-appbar'
						anchorEl={anchorElUser}
						anchorOrigin={{
							vertical: 'top',
							horizontal: 'right'
						}}
						keepMounted
						transformOrigin={{
							vertical: 'top',
							horizontal: 'right'
						}}
						open={Boolean(anchorElUser)}
						onClose={handleCloseUserMenu}
					>
						{settings.map(setting => (
							<MenuItem
								key={setting}
								onClick={handleCloseUserMenu}
							>
								{setting === 'Выйти' ? (
									<Typography
										onClick={() => mutate()}
										textAlign='center'
									>
										{setting}
									</Typography>
								) : (
									<Typography textAlign='center'>{setting}</Typography>
								)}
							</MenuItem>
						))}
					</Menu>
				</Box>
			</Toolbar>
		</AppBar>
	)
}
