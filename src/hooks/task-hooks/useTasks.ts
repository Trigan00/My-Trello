import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

import { TaskI } from '@/types/task.types'

import { taskService } from '@/services/task.service'

export function useTasks(board_id: number) {
	const { data, isLoading } = useQuery({
		queryKey: ['tasks'],
		queryFn: () => taskService.getTasks(board_id)
	})

	const [items, setItems] = useState<TaskI[] | undefined>(data?.data.tasks)

	useEffect(() => {
		setItems(data?.data.tasks)
	}, [data?.data])

	return { items, setItems, isLoading }
}
