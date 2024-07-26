'use client'

import { useTaskDnd } from '@/hooks/task-hooks/useTaskDnd'
import { useTasks } from '@/hooks/task-hooks/useTasks'
import { Box, Skeleton } from '@mui/material'
import { KanbanColumn } from './KanbanColumn'
import { useGetColumns } from '@/hooks/columns-hooks/useGetColumns'
import {
	DndContext,
	DragOverEvent,
	DragOverlay,
	DragStartEvent,
	MouseSensor,
	pointerWithin,
	TouchSensor,
	useSensor,
	useSensors
} from '@dnd-kit/core'
import { TaskI } from '@/types/task.types'
import { useState } from 'react'
import { KanbanCard } from './KanbanCard'
import { AddColumn } from './AddColumn'
import { arrayMove } from '@dnd-kit/sortable'

interface KanbanI {
	workspace_id: number
	board_id: number
}

export function Kanban({ board_id }: KanbanI) {
	const { columns, isLoading } = useGetColumns(board_id)
	const { items, setItems } = useTasks(board_id)
	const { onDragEnd } = useTaskDnd({ items, setItems })
	const [activeTask, setActiveTask] = useState<TaskI | null>(null)

	function onDragStart(event: DragStartEvent) {
		if (event.active.data.current?.type === 'Task') {
			setActiveTask(event.active.data.current.task)
			// document.body.style.setProperty('cursor', 'grabbing')
			return
		}
	}

	function onDragOver(event: DragOverEvent) {
		const { active, over } = event
		if (!over) return

		const activeId = active.id
		const overId = over.id
		// console.log('over: ' + overId)
		// console.log('active: ' + activeId)
		if (activeId === overId) return

		const isActiveATask = active.data.current?.type === 'Task'
		const isOverATask = over.data.current?.type === 'Task'

		if (!isActiveATask) return

		// Im dropping a Task over another Task
		if (isActiveATask && isOverATask) {
			setItems(tasks => {
				if (!tasks) return
				const activeIndex = tasks.findIndex(t => t.task_id === activeId)
				const overIndex = tasks.findIndex(t => t.task_id === overId)

				tasks[activeIndex].column_id = tasks[overIndex].column_id
				// if (tasks[activeIndex].column_id != tasks[overIndex].column_id) {
				// 	// Fix introduced after video recording
				// 	tasks[activeIndex].column_id = tasks[overIndex].column_id
				// 	return arrayMove(tasks, activeIndex, overIndex - 1)
				// }

				return arrayMove(tasks, activeIndex, overIndex)
			})
			return
		}

		const isOverAColumn = over.data.current?.type === 'Column'

		// Im dropping a Task over a column
		if (isActiveATask && isOverAColumn) {
			setItems(tasks => {
				if (!tasks) return

				const activeIndex = tasks.findIndex(t => t.task_id === activeId)

				tasks[activeIndex].column_id = Number(overId)
				// console.log('DROPPING TASK OVER COLUMN', { activeIndex })
				return arrayMove(tasks, activeIndex, activeIndex)
			})
		}
	}

	const mouseSensor = useSensor(MouseSensor, {
		activationConstraint: {
			distance: 10
		}
	})
	const touchSensor = useSensor(TouchSensor, {
		activationConstraint: {
			delay: 100,
			tolerance: 5
		}
	})

	const sensors = useSensors(mouseSensor, touchSensor)

	return (
		<Box
			sx={{
				boxSizing: 'border-box',
				height: '100%',
				display: 'flex',
				p: 4,
				gap: 3,
				overflowX: 'auto' //без него ставиться, с ним не вращается
			}}
		>
			<DndContext
				sensors={sensors}
				onDragEnd={onDragEnd}
				onDragStart={onDragStart}
				onDragOver={onDragOver}
				collisionDetection={pointerWithin}
			>
				{!columns || items === undefined
					? new Array(4).fill(null).map((_, i) => (
							<div key={i}>
								<Skeleton
									variant='rounded'
									sx={{
										borderRadius: '15px',
										width: '300px',
										height: '200px'
									}}
								/>
							</div>
						))
					: columns.map(column => (
							<KanbanColumn
								key={column.id}
								column_id={column.id}
								board_id={board_id}
								label={column.name}
								items={items}
								setItems={setItems}
							/>
						))}
				<DragOverlay>
					{activeTask && <KanbanCard item={activeTask} />}
				</DragOverlay>
			</DndContext>
			<AddColumn board_id={board_id} />
		</Box>
	)
}
