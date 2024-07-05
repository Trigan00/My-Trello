import * as React from 'react'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import { Accordion, AccordionDetails, AccordionSummary } from './MyAccordion'
import { Box, Skeleton, Typography } from '@mui/material'
import { COLORS } from '@/constants/color.constants'
import Image from 'next/image'
import { DASHBOARD_PAGES } from '@/config/pages-url.config'
import { useWorkspaces } from '@/hooks/workspace-hooks/useWorkspaces'
import { useMedia } from '@/hooks/useMedia'
import { DIMENSIONS } from '@/constants/dimension.constants'
import NextLink from 'next/link'
import shortenText from '@/helpers/shortenText'

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

interface IMainListItems {
	onClose: () => void
}

export function MainListItems({ onClose }: IMainListItems) {
	const { items } = useWorkspaces()
	const matches = useMedia(DIMENSIONS.MD)

	const onClickHandler = () => {
		matches && onClose()
	}

	return (
		<React.Fragment>
			{!items && (
				<Box sx={{ mt: '12px' }}>
					{[1, 2, 3].map(
						//#TODO get workspaces count from localStorage
						el => (
							<Skeleton
								key={el}
								variant='rounded'
								sx={{ mb: '24px' }}
								height={21}
							/>
						)
					)}
				</Box>
			)}
			{items &&
				items.map(ws => (
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
								{shortenText(ws.name, 20)}
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
							{workSpacePages.map(wsp => {
								if (
									(wsp.title === 'Настройки' || wsp.title === 'Статистика') &&
									ws.is_admin === false
								)
									return null
								return (
									<ListItemButton
										key={wsp.link}
										sx={{ py: '6px', px: '18px', borderRadius: '5px' }}
										onClick={onClickHandler}
										component={NextLink}
										href={DASHBOARD_PAGES.HOME + '/' + ws.id + wsp.link}
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
								)
							})}
						</AccordionDetails>
					</Accordion>
				))}
		</React.Fragment>
	)
}
