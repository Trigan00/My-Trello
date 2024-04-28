import { Metadata } from 'next'
import { Kanban } from './Kanban'

export const metadata: Metadata = {
	title: 'Tasks'
}

export default function Board({
	params
}: {
	params: { workspace_id: number; board_id: number }
}) {
	return (
		<Kanban
			workspace_id={params.workspace_id}
			board_id={params.board_id}
		/>
	)
}
