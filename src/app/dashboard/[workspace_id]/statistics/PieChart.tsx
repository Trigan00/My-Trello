import { useTheme } from '@mui/material/styles'
import type { SxProps } from '@mui/material/styles'
import type { ApexOptions } from 'apexcharts'

import dynamic from 'next/dynamic'
import { styled } from '@mui/material/styles'
import { MyCard } from '@/components/UI/MyCard'
import { Box, Stack, Typography } from '@mui/material'

const ApexChart = dynamic(() => import('react-apexcharts'), {
	ssr: false,
	loading: () => null
})

const Chart = styled(ApexChart)``

export interface TrafficProps {
	chartSeries: number[]
	labels: string[]
	sx?: SxProps
}

export function PieChart({
	chartSeries,
	labels,
	sx
}: TrafficProps): React.JSX.Element {
	const chartOptions = useChartOptions(labels)

	return (
		<MyCard
			variant='shadowed'
			sx={{
				boxSizing: 'border-box',
				position: 'relative',
				height: '100%',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				p: '20px'
			}}
		>
			<Typography
				variant='h6'
				sx={{
					position: 'absolute',
					top: 10,
					left: 20
				}}
			>
				Test
			</Typography>
			<Stack spacing={2}>
				<Chart
					height={'100%'}
					options={chartOptions}
					series={chartSeries}
					type='donut'
					width='100%'
				/>
				<Box>
					{chartSeries.map((item, index) => {
						const label = labels[index]
						return (
							<Box
								key={index}
								display='flex'
								justifyContent='space-between'
							>
								<Typography>{label}</Typography>
								<Typography>{item + '%'}</Typography>
							</Box>
						)
					})}
				</Box>
			</Stack>
		</MyCard>
	)
}

function useChartOptions(labels: string[]): ApexOptions {
	const theme = useTheme()

	return {
		chart: { background: 'transparent' },
		colors: [
			theme.palette.primary.main,
			theme.palette.success.main,
			theme.palette.error.main
		],
		dataLabels: { enabled: false },
		labels,
		legend: { show: false },
		plotOptions: { pie: { expandOnClick: false } },
		states: {
			active: { filter: { type: 'none' } },
			hover: { filter: { type: 'none' } }
		},
		stroke: { width: 0 },
		theme: { mode: theme.palette.mode },
		tooltip: { fillSeriesColor: false }
	}
}
