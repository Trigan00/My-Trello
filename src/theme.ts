import { createTheme } from '@mui/material'
import { Noto_Sans } from 'next/font/google'

const zen = Noto_Sans({
	subsets: ['cyrillic', 'latin'],
	weight: ['300', '400', '500', '600', '700'],
	display: 'swap',
	variable: '--font-zen',
	style: ['normal']
})

const theme = createTheme({
	typography: {
		fontFamily: zen.style.fontFamily
	}
})

export default theme
