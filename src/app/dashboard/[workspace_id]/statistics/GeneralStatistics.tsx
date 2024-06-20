import 'dayjs/locale/ru'
import { Box, Grid } from '@mui/material'
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import IncomeAreaChart from './IncomeAreaChart'
import { PieChart } from './PieChart'
import Timeline from './Timeline'

import dayjs, { Dayjs } from 'dayjs'
import { useState } from 'react'

interface GeneralStatisticsI {
	workspace_id: number
}

export function GeneralStatistics({}: GeneralStatisticsI) {
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
					<IncomeAreaChart />
				</Grid>
				<Grid
					item
					xs={12}
					lg={4}
				>
					<PieChart
						chartSeries={[63, 15, 22]}
						labels={['Всего', 'Выполнено', 'Просрочено']}
					/>
				</Grid>
			</Grid>

			<Timeline />
		</Box>
	)
}
