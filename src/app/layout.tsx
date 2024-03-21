import type { Metadata } from 'next'
// import { Noto_Sans } from 'next/font/google'
import './globals.css'
import { SITE_NAME } from '@/constants/seo.constants'
import { Providers } from './providers'
import { Toaster } from 'sonner'

// const zen = Noto_Sans({
// 	subsets: ['cyrillic', 'latin'],
// 	weight: ['300', '400', '500', '600', '700'],
// 	display: 'swap',
// 	variable: '--font-zen',
// 	style: ['normal']
// })

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
			<body /*className={zen.className} */>
				<Providers>
					{children}

					<Toaster
						position='top-right'
						duration={3000}
						expand={true}
						richColors
					/>
				</Providers>
			</body>
		</html>
	)
}
