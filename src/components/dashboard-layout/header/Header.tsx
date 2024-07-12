'use client'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { SITE_NAME } from '@/constants/seo.constants'
import Image from 'next/image'
import { COLORS } from '@/constants/color.constants'
import AccountPopover from './account-popover'
import NextLink from 'next/link'
import { DASHBOARD_PAGES } from '@/config/pages-url.config'

export const headerHeight: number = 74

interface IHeader {
	toggleDrawer: () => void
}

export function Header({ toggleDrawer }: IHeader) {
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
						color='primary'
						sx={{
							ml: '45px',
							fontWeight: 600,
							textDecoration: 'none',
							fontSize: '24px',
							cursor: 'pointer'
						}}
						component={NextLink}
						href={DASHBOARD_PAGES.HOME}
					>
						{SITE_NAME}
					</Typography>
				</Box>
			</Toolbar>
			<AccountPopover />
		</AppBar>
	)
}
