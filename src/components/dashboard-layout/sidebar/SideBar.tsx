'use client'

import {
	Box,
	Button,
	Divider,
	IconButton,
	List,
	Toolbar,
	Typography
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Accordion, AccordionDetails, AccordionSummary } from './MyAccordion'
import { useState } from 'react'
import { Drawer } from './MyDrawer'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { secondaryListItems } from './listItems'

const pages = ['Мои задачи', 'Моя статистика']
const workSpaces = ['Work space 1', 'Work space 2', 'Work space 3']
const workSpacePages = ['Доски', 'Календарь', 'Статистика', 'Настройки']

const textColor = '#0B0D0E'

export default function SideBar() {
	const [open, setOpen] = useState(true)
	const toggleDrawer = () => {
		setOpen(prev => !prev)
	}

	return (
		<Drawer
			variant='permanent'
			open={open}
		>
			<Toolbar
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'flex-end',
					px: [1]
				}}
			>
				<IconButton onClick={toggleDrawer}>
					{open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
				</IconButton>
			</Toolbar>
			<List component='nav'>
				{/* {mainListItems} */}
				{/* <Divider sx={{ my: 1 }} /> */}
				{secondaryListItems}
			</List>
		</Drawer>
	)
}
