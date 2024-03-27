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
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'
import { authService } from '@/services/auth.service'
import { SITE_NAME } from '@/constants/seo.constants'
import Image from 'next/image'
import { COLORS } from '@/constants/color.constants'

const settings = ['Профиль', 'Аккаунт ', 'Выйти']
export const headerHeight: number = 74

interface IHeader {
	toggleDrawer: () => void
}

export function Header({ toggleDrawer }: IHeader) {
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
			position='absolute' //absolute || static
			sx={{
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'space-between',
				px: '12px',
				height: headerHeight,
				boxShadow: 'none',
				borderBottom: `1px solid ${COLORS.border};`,
				background: COLORS.transparent
			}}
		>
			<Toolbar disableGutters>
				<Box
					sx={{
						display: 'flex',
						boxSizing: 'border-box'
					}}
				>
					<IconButton onClick={toggleDrawer}>
						<Image
							src='/svg/menu.svg'
							alt='menu Image'
							width={28}
							height={28}
						/>
					</IconButton>
					<Typography
						variant='h6'
						noWrap
						component='a'
						color='primary'
						sx={{
							ml: '45px',
							fontWeight: 600,
							textDecoration: 'none',
							fontSize: '24px',
							cursor: 'pointer'
						}}
					>
						{SITE_NAME}
					</Typography>
				</Box>
				<Box sx={{ flexGrow: 1, display: 'flex' }}>
					<Button
						onClick={() => {}}
						sx={{
							ml: '40px',
							display: 'block',
							fontSize: '14px',
							fontWeight: '400',
							color: COLORS.textBlack,
							textTransform: 'inherit',
							lineHeight: '17px'
						}}
					>
						Сервисы
					</Button>
					<Button
						onClick={() => {}}
						sx={{
							ml: '40px',
							display: 'block',
							fontSize: '14px',
							fontWeight: '400',
							color: COLORS.textBlack,
							textTransform: 'inherit',
							lineHeight: '17px'
						}}
					>
						Ваш тариф
					</Button>
				</Box>
			</Toolbar>
			<Box>
				<Tooltip title='Профиль'>
					<IconButton
						onClick={handleOpenUserMenu}
						sx={{ p: 0 }}
					>
						<Avatar
							alt='Remy Sharp' // TODO set RealName
							// src='/static/images/avatar/2.jpg'
							sx={{
								width: '50px',
								height: '50px'
							}}
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
		</AppBar>
	)
}
