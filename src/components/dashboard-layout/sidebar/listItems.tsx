import * as React from 'react'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import { Accordion, AccordionDetails, AccordionSummary } from './MyAccordion'
import { Typography } from '@mui/material'
import { COLORS } from '@/constants/color.constants'
import Image from 'next/image'

const workSpaces = ['Пространство #1', 'Пространство #2', 'Пространство #3']
const workSpacePages = [
	{ title: 'Доски', link: 'boards', icon: '/svg/boards.svg' },
	{ title: 'Статистика', link: 'statistics', icon: '/svg/statistics.svg' },
	{ title: 'Участники', link: 'members', icon: '/svg/members.svg' }
	// { title: 'Настройки', link: 'settings' }
]

export const mainListItems = (
	<React.Fragment>
		{workSpaces.map(ws => (
			<Accordion
				key={ws}
				variant='outlined'
				sx={{
					border: 'none',
					margin: '0 !important'
				}}
			>
				{/* <ListItem> */}
				<AccordionSummary
					aria-controls='panel1-content'
					id='panel1-header'
					sx={{
						border: 'none !important',
						p: 0,
						m: 0
					}}
				>
					{/* <ListItemIcon>
							<AssignmentIcon />
						</ListItemIcon> */}
					<Typography
						fontSize={14}
						fontWeight={500}
						color={COLORS.textBlack}
					>
						{ws}
					</Typography>
				</AccordionSummary>
				{/* </ListItem> */}
				<AccordionDetails
					sx={{ mt: '-15px', px: 0, display: 'flex', flexDirection: 'column' }}
				>
					{workSpacePages.map(wsp => (
						<ListItemButton
							key={wsp.link}
							sx={{ py: '6px', px: '18px', borderRadius: '5px' }}
							onClick={() => console.log('push(ws + "-id"/wsp.link)')}
						>
							<ListItemIcon sx={{ minWidth: '0' }}>
								<Image
									src={wsp.icon}
									alt={wsp.icon}
									width={16}
									height={16}
								/>
							</ListItemIcon>
							<Typography
								fontSize={14}
								fontWeight={500}
								sx={{
									color: COLORS.textGrey,
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
