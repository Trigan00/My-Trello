import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

import { TaskI } from '@/types/task.types'

import { taskService } from '@/services/task.service'
import { errorCatch } from '@/api/error'
import { toast } from 'sonner'

export function useTaskDependence(task_id: number) {
	const { data, isLoading, error } = useQuery({
		queryKey: ['task dependence', task_id],
		queryFn: () => taskService.getTaskDependencies(task_id)
	})

	const [dependencies, setDependencies] = useState<TaskI[] | undefined>(
		data?.data.tasks
	)

	useEffect(() => {
		if (error) toast.error(errorCatch(error))
	}, [error])

	useEffect(() => {
		setDependencies(data?.data.tasks)
	}, [data?.data])

	return { dependencies, setDependencies, isLoading }
}
