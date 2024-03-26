import { createTheme } from '@mui/material'
import { Montserrat } from 'next/font/google'
import { COLORS } from './constants/color.constants'

const zen = Montserrat({
	subsets: ['cyrillic', 'latin'],
	weight: ['300', '400', '500', '600', '700'],
	display: 'swap',
	variable: '--font-zen',
	style: ['normal']
})

const theme = createTheme({
	palette: {
		primary: {
			main: COLORS.primary
		}
	},
	components: {
		// MuiButton: {
		// 	styleOverrides: {
		// 		root: {
		// 			padding: 0
		// 		}
		// 	}
		// },
		MuiIconButton: {
			styleOverrides: {
				root: {
					padding: 0
				}
			}
		}
	},
	typography: {
		fontFamily: zen.style.fontFamily
	}
})

export default theme
