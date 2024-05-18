import { errorCatch } from '@/api/error'
import { workspaceService } from '@/services/workspace.service'
import { IWorkspace } from '@/types/workspace.types'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'

export function useWorkspaces() {
	const { data, isLoading, error } = useQuery({
		queryKey: ['workspaces'],
		queryFn: () => workspaceService.getWorkspaces()
	})

	const [items, setItems] = useState<IWorkspace[] | undefined>(
		data?.data.workspaces
	)

	useEffect(() => {
		if (error) toast.error(errorCatch(error))
	}, [error])

	useEffect(() => {
		setItems(data?.data.workspaces)
	}, [data?.data])

	return { items, isLoading }
}
