'use client'

import {
	Box,
	Button,
	ButtonGroup,
	ToggleButton,
	ToggleButtonGroup
} from '@mui/material'
import { useState } from 'react'
import { GeneralStatistics } from './GeneralStatistics'
import { MembersStatistics } from './MembersStatistics'
import { useIsAdmin } from '@/hooks/useIsAdmin'
import dayjs, { Dayjs } from 'dayjs'
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { MyCard } from '../UI/MyCard'

interface StatisticsWrapperI {
	id: number
	isWorkspace: boolean
}

export function StatisticsWrapper({ id, isWorkspace }: StatisticsWrapperI) {
	const [date, setDate] = useState<Dayjs>(dayjs())
	const [isGeneral, setISGeneral] = useState(true)

	const handleChange = (
		event: React.MouseEvent<HTMLElement>,
		variant: boolean
	) => {
		setISGeneral(variant)
	}

	const isAdmin = useIsAdmin()
	return (
		<Box sx={{ p: 4 }}>
			<MyCard
				variant='outlined'
				p={2}
				display='flex'
				justifyContent='space-between'
			>
				<LocalizationProvider
					dateAdapter={AdapterDayjs}
					adapterLocale={'ru'}
				>
					<DatePicker
						label={'месяц и год'}
						views={['month', 'year']}
						value={date}
						onChange={newValue => setDate(newValue || dayjs())}
					/>
				</LocalizationProvider>
				{isAdmin && (
					<ToggleButtonGroup
						color='primary'
						value={isGeneral}
						exclusive
						onChange={handleChange}
						sx={{ textTransform: 'lowercase' }}
					>
						<ToggleButton
							value={true}
							sx={{ textTransform: 'initial' }}
						>
							Основная
						</ToggleButton>
						<ToggleButton
							value={false}
							sx={{ textTransform: 'initial' }}
						>
							Участники
						</ToggleButton>
					</ToggleButtonGroup>
				)}
			</MyCard>
			{isGeneral && isAdmin ? (
				<GeneralStatistics
					id={id}
					isWorkspace={isWorkspace}
					date={date}
				/>
			) : (
				<MembersStatistics
					id={id}
					isWorkspace={isWorkspace}
					date={date}
				/>
			)}
		</Box>
	)
}
