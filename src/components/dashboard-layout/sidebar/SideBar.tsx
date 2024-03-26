'use client'

import { Button, List, Toolbar } from '@mui/material'
import { Drawer } from './MyDrawer'
import { mainListItems } from './listItems'
import { headerHeight } from '../header/Header'
import AddIcon from '@mui/icons-material/Add'

export default function SideBar({ open }: { open: boolean }) {
	return (
		<Drawer
			variant='permanent'
			open={open}
			sx={{
				mt: `${headerHeight}px`
				// background: COLORS.transparent #TODO не работает
			}}
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
		</Drawer>
	)
}
