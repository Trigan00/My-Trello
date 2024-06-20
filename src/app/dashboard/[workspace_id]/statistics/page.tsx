import { Metadata } from 'next'
import { StatisticsWrapper } from './StatisticsWrapper'

export const metadata: Metadata = {
	title: 'Statistics'
}

export default function Statistics({
	params
}: {
	params: { workspace_id: number }
}) {
	return <StatisticsWrapper workspace_id={params.workspace_id} />
}
