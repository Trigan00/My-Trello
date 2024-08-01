'use client'

import { useTasks } from '@/hooks/task-hooks/useTasks'
import { Box, Skeleton } from '@mui/material'
import { KanbanColumn } from './KanbanColumn'
import { useGetColumns } from '@/hooks/columns-hooks/useGetColumns'
import {
	DndContext,
	DragEndEvent,
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
import { useUpdateTask } from '@/hooks/task-hooks/useUpdateTask'

interface KanbanI {
	workspace_id: number
	board_id: number
}

export function Kanban({ board_id }: KanbanI) {
	const { columns, isLoading } = useGetColumns(board_id)
	const { items, setItems } = useTasks(board_id)
	const { updateTask } = useUpdateTask(onError)

	const [activeTask, setActiveTask] = useState<TaskI | null>(null)
	const [activeColumnId, setActiveColumnId] = useState<number | null>(null)

	function onError() {
		const arr = sessionStorage.getItem('TasksState')
		if (arr) {
			setItems(JSON.parse(arr) as TaskI[])
		}
		sessionStorage.removeItem('TasksState')
	}

	const onDragEnd = (event: DragEndEvent) => {
		const { active, over } = event
		if (!over) return

		let column_id: number
		if (over.data.current?.type === 'Column') column_id = Number(over.id)
		else column_id = Number(over.data.current?.task.column_id)

		const prev_column_tasks_id: number[] = []
		const over_column_tasks_id: number[] = []

		for (const task of items || []) {
			if (task.column_id === activeColumnId)
				prev_column_tasks_id.push(task.task_id)
			if (task.column_id === column_id) over_column_tasks_id.push(task.task_id)
		}

		// console.log(prev_column_tasks_id)
		// console.log(over_column_tasks_id)

		setActiveTask(null)
		setActiveColumnId(null)

		sessionStorage.setItem('TasksState', JSON.stringify(items))

		document.body.style.setProperty('cursor', '')

		updateTask({
			id: Number(active.id),
			data: {
				column_id: column_id,
				initial_order: prev_column_tasks_id,
				finite_order: over_column_tasks_id
			}
		})
	}

	function onDragStart(event: DragStartEvent) {
		if (event.active.data.current?.type === 'Task') {
			setActiveTask(event.active.data.current.task)
			setActiveColumnId(event.active.data.current.task.column_id)
			// document.body.style.setProperty('cursor', 'grabbing')
			return
		}
	}

	function onDragOver(event: DragOverEvent) {
		const { active, over } = event
		if (!over) return

		const activeId = active.id
		const overId = over.id
		if (activeId === overId) return

		const isActiveATask = active.data.current?.type === 'Task'
		const isOverATask = over.data.current?.type === 'Task'

		if (!isActiveATask) return

		// Im dropping a Task over another Task
		if (isActiveATask && isOverATask) {
			setItems(tasks => {
				if (!tasks) return
				const activeIndex = tasks.findIndex(t => t.task_id == activeId)
				const overIndex = tasks.findIndex(t => t.task_id == overId)

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

				const activeIndex = tasks.findIndex(t => t.task_id == activeId)

				tasks[activeIndex].column_id = Number(overId)
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
