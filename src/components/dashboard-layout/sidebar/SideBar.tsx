import { List } from '@mui/material'
import { MyDrawer } from './MyDrawer'
import { MainListItems } from './MainListItems'
import { NewWorkspace } from './NewWorkspace'

interface ISideBar {
	open: boolean
	toggleDrawer: () => void
}

export default function SideBar({ open, toggleDrawer }: ISideBar) {
	return (
		<MyDrawer
			open={open}
			onClose={toggleDrawer}
		>
			<NewWorkspace />
			<List
				sx={{ p: ' 0 15px' }}
				component='nav'
			>
				<MainListItems onClose={toggleDrawer} />
			</List>
		</MyDrawer>
	)
}
