import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

import { FullTaskI } from '@/types/task.types'

import { taskService } from '@/services/task.service'
import { errorCatch } from '@/api/error'
import { toast } from 'sonner'

export function useOneTask(id: number) {
	const { data, isLoading, error } = useQuery({
		queryKey: [`task ${id}`],
		queryFn: () => taskService.getOneTask(id)
	})

	const [task, setTask] = useState<FullTaskI | undefined>(data?.data)

	useEffect(() => {
		if (error) toast.error(errorCatch(error))
	}, [error])

	useEffect(() => {
		setTask(data?.data)
	}, [data?.data])

	return { task, isLoading }
}
