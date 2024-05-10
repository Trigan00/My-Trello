import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

import { TaskI } from '@/types/task.types'

import { taskService } from '@/services/task.service'

export function useTasks() {
	const { data, isLoading } = useQuery({
		queryKey: ['tasks'],
		queryFn: () => taskService.getTasks()
	})

	const [items, setItems] = useState<TaskI[] | undefined>(data?.data.tasks)

	useEffect(() => {
		setItems(data?.data.tasks)
	}, [data?.data])

	return { items, setItems, isLoading }
}
