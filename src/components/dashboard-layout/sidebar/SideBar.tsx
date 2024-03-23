'use client'

import { Box, Button, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Accordion, AccordionDetails, AccordionSummary } from './MyAccordion'

const pages = ['Мои задачи', 'Моя статистика']
const workSpaces = ['Work space 1', 'Work space 2', 'Work space 3']
const workSpacePages = ['Доски', 'Календарь', 'Статистика', 'Настройки']

const textColor = '#0B0D0E'

export default function SideBar() {
	return (
		<Box
			sx={{
				maxWidth: '270px',
				width: '100%',
				height: 'calc(100vh - 70px)',
				minHeight: '100%',
				borderRight: '1px solid rgb(229, 234, 242)',
				p: 2,
				boxSizing: 'border-box'
			}}
		>
			<Box sx={{ mb: '100px' }}>
				{pages.map(page => (
					<Button
						key={page}
						size='small'
						fullWidth
						sx={{
							textTransform: 'inherit',
							justifyContent: 'flex-start',
							px: 2
						}}
					>
						<Typography
							sx={{
								color: textColor,
								fontWeight: '500'
							}}
						>
							{page}
						</Typography>
					</Button>
				))}
			</Box>
			<Typography
				sx={{
					mb: 1,
					textAlign: 'center',
					fontSize: '0.9rem',
					textTransform: 'uppercase',
					fontWeight: '700',
					color: textColor
				}}
			>
				Рабочие пространства
			</Typography>
			<Box>
				{workSpaces.map(ws => (
					<Accordion
						key={ws}
						variant='outlined'
						sx={{
							border: 'none',
							margin: '0 !important'
						}}
					>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon color='primary' />}
							aria-controls='panel1-content'
							id='panel1-header'
							sx={{
								border: 'none !important'
							}}
						>
							<Typography
								sx={{
									fontSize: '0.875rem',
									color: textColor,
									fontWeight: '500'
								}}
							>
								{ws}
							</Typography>
						</AccordionSummary>
						<AccordionDetails sx={{ mt: '-15px' }}>
							{workSpacePages.map(wsp => (
								<Button
									key={wsp}
									size='small'
									fullWidth
									sx={{
										textTransform: 'inherit',
										justifyContent: 'flex-start',
										pl: 3
									}}
								>
									<Typography
										sx={{
											color: textColor,
											fontSize: '0.85rem'
										}}
									>
										{wsp}
									</Typography>
								</Button>
							))}
						</AccordionDetails>
					</Accordion>
				))}
			</Box>
		</Box>
	)
}
