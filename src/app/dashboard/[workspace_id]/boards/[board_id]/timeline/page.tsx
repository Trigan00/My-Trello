import { Metadata } from 'next'
import LogsTimeline from './LogsTimeline'

export const metadata: Metadata = {
	title: 'Timeline'
}

export default function TimeLine({ params }: { params: { board_id: number } }) {
	return (
		<>
			<LogsTimeline />
		</>
	)
}
