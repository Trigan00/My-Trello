'use client'

import { DragDropContext } from '@hello-pangea/dnd'

import { useTaskDnd } from '@/hooks/task-hooks/useTaskDnd'
import { useTasks } from '@/hooks/task-hooks/useTasks'
import { COLUMNS } from '@/constants/columns.data'
import { KanbanColumn } from './KanbanColumn'
import { Box } from '@mui/material'

interface KanbanI {
	workspace_id: string
	board_id: string
}

export function Kanban({}: KanbanI) {
	const { items, setItems } = useTasks()
	const { onDragEnd } = useTaskDnd()

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Box
				sx={{
					display: 'flex',
					gap: 2
				}}
			>
				{COLUMNS.map(column => (
					<KanbanColumn
						key={column.value}
						value={column.value}
						label={column.label}
						items={items}
						setItems={setItems}
					/>
				))}
			</Box>
		</DragDropContext>
	)
}
