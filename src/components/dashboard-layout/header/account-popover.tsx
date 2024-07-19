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
import { Skeleton, Stack } from '@mui/material'
import { useProfile } from '@/hooks/profile-hooks/useProfile'
import shortenText from '@/helpers/shortenText'
import { EditProfile } from './EditProfile'
import { EditPassword } from './ChangePassword'

const MENU_OPTIONS = [
	{
		label: 'Главная',
		href: DASHBOARD_PAGES.HOME
		// icon: 'eva:home-fill'
	},
	{
		label: 'Тарифы',
		href: `${DASHBOARD_PAGES.HOME}/pricing`
		// icon: 'eva:person-fill'
	}
]

export default function AccountPopover() {
	const router = useRouter()
	const { profile, isLoading } = useProfile()

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

	if (isLoading) {
		return (
			<Skeleton
				variant='circular'
				width={40}
				height={40}
			/>
		)
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
					alt={profile.username}
					sx={{
						width: 36,
						height: 36,
						border: theme => `solid 2px ${theme.palette.background.default}`
					}}
				>
					{profile.username.charAt(0).toUpperCase()}
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
				<Stack
					direction='row'
					sx={{
						my: 1.5,
						px: 2,
						alignItems: 'center',
						justifyContent: 'space-between'
					}}
				>
					<Box>
						<Typography
							variant='subtitle2'
							noWrap
						>
							{shortenText(profile.username, 14)}
						</Typography>
						<Typography
							variant='body2'
							sx={{ color: 'text.secondary' }}
							noWrap
						>
							{shortenText(profile.telegram_url || profile.email, 14)}
						</Typography>
					</Box>
					<EditProfile
						username={profile.username}
						telegram_url={profile.telegram_url}
					/>
				</Stack>

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
				<EditPassword />
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
