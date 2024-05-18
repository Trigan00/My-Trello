import { errorCatch } from '@/api/error'
import { workspaceService } from '@/services/workspace.service'
import { IUser } from '@/types/auth.types'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'

export function useWorkspaceUsers(workspace_id: number) {
	const { data, isLoading, error } = useQuery({
		queryKey: ['workspace users'],
		queryFn: () => workspaceService.getWorkspaceUsers(workspace_id)
	})

	const [users, setUsers] = useState<IUser[] | undefined>(data?.data.members)

	useEffect(() => {
		if (error) toast.error(errorCatch(error))
	}, [error])

	useEffect(() => {
		setUsers(data?.data.members)
	}, [data?.data])

	return { users, isLoading }
}
