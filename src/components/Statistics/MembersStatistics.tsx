import 'dayjs/locale/ru'
import { Box } from '@mui/material'
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { useState } from 'react'
import dayjs, { Dayjs } from 'dayjs'
import { BarChart } from './BarChart'

export function MembersStatistics() {
	const [date, setDate] = useState<Dayjs | null>(dayjs())

	return (
		<Box mt={5}>
			<LocalizationProvider
				dateAdapter={AdapterDayjs}
				adapterLocale={'ru'}
			>
				<DatePicker
					label={'месяц и год'}
					views={['month', 'year']}
					value={date}
					onChange={newValue => setDate(newValue)}
				/>
			</LocalizationProvider>

			<Box
				mt={1}
				pt={'36px'}
			>
				<BarChart />
			</Box>
		</Box>
	)
}
