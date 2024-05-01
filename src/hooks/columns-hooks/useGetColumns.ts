import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

import { ColumnI } from '@/types/task.types'
import { columnService } from '@/services/column.service'

export function useGetColumns(board_id: number) {
	const { data, isLoading } = useQuery({
		queryKey: ['columns'],
		queryFn: () => columnService.getColumns(board_id)
	})

	const [columns, setColumns] = useState<ColumnI[] | undefined>(data?.data)

	useEffect(() => {
		setColumns(data?.data)
	}, [data?.data])

	return { columns, setColumns, isLoading }
}
