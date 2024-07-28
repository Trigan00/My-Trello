import { errorCatch } from '@/api/error'
import { boardsService } from '@/services/board.service'
import { IRole } from '@/types/workspace.types'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'

export function useBoardsRoles() {
	const { data, isLoading, error } = useQuery({
		queryKey: ['board roles'],
		queryFn: () => boardsService.getBoardRoles()
	})

	const [roles, setRoles] = useState<IRole[] | undefined>(data?.data.roles)

	useEffect(() => {
		if (error) toast.error(errorCatch(error))
	}, [error])

	useEffect(() => {
		setRoles(data?.data.roles)
	}, [data?.data])

	return { roles, isLoading }
}
