import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

import { FullTaskI } from '@/types/task.types'

import { taskService } from '@/services/task.service'

export function useOneTask(id: number) {
	const { data, isLoading } = useQuery({
		queryKey: ['task'],
		queryFn: () => taskService.getOneTask(id)
	})

	const [task, setTask] = useState<FullTaskI | undefined>(data?.data)

	useEffect(() => {
		setTask(data?.data)
	}, [data?.data])

	return { task, isLoading }
}
