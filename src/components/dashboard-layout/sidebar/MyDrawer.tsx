import { styled, useMediaQuery } from '@mui/material'
import MuiDrawer, { DrawerProps } from '@mui/material/Drawer'
import Drawer from '@mui/material/Drawer'
import { COLORS } from '@/constants/color.constants'
import { headerHeight } from '../header/Header'
import { DIMENSIONS } from '@/constants/dimension.constants'

export const drawerWidth: number = 250

const DrawerDesktop = styled(MuiDrawer, {
	shouldForwardProp: prop => prop !== 'open'
})(({ theme, open }) => ({
	'& .MuiDrawer-paper': {
		// height: `calc(100vh - ${headerHeight}px)`,
		position: 'relative',
		whiteSpace: 'nowrap',
		overflowX: 'hidden',
		width: drawerWidth,
		borderRight: `1px solid ${COLORS.border};`,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		}),
		boxSizing: 'border-box',
		...(!open && {
			overflowX: 'hidden',
			transition: theme.transitions.create('width', {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen
			}),
			width: theme.spacing(0)
			// [theme.breakpoints.up('sm')]: {
			// 	width: theme.spacing(9)
			// }
		})
	}
}))

interface IDrawerDesktop extends DrawerProps {
	children: React.ReactNode
}

export function MyDrawer({ children, ...rest }: IDrawerDesktop) {
	const matches = useMediaQuery(`(max-width:${DIMENSIONS.mobile})`)

	return (
		<>
			{matches ? (
				<Drawer
					variant='temporary'
					{...rest}
					sx={{
						'& .MuiDrawer-paper': {
							width: drawerWidth
						}
					}}
				>
					{children}
				</Drawer>
			) : (
				<DrawerDesktop
					variant='permanent'
					{...rest}
					sx={{
						mt: `${headerHeight}px`
						// background: COLORS.transparent #TODO не работает
					}}
				>
					{children}
				</DrawerDesktop>
			)}
		</>
	)
}
