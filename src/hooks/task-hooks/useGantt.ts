import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { taskService } from '@/services/task.service'
import { errorCatch } from '@/api/error'
import { toast } from 'sonner'
import { Task } from '@/components/gantt_src'
import dayjs from 'dayjs'

export function useGantt({
	board_id,
	sort_by
}: {
	board_id: number
	sort_by: 'default' | 'columns'
}) {
	const { data, isLoading, error, refetch } = useQuery({
		queryKey: ['gantt', board_id],
		queryFn: () => taskService.getGantt(board_id, sort_by)
	})

	const [tasks, setTasks] = useState<Task[] | undefined>(data?.data.tasks)

	useEffect(() => {
		if (error) toast.error(errorCatch(error))
	}, [error])

	useEffect(() => {
		const temp = data?.data.tasks.map(t => {
			return {
				...t,
				start: new Date(t.start),
				end: new Date(t.end)
			}
		})
		setTasks(temp)
	}, [data?.data])

	return { tasks, refetch, setTasks, isLoading }
}
