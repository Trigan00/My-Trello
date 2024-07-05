import { errorCatch } from '@/api/error'
import { boardsService } from '@/services/board.service'
import { useQuery } from '@tanstack/react-query'
import { useState, useEffect } from 'react'
import { toast } from 'sonner'

export interface TimeLineItem {
	id: number
	log_info: string
	task_name: string
	task_id: number
	date: string
	type: string
}

export const useLogs = ({
	board_id,
	page
}: {
	board_id: number
	page: number
}) => {
	const { data, isLoading, error } = useQuery({
		queryKey: ['logs', page],
		queryFn: () => boardsService.getLogs(board_id, page)
	})

	const [logs, setLogs] = useState<TimeLineItem[]>([])

	useEffect(() => {
		if (error) toast.error(errorCatch(error))
	}, [error])

	useEffect(() => {
		setLogs(data?.data.logs)
	}, [data?.data])

	return { logs, isLoading }
}
