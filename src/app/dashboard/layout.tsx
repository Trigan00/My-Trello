import { Header } from '@/components/dashboard-layout/header/Header'
import SideBar from '@/components/dashboard-layout/sidebar/SideBar'
import { Box } from '@mui/material'

export default function AuthLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>
			<Header />
			<Box
				component='main'
				sx={{ display: 'flex' }}
			>
				<SideBar />
				<Box
					sx={{
						p: 4
						// height: '100vh',
						// overflow: 'auto',
						// boxSizing: 'border-box'
					}}
				>
					{children}
				</Box>
			</Box>
		</>
	)
}
