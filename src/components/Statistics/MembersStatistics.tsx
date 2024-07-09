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
}

export function MembersStatistics({ id, isWorkspace }: MembersStatisticsI) {
	const [date, setDate] = useState<Dayjs>(dayjs())
	const { isLoading, stat } = useMembersStatistics({
		id,
		isWorkspace,
		month: date.month() + 1,
		year: date.year()
	})

	return (
		<Box mt={3}>
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
