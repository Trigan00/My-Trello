import { workspaceService } from '@/services/workspace.service'
import { IWorkspace } from '@/types/workspace.types'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

export function useWorkspaces() {
	const { data, isLoading } = useQuery({
		queryKey: ['workspaces'],
		queryFn: () => workspaceService.getWorkspaces()
	})

	const [items, setItems] = useState<IWorkspace[] | undefined>(data?.data)

	useEffect(() => {
		setItems(data?.data)
	}, [data?.data])

	return { items, setItems, isLoading }
}
