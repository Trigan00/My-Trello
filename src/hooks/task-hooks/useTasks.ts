import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

import { TaskI } from '@/types/task.types'

import { taskService } from '@/services/task.service'
import { errorCatch } from '@/api/error'
import { toast } from 'sonner'

export function useTasks(board_id: number) {
	const { data, isLoading, error } = useQuery({
		queryKey: ['tasks', board_id],
		queryFn: () => taskService.getTasks(board_id)
	})

	const [items, setItems] = useState<TaskI[] | undefined>(data?.data.tasks)

	useEffect(() => {
		if (error) toast.error(errorCatch(error))
	}, [error])

	useEffect(() => {
		setItems(data?.data.tasks)
	}, [data?.data])

	return { items, setItems, isLoading }
}
