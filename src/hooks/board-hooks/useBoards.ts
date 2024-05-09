import { boardsService } from '@/services/board.service'
import { BoardI } from '@/types/board.types'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

export function useBoards(workspace_id: number) {
	const { data, isLoading } = useQuery({
		queryKey: ['boards'],
		queryFn: () => boardsService.getBoards(workspace_id)
	})

	const [items, setItems] = useState<BoardI[] | undefined>(data?.data.boards)

	useEffect(() => {
		setItems(data?.data.boards)
	}, [data?.data])

	return { items, isLoading }
}
