'use client'

import theme from '@/theme'
import { ThemeProvider } from '@mui/material'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { PropsWithChildren, useState } from 'react'

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
