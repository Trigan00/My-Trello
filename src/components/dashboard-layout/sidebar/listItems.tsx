import * as React from 'react'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import { Accordion, AccordionDetails, AccordionSummary } from './MyAccordion'
import { Typography } from '@mui/material'
import { COLORS } from '@/constants/color.constants'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { DASHBOARD_PAGES } from '@/config/pages-url.config'

const workSpaces = [
	{ id: 0, title: 'Пространство 1', englishLink: 'Prostranstvo1' },
	{ id: 1, title: 'Пространство 2', englishLink: 'Prostranstvo2' },
	{ id: 2, title: 'Пространство 3', englishLink: 'Prostranstvo3' }
]
const workSpacePages = [
	{ title: 'Доски', link: '/boards', icon: '/svg/boards.svg' },
	{
		title: 'Статистика',
		link: '/statistics',
		icon: '/svg/statistics.svg'
	},
	{
		title: 'Настройки',
		link: '/settings',
		icon: '/svg/settings.svg'
	}
]

export function MainListItems() {
	const { push } = useRouter()

	return (
		<React.Fragment>
			{workSpaces.map(ws => (
				<Accordion
					key={ws.id}
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
							{ws.title}
						</Typography>
					</AccordionSummary>
					{/* </ListItem> */}
					<AccordionDetails
						sx={{
							mt: '-15px',
							px: 0,
							display: 'flex',
							flexDirection: 'column'
						}}
					>
						{workSpacePages.map(wsp => (
							<ListItemButton
								key={wsp.link}
								sx={{ py: '6px', px: '18px', borderRadius: '5px' }}
								onClick={() =>
									push(
										DASHBOARD_PAGES.HOME +
											'/' +
											ws.title +
											'-' +
											ws.id +
											wsp.link
									)
								}
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
}
