import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

import { ColumnI } from '@/types/task.types'
import { columnService } from '@/services/column.service'
import { errorCatch } from '@/api/error'
import { toast } from 'sonner'

export function useGetColumns(board_id: number) {
	const { data, isLoading, error } = useQuery({
		queryKey: ['columns'],
		queryFn: () => columnService.getColumns(board_id)
	})

	const [columns, setColumns] = useState<ColumnI[] | undefined>(
		data?.data.columns
	)

	useEffect(() => {
		if (error) toast.error(errorCatch(error))
	}, [error])

	useEffect(() => {
		setColumns(data?.data.columns)
	}, [data?.data])

	return { columns, setColumns, isLoading }
}
