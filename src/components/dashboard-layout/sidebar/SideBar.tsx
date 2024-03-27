'use client'

import { Button, List, useMediaQuery } from '@mui/material'
import { MyDrawer } from './MyDrawer'
import { mainListItems } from './listItems'
import AddIcon from '@mui/icons-material/Add'

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
			<Button
				variant='contained'
				sx={{
					width: '220px',
					color: 'white',
					textTransform: 'inherit',
					borderRadius: '10px',
					p: '11px 12px',
					fontSize: '14px',
					fontWeight: '400',
					margin: '30px auto'
				}}
			>
				<AddIcon fontSize='small' />
				Рабочие пространства
			</Button>
			<List
				sx={{ p: ' 0 15px' }}
				component='nav'
			>
				{mainListItems}
			</List>
		</MyDrawer>
	)
}
