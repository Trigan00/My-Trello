import React from 'react'
import {
	Box,
	MenuItem,
	Select,
	SelectChangeEvent,
	Typography
} from '@mui/material'
import { ViewMode } from '@/components/gantt_src'

type ViewSwitcherProps = {
	sortType: 'columns' | 'default'
	setSort: React.Dispatch<React.SetStateAction<'columns' | 'default'>>
	view: ViewMode
	setView: (value: React.SetStateAction<ViewMode>) => void
}
export const ViewSwitcher: React.FC<ViewSwitcherProps> = ({
	sortType,
	setSort,
	view,
	setView
}) => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexWrap: 'wrap',
				gap: 1,
				mb: 2
			}}
		>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					gap: 1
				}}
			>
				<Typography
					variant='body1'
					color='GrayText'
				>
					Группировка:
				</Typography>
				<Select
					size='small'
					value={sortType}
					variant='outlined'
					onChange={(event: SelectChangeEvent) =>
						setSort(event.target.value as 'default' | 'columns')
					}
				>
					<MenuItem value={'default'}>Задачи</MenuItem>
					<MenuItem value={'columns'}>Колонки</MenuItem>
				</Select>
			</Box>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					gap: 1
				}}
			>
				<Typography
					variant='body1'
					color='GrayText'
				>
					Сортировка:
				</Typography>
				<Select
					size='small'
					value={view}
					variant='outlined'
					onChange={(event: SelectChangeEvent) =>
						setView(event.target.value as ViewMode)
					}
				>
					<MenuItem value={ViewMode.Hour}>Час</MenuItem>
					<MenuItem value={ViewMode.QuarterDay}>Четверть дня</MenuItem>
					<MenuItem value={ViewMode.HalfDay}>Половина дня</MenuItem>
					<MenuItem value={ViewMode.Day}>День</MenuItem>
					<MenuItem value={ViewMode.Week}>Неделя</MenuItem>
					<MenuItem value={ViewMode.Month}>Месяц</MenuItem>
					<MenuItem value={ViewMode.Year}>Год</MenuItem>
				</Select>
			</Box>
		</Box>
	)
}
