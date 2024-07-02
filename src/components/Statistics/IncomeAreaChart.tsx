import { MyCard } from '@/components/UI/MyCard'
import { GeneralStatistics } from '@/types/statistics.types'
import { Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { ApexOptions } from 'apexcharts'
import dynamic from 'next/dynamic'
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

const areaChartOptions: ApexOptions = {
	chart: {
		height: 450,
		type: 'area',
		toolbar: {
			show: false
		}
	},
	dataLabels: {
		enabled: false
	},
	stroke: {
		curve: 'smooth',
		width: 2
	},
	grid: {
		strokeDashArray: 0
	}
}

export default function IncomeAreaChart({ stat }: { stat: GeneralStatistics }) {
	const theme = useTheme()
	const { primary, secondary } = theme.palette.text
	const line = theme.palette.divider

	const options = {
		...areaChartOptions,
		colors: [
			theme.palette.primary.main,
			theme.palette.success.main,
			theme.palette.error.main
		],
		xaxis: {
			categories: stat.all.reduce((acc: number) => acc + 1, 0),
			axisBorder: {
				show: true,
				color: line
			},
			tickAmount: 10
		},
		yaxis: {
			labels: {
				style: {
					colors: [secondary]
				}
			}
		},
		grid: {
			borderColor: line
		}
	}

	const series = [
		{
			name: 'Всего',
			// data: [1, 2, null, 3, 4]
			data: stat.all
		},
		{
			name: 'Выполнено',
			data: stat.in
		},
		{
			name: 'Просрочено',
			data: stat.not_in
		}
	]

	return (
		<MyCard
			variant='shadowed'
			sx={{
				pt: '5px'
			}}
		>
			<Typography
				variant='h6'
				sx={{
					ml: '20px'
				}}
			>
				Test
			</Typography>
			<ReactApexChart
				options={options}
				series={series}
				type='area'
				height={450}
				width={'100%'}
			/>
		</MyCard>
	)
}
