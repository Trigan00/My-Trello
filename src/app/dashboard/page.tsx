import dynamic from 'next/dynamic'
import { Metadata } from 'next'
// import Description from './[workspace_id]/boards/[board_id]/task_info/Description'
const Description = dynamic(
	() => import('./[workspace_id]/boards/[board_id]/task_info/Description'),
	{
		ssr: false
	}
)

export const metadata: Metadata = {
	title: 'Dashboard'
}

export default function DashBoard() {
	return (
		<div>
			<Description />
		</div>
	)
}
