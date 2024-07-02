import React from 'react'
import { Button, ButtonGroup } from '@mui/material'
import { ViewMode } from '@/components/gantt_src'

type ViewSwitcherProps = {
	onViewModeChange: (viewMode: ViewMode) => void
}
export const ViewSwitcher: React.FC<ViewSwitcherProps> = ({
	onViewModeChange
}) => {
	return (
		<ButtonGroup
			variant='outlined'
			size='small'
			sx={{
				mb: 2,
				display: 'flex',
				justifyContent: 'center',
				flexWrap: 'wrap'
			}}
		>
			<Button onClick={() => onViewModeChange(ViewMode.Hour)}>Час</Button>
			<Button onClick={() => onViewModeChange(ViewMode.QuarterDay)}>
				Четверть дня
			</Button>
			<Button onClick={() => onViewModeChange(ViewMode.HalfDay)}>
				Половина дня
			</Button>
			<Button onClick={() => onViewModeChange(ViewMode.Day)}>День</Button>
			<Button onClick={() => onViewModeChange(ViewMode.Week)}>Неделя</Button>
			<Button onClick={() => onViewModeChange(ViewMode.Month)}>Месяц</Button>
			<Button onClick={() => onViewModeChange(ViewMode.Year)}>Год</Button>
		</ButtonGroup>
	)
}
