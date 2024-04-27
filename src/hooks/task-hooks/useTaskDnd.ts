import { DropResult } from '@hello-pangea/dnd'

// import { FILTERS } from '../columns.data'

import { useUpdateTask } from './useUpdateTask'
import { TaskI } from '@/types/task.types'
import { Dispatch, SetStateAction } from 'react'

interface useTaskDndI {
	items: TaskI[] | undefined
	setItems: Dispatch<SetStateAction<TaskI[] | undefined>>
}

export function useTaskDnd({ items, setItems }: useTaskDndI) {
	const { updateTask } = useUpdateTask()

	const onDragEnd = (result: DropResult) => {
		if (!result.destination) return

		const destinationColumnId = result.destination.droppableId
		if (destinationColumnId === result.source.droppableId) return

		const tempItem = items?.find(
			value => value.id === Number(result.draggableId)
		) as TaskI
		tempItem.column_id = Number(destinationColumnId)
		const tempItems = items?.filter(
			value => value.id !== Number(result.draggableId)
		)
		tempItems?.push(tempItem as TaskI)
		setItems(tempItems)

		updateTask({
			id: Number(result.draggableId),
			data: {
				// createdAt: newCreatedAt,
				column_id: Number(destinationColumnId)
			}
		})
	}

	return { onDragEnd }
}
