import { styled } from '@mui/material'
import MuiDrawer from '@mui/material/Drawer'
import { headerHeight } from '../header/Header'
export const drawerWidth: number = 280

export const Drawer = styled(MuiDrawer, {
	shouldForwardProp: prop => prop !== 'open'
})(({ theme, open }) => ({
	'& .MuiDrawer-paper': {
		height: `calc(100vh - ${headerHeight}px)`,
		position: 'relative',
		whiteSpace: 'nowrap',
		overflowX: 'hidden',
		width: drawerWidth,
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
			width: theme.spacing(7),
			[theme.breakpoints.up('sm')]: {
				width: theme.spacing(9)
			}
		})
	}
}))
