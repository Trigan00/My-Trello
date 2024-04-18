'use client'

import { EnumTaskPriority, TaskI } from '@/types/task.types'
import { DragDropContext } from '@hello-pangea/dnd'

interface KanbanI {
	workspace_id: string
	board_id: string
}

const tasks: TaskI[] = [
	{ id: 1, isCompleted: false, name: 'task 1', priority: EnumTaskPriority.low },
	{ id: 2, isCompleted: true, name: 'task 2', priority: EnumTaskPriority.high },
	{
		id: 3,
		isCompleted: false,
		name: 'task 3',
		priority: EnumTaskPriority.medium
	},
	{ id: 4, isCompleted: true, name: 'task 4', priority: EnumTaskPriority.low },
	{ id: 5, isCompleted: false, name: 'task 5', priority: EnumTaskPriority.high }
]

export function Kanban({ workspace_id, board_id }: KanbanI) {
	// const { onDragEnd } = useTaskDnd()

	return 'Hello'
	// <DragDropContext onDragEnd={onDragEnd}>
	// 	<div className={styles.board}>
	// 		{COLUMNS.map(column => (
	// 			<KanbanColumn
	// 				key={column.value}
	// 				value={column.value}
	// 				label={column.label}
	// 				items={tasks}
	// 				setItems={setItems}
	// 			/>
	// 		))}
	// 	</div>
	// </DragDropContext>
}
