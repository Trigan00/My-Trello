'use client'

import {
	Header,
	headerHeight
} from '@/components/dashboard-layout/header/Header'
import SideBar from '@/components/dashboard-layout/sidebar/SideBar'
import { Box } from '@mui/material'
import { useState } from 'react'

export default function DashboardLayoutWrapper({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	const [open, setOpen] = useState(true)
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
						boxSizing: 'border-box',
						p: 4,
						mt: `${headerHeight}px`,
						height: `calc(100vh - ${headerHeight}px)`,
						overflow: 'auto'
					}}
				>
					{children}
				</Box>
			</Box>
		</>
	)
}
