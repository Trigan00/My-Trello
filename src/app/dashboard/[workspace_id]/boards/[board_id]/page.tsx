import { Kanban } from './Kanban'

export default function Board({
	params
}: {
	params: { workspace_id: string; board_id: string }
}) {
	return (
		<Kanban
			workspace_id={params.workspace_id}
			board_id={params.board_id}
		/>
	)
}
