import React from 'react'
import { useTheme } from '@mui/material/styles'
import dynamic from 'next/dynamic'
import { MyCard } from '@/components/UI/MyCard'
import { Typography } from '@mui/material'
import { MembersStatistics } from '@/types/statistics.types'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

export function BarChart({ stat }: { stat: MembersStatistics }) {
	const theme = useTheme()
	const primary = theme.palette.primary.main
	const successColor = theme.palette.success.main
	const errorColor = theme.palette.error.main

	// chart
	const optionscolumnchart: any = {
		chart: {
			type: 'bar',
			foreColor: '#adb0bb',
			toolbar: {
				show: false
			},
			height: 370
		},
		colors: [primary, successColor, errorColor],
		plotOptions: {
			bar: {
				horizontal: false,
				barHeight: '60%',
				columnWidth: '42%',
				borderRadius: [6],
				borderRadiusApplication: 'end',
				borderRadiusWhenStacked: 'all'
			}
		},

		stroke: {
			show: true,
			width: 5,
			lineCap: 'butt',
			colors: ['transparent']
		},
		dataLabels: {
			enabled: false
		},
		legend: {
			show: true
		},
		grid: {
			borderColor: 'rgba(0,0,0,0.1)',
			strokeDashArray: 3,
			xaxis: {
				lines: {
					show: false
				}
			}
		},
		yaxis: {
			tickAmount: 4
		},
		xaxis: {
			categories: stat.user_names, //['Вася', 'Петя', 'Иван'],
			axisBorder: {
				show: false
			}
		},
		tooltip: {
			theme: 'light',
			fillSeriesColor: false
		}
	}
	const seriescolumnchart: any = stat.dataset.map(
		(el, i) => new Object({ name: stat.labels[i], data: el })
	)

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
			<Chart
				options={optionscolumnchart}
				series={seriescolumnchart}
				type='bar'
				height={370}
				width={'100%'}
			/>
		</MyCard>
	)
}
