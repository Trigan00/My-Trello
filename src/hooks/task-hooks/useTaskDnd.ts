import { useUpdateTask } from './useUpdateTask'
import { TaskI } from '@/types/task.types'
import { Dispatch, SetStateAction } from 'react'
import { DragEndEvent } from '@dnd-kit/core'

interface useTaskDndI {
	items: TaskI[] | undefined
	setItems: Dispatch<SetStateAction<TaskI[] | undefined>>
}

export function useTaskDnd({ items, setItems }: useTaskDndI) {
	const { updateTask } = useUpdateTask(onError)

	function onError() {
		const arr = sessionStorage.getItem('TasksState')
		if (arr) {
			setItems(JSON.parse(arr) as TaskI[])
		}
		sessionStorage.removeItem('TasksState')
	}

	const onDragEnd = (event: DragEndEvent) => {
		const { active, over } = event
		// if (!over) return

		// const activeId = active.id
		// const overId = over.id
		// console.log(items)

		sessionStorage.setItem('TasksState', JSON.stringify(items))

		// const tempItem = items?.find(
		// 	value => value.task_id === Number(activeId)
		// ) as TaskI
		// tempItem.column_id = Number(overId)
		// const tempItems = items?.filter(value => value.task_id !== Number(activeId))
		// tempItems?.push(tempItem as TaskI)
		// setItems(tempItems)
		document.body.style.setProperty('cursor', '')

		// updateTask({
		// 	id: Number(activeId),
		// 	data: {
		// 		// createdAt: newCreatedAt,
		// 		column_id: Number(overId)
		// 	}
		// })
	}

	return { onDragEnd }
}
