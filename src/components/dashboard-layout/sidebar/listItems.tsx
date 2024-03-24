import * as React from 'react'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListSubheader from '@mui/material/ListSubheader'
import DashboardIcon from '@mui/icons-material/Dashboard'
import AssignmentIcon from '@mui/icons-material/Assignment'
import { Accordion, AccordionDetails, AccordionSummary } from './MyAccordion'
import { ListItem, Typography } from '@mui/material'

const workSpaces = ['Work space 1', 'Work space 2', 'Work space 3']
const workSpacePages = [
	{ title: 'Доски', link: 'boards' },
	{ title: 'Календарь', link: 'calendar' },
	{ title: 'Статистика', link: 'statistics' },
	{ title: 'Настройки', link: 'settings' }
]
// const pages = ['Мои задачи', 'Моя статистика']

// export const mainListItems = (
// 	<React.Fragment>
// 		<ListItemButton>
// 			<ListItemIcon>
// 				<DashboardIcon />
// 			</ListItemIcon>
// 			<ListItemText primary='Мои задачи' />
// 		</ListItemButton>
// 		<ListItemButton>
// 			<ListItemIcon>
// 				<ShoppingCartIcon />
// 			</ListItemIcon>
// 			<ListItemText primary='Моя статистика' />
// 		</ListItemButton>
// 		<ListItemButton>
// 			<ListItemIcon>
// 				<BarChartIcon />
// 			</ListItemIcon>
// 			<ListItemText primary='Статистика' />
// 		</ListItemButton>
// 		<ListItemButton>
// 			<ListItemIcon>
// 				<LayersIcon />
// 			</ListItemIcon>
// 			<ListItemText primary='Настройки' />
// 		</ListItemButton>
// 	</React.Fragment>
// )

export const secondaryListItems = (
	<React.Fragment>
		<ListSubheader
			component='div'
			inset
		>
			Рабочие пространства
		</ListSubheader>
		{workSpaces.map(ws => (
			<Accordion
				key={ws}
				variant='outlined'
				sx={{
					border: 'none',
					margin: '0 !important'
				}}
			>
				<ListItem>
					<AccordionSummary
						aria-controls='panel1-content'
						id='panel1-header'
						sx={{
							border: 'none !important',
							p: 0
						}}
					>
						<ListItemIcon>
							<AssignmentIcon />
						</ListItemIcon>
						<Typography
							sx={{
								mr: '60px'
							}}
						>
							{ws}
						</Typography>
					</AccordionSummary>
				</ListItem>
				<AccordionDetails
					sx={{ mt: '-15px', display: 'flex', flexDirection: 'column' }}
				>
					{workSpacePages.map(wsp => (
						<ListItemButton
							key={wsp.link}
							onClick={() => console.log('push(ws + "-id"/wsp.link)')}
						>
							<ListItemIcon sx={{ minWidth: '0', ml: '40px' }}>
								<DashboardIcon fontSize='small' />
							</ListItemIcon>
							<Typography
								sx={{
									// color: textColor,
									fontSize: '0.85rem',
									px: 2
								}}
							>
								{wsp.title}
							</Typography>
						</ListItemButton>
					))}
				</AccordionDetails>
			</Accordion>
		))}
	</React.Fragment>
)
