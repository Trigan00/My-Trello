import { boardsService } from '@/services/board.service'
import { taskService } from '@/services/task.service'
import { BoardMemberI } from '@/types/board.types'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

export function useTaskMembers(task_id: number) {
	const { data, isLoading } = useQuery({
		queryKey: ['task members'],
		queryFn: () => taskService.getTaskMembers(task_id)
	})

	const [members, setMembers] = useState<BoardMemberI[] | undefined>(
		data?.data.members
	)

	useEffect(() => {
		setMembers(data?.data.members)
	}, [data?.data])

	return { members, isLoading }
}
