import { useState } from 'react'

import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import Popover from '@mui/material/Popover'
import { alpha } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import { useRouter } from 'next/navigation'
import { authService } from '@/services/auth.service'
import { useMutation } from '@tanstack/react-query'
import NextLink from 'next/link'
import { DASHBOARD_PAGES } from '@/config/pages-url.config'

const MENU_OPTIONS = [
	{
		label: 'Главная',
		href: DASHBOARD_PAGES.HOME
		// icon: 'eva:home-fill'
	},
	{
		label: 'Тариф',
		href: DASHBOARD_PAGES.HOME
		// icon: 'eva:person-fill'
	}
]

export default function AccountPopover() {
	const router = useRouter()

	const { mutate } = useMutation({
		mutationKey: ['logout'],
		mutationFn: () => authService.logout(),
		onSuccess: () => router.push('/auth')
	})
	const [open, setOpen] = useState<null | HTMLButtonElement>(null)

	const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
		setOpen(event.currentTarget)
	}

	const handleClose = () => {
		setOpen(null)
	}

	return (
		<>
			<IconButton
				onClick={handleOpen}
				sx={{
					width: 40,
					height: 40,
					background: theme =>
						open
							? `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`
							: alpha(theme.palette.grey[500], 0.08)
				}}
			>
				<Avatar
					src={'/'}
					alt={'Ayaz'}
					sx={{
						width: 36,
						height: 36,
						border: theme => `solid 2px ${theme.palette.background.default}`
					}}
				>
					{'Ayaz'.charAt(0).toUpperCase()}
				</Avatar>
			</IconButton>

			<Popover
				open={!!open}
				anchorEl={open}
				onClose={handleClose}
				anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
				transformOrigin={{ vertical: 'top', horizontal: 'right' }}
				PaperProps={{
					sx: {
						p: 0,
						mt: 1,
						ml: 0.75,
						width: 200
					}
				}}
			>
				<Box sx={{ my: 1.5, px: 2 }}>
					<Typography
						variant='subtitle2'
						noWrap
					>
						{'Ayaz'}
					</Typography>
					<Typography
						variant='body2'
						sx={{ color: 'text.secondary' }}
						noWrap
					>
						{'Ayaz@mailk.ru'}
					</Typography>
				</Box>

				<Divider sx={{ borderStyle: 'dashed' }} />

				{MENU_OPTIONS.map(option => (
					<MenuItem
						key={option.label}
						component={NextLink}
						href={option.href}
					>
						{option.label}
					</MenuItem>
				))}

				<Divider sx={{ borderStyle: 'dashed', m: 0 }} />

				<MenuItem
					disableRipple
					disableTouchRipple
					onClick={() => mutate()}
					sx={{ typography: 'body2', color: 'error.main', py: 1.5 }}
				>
					Выйти
				</MenuItem>
			</Popover>
		</>
	)
}
