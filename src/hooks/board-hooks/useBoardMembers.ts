import { boardsService } from '@/services/board.service'
import { IUser } from '@/types/auth.types'
import { BoardMemberI } from '@/types/board.types'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

export function useBoardMembers(board_id: number) {
	const { data, isLoading } = useQuery({
		queryKey: ['board members'],
		queryFn: () => boardsService.getBoardMembers(board_id)
	})

	const [members, setMembers] = useState<BoardMemberI[] | undefined>(
		data?.data.members
	)

	useEffect(() => {
		setMembers(data?.data.members)
	}, [data?.data])

	return { members, isLoading }
}
