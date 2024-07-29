import 'dayjs/locale/ru'
import { Box } from '@mui/material'
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { useState } from 'react'
import dayjs, { Dayjs } from 'dayjs'
import { BarChart } from './BarChart'
import { useMembersStatistics } from '@/hooks/statistics-hooks/useMembersStatistics'
import { Loader } from '../UI/Loader/Loader'

interface MembersStatisticsI {
	id: number
	isWorkspace: boolean
	date: Dayjs
}

export function MembersStatistics({
	id,
	isWorkspace,
	date
}: MembersStatisticsI) {
	const { isLoading, stat } = useMembersStatistics({
		id,
		isWorkspace,
		month: date.month() + 1,
		year: date.year()
	})

	return (
		<Box mt={3}>
			{!stat ? (
				<Loader />
			) : (
				<Box
					mt={1}
					pt={'36px'}
				>
					<BarChart stat={stat} />
				</Box>
			)}
		</Box>
	)
}
