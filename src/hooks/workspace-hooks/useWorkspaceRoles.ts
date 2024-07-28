import { errorCatch } from '@/api/error'
import { workspaceService } from '@/services/workspace.service'
import { IRole } from '@/types/workspace.types'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'

export function useWorkspaceRoles() {
	const { data, isLoading, error } = useQuery({
		queryKey: ['workspace roles'],
		queryFn: () => workspaceService.getWorkspaceRoles()
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
