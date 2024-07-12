import { errorCatch } from '@/api/error'
import { boardsService } from '@/services/board.service'
import { TimeLineI } from '@/types/board.types'
import { useQuery } from '@tanstack/react-query'
import { useState, useEffect } from 'react'
import { toast } from 'sonner'

export const useLogs = ({
	board_id,
	page,
	perPage
}: {
	board_id: number
	page: number
	perPage: number
}) => {
	const { data, isLoading, error } = useQuery({
		queryKey: ['logs', page, perPage],
		queryFn: () => boardsService.getLogs(board_id, page, perPage)
	})

	const [logs, setLogs] = useState<TimeLineI>()

	useEffect(() => {
		if (error) toast.error(errorCatch(error))
	}, [error])

	useEffect(() => {
		setLogs(data?.data)
	}, [data?.data])

	return { logs, isLoading }
}
