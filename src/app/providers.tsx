'use client'

import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Noto_Sans } from 'next/font/google'
import { PropsWithChildren, useState } from 'react'

const zen = Noto_Sans({
	subsets: ['cyrillic', 'latin'],
	weight: ['300', '400', '500', '600', '700'],
	display: 'swap',
	variable: '--font-zen',
	style: ['normal']
})

let theme = createTheme({
	typography: {
		fontFamily: zen.style.fontFamily
	}
})

export function Providers({ children }: PropsWithChildren) {
	const [client] = useState(
		new QueryClient({
			defaultOptions: {
				queries: {
					refetchOnWindowFocus: false
				}
			}
		})
	)
	return (
		<QueryClientProvider client={client}>
			<ThemeProvider theme={theme}>
				{/* <MyProvider> */}
				{children}
			</ThemeProvider>
			<ReactQueryDevtools initialIsOpen={false} />
			{/* </MyProvider> */}
		</QueryClientProvider>
	)
}
