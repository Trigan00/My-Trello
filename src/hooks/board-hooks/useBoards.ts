import { errorCatch } from '@/api/error'
import { boardsService } from '@/services/board.service'
import { BoardI } from '@/types/board.types'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'

export function useBoards(workspace_id: number) {
	const { data, isLoading, error } = useQuery({
		queryKey: ['boards', workspace_id],
		queryFn: () => boardsService.getBoards(workspace_id)
	})

	const [items, setItems] = useState<BoardI[] | undefined>(data?.data.boards)

	useEffect(() => {
		if (error) toast.error(errorCatch(error))
	}, [error])

	useEffect(() => {
		setItems(data?.data.boards)
	}, [data?.data])

	return { items, isLoading }
}
