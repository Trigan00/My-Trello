import { errorCatch } from '@/api/error'
import { boardsService } from '@/services/board.service'
import { taskService } from '@/services/task.service'
import { BoardMemberI } from '@/types/board.types'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'

export function useTaskMembers(task_id: number) {
	const { data, isLoading, error } = useQuery({
		queryKey: ['task members', task_id],
		queryFn: () => taskService.getTaskMembers(task_id)
	})

	const [members, setMembers] = useState<BoardMemberI[] | undefined>(
		data?.data.members
	)

	useEffect(() => {
		if (error) toast.error(errorCatch(error))
	}, [error])

	useEffect(() => {
		setMembers(data?.data.members)
	}, [data?.data])

	return { members, isLoading }
}
