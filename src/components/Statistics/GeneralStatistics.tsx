import 'dayjs/locale/ru'
import { Box, Grid } from '@mui/material'
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import IncomeAreaChart from './IncomeAreaChart'
import { PieChart } from './PieChart'
import dayjs, { Dayjs } from 'dayjs'
import { useState } from 'react'
import { useGeneralStatistics } from '@/hooks/statistics-hooks/useGeneralStatistics'
import { Loader } from '../UI/Loader/Loader'

interface GeneralStatisticsI {
	id: number
	isWorkspace: boolean
}

export function GeneralStatistics({ id, isWorkspace }: GeneralStatisticsI) {
	const [date, setDate] = useState<Dayjs>(dayjs())
	const { isLoading, stat } = useGeneralStatistics({
		id,
		isWorkspace,
		month: date.month() + 1,
		year: date.year()
	})

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
					onChange={newValue => setDate(newValue || dayjs())}
				/>
			</LocalizationProvider>
			{!stat ? (
				<Loader />
			) : (
				<Grid
					mt={1}
					container
					rowSpacing={4.5}
					columnSpacing={2.75}
				>
					<Grid
						item
						xs={12}
						lg={8}
					>
						<IncomeAreaChart stat={stat} />
					</Grid>
					<Grid
						item
						xs={12}
						lg={4}
					>
						<PieChart
							chartSeries={stat.pie_series.map(el => el.value)}
							labels={stat.pie_series.map(el => el.name)}
						/>
					</Grid>
				</Grid>
			)}
		</Box>
	)
}
