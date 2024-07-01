import { StatisticsWrapper } from '@/components/Statistics/StatisticsWrapper'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Statistics'
}

export default function Statistics({
	params
}: {
	params: { board_id: number }
}) {
	return (
		<StatisticsWrapper
			id={params.board_id}
			isWorkspace={false}
		/>
	)
}
