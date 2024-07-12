'use client'

import { useTaskDnd } from '@/hooks/task-hooks/useTaskDnd'
import { useTasks } from '@/hooks/task-hooks/useTasks'
import { Box, Skeleton } from '@mui/material'
import { KanbanColumn } from './KanbanColumn'
import { useGetColumns } from '@/hooks/columns-hooks/useGetColumns'
import { headerHeight } from '@/components/dashboard-layout/header/Header'
import {
	DndContext,
	DragOverlay,
	DragStartEvent,
	MouseSensor,
	TouchSensor,
	useSensor,
	useSensors
} from '@dnd-kit/core'
import { TaskI } from '@/types/task.types'
import { useState } from 'react'
import { KanbanCard } from './KanbanCard'
import { AddColumn } from './AddColumn'

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
			>
				{!columns
					? new Array(4).fill(null).map((_, i) => (
							<Box key={i}>
								<Skeleton
									variant='rounded'
									sx={{
										borderRadius: '15px',
										width: '300px',
										height: '200px'
									}}
								/>
							</Box>
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
