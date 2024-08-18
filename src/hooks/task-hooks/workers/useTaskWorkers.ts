import { errorCatch } from '@/api/error'
import { taskService } from '@/services/task.service'
import { BoardMemberI } from '@/types/board.types'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'

export function useTaskWorkers(task_id: number) {
	const { data, isLoading, error } = useQuery({
		queryKey: ['task workers', task_id],
		queryFn: () => taskService.getTaskWorkers(task_id)
	})

	const [workers, setWorkers] = useState<BoardMemberI[] | undefined>(
		data?.data.members
	)

	useEffect(() => {
		if (error) toast.error(errorCatch(error))
	}, [error])

	useEffect(() => {
		setWorkers(data?.data.members)
	}, [data?.data])

	return { workers, isLoading }
}
