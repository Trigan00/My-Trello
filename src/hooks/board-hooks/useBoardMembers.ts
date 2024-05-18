import { errorCatch } from '@/api/error'
import { boardsService } from '@/services/board.service'
import { BoardMemberI } from '@/types/board.types'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'

export function useBoardMembers(board_id: number) {
	const { data, isLoading, error } = useQuery({
		queryKey: ['board members'],
		queryFn: () => boardsService.getBoardMembers(board_id)
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
