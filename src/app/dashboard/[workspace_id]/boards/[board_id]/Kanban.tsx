'use client'

interface KanbanI {
	workspace_id: string
	board_id: string
}

export function Kanban({ workspace_id, board_id }: KanbanI) {
	return (
		<div>
			{workspace_id} <br /> {board_id}
		</div>
	)
}
