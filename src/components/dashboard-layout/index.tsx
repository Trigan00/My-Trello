'use client'

import {
	Header,
	headerHeight
} from '@/components/dashboard-layout/header/Header'
import SideBar from '@/components/dashboard-layout/sidebar/SideBar'
import { DIMENSIONS } from '@/constants/dimension.constants'
import { useMedia } from '@/hooks/useMedia'
import { Box } from '@mui/material'
import { useState } from 'react'

export default function DashboardLayoutWrapper({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	const matches = useMedia(DIMENSIONS.MD)
	const [open, setOpen] = useState(!matches)
	const toggleDrawer = () => setOpen(prev => !prev)

	return (
		<>
			<Header toggleDrawer={toggleDrawer} />
			<Box
				component='main'
				sx={{ display: 'flex' }}
			>
				<SideBar
					open={open}
					toggleDrawer={toggleDrawer}
				/>
				<Box
					sx={{
						width: '100%',
						mt: `${headerHeight}px`,
						height: `calc(100vh - ${headerHeight}px)`,
						overflowX: 'hidden'
					}}
				>
					{children}
				</Box>
			</Box>
		</>
	)
}
