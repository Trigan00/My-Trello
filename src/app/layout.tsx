import type { Metadata } from 'next'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import './globals.css'
import { SITE_NAME } from '@/constants/seo.constants'
import { Providers } from './providers'
import { Toaster } from 'sonner'

export const metadata: Metadata = {
	title: {
		default: SITE_NAME,
		template: `%s | ${SITE_NAME}`
	},
	description: 'Task manager'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<head>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0'
				></meta>
			</head>
			<body>
				<Providers>
					<AppRouterCacheProvider>
						{children}

						<Toaster
							position='top-right'
							duration={3000}
							expand={true}
							richColors
						/>
					</AppRouterCacheProvider>
				</Providers>
			</body>
		</html>
	)
}
