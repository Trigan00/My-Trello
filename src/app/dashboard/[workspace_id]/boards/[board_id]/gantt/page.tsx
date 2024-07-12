import { Metadata } from 'next'
import { GanttComponent } from './Gantt'

export const metadata: Metadata = {
	title: 'Gantt'
}

export default function DashBoard({
	params
}: {
	params: { board_id: number }
}) {
	return (
		<div>
			<GanttComponent board_id={params.board_id} />
		</div>
	)
}
