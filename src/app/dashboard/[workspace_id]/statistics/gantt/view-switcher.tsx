import React from 'react'
import { ViewMode } from './gantt_src'

type ViewSwitcherProps = {
	onViewModeChange: (viewMode: ViewMode) => void
}
export const ViewSwitcher: React.FC<ViewSwitcherProps> = ({
	onViewModeChange
}) => {
	return (
		<div className='ViewContainer'>
			<button
				className='Button'
				onClick={() => onViewModeChange(ViewMode.Hour)}
			>
				Hour
			</button>
			<button
				className='Button'
				onClick={() => onViewModeChange(ViewMode.QuarterDay)}
			>
				Quarter of Day
			</button>
			<button
				className='Button'
				onClick={() => onViewModeChange(ViewMode.HalfDay)}
			>
				Half of Day
			</button>
			<button
				className='Button'
				onClick={() => onViewModeChange(ViewMode.Day)}
			>
				Day
			</button>
			<button
				className='Button'
				onClick={() => onViewModeChange(ViewMode.Week)}
			>
				Week
			</button>
			<button
				className='Button'
				onClick={() => onViewModeChange(ViewMode.Month)}
			>
				Month
			</button>
			<button
				className='Button'
				onClick={() => onViewModeChange(ViewMode.Year)}
			>
				Year
			</button>
		</div>
	)
}
