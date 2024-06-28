import { Metadata } from 'next'
import { GanttComponent } from './Gantt'

export const metadata: Metadata = {
	title: 'Statistics | Gantt'
}

export default function DashBoard() {
	return (
		<div>
			<GanttComponent />
		</div>
	)
}
