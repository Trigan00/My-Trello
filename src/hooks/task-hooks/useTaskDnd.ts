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
		if (!over) return

		let column_id: number
		if (over.data.current?.type === 'Column') column_id = Number(over.id)
		else column_id = Number(over.data.current?.task.column_id)

		const over_column_tasks = items?.filter(
			task => task.column_id === column_id
		)

		console.log(active.data.current?.task.column_id)
		console.log(over_column_tasks)

		sessionStorage.setItem('TasksState', JSON.stringify(items))

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
