import { errorCatch } from '@/api/error'
import { workspaceService } from '@/services/workspace.service'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'

export function useInviteLink(workspace_id: number) {
	const {
		data,
		isLoading,
		refetch: refetch_link,
		error
	} = useQuery({
		queryKey: ['invite link'],
		queryFn: () => workspaceService.getInviteLink(workspace_id)
	})

	const [item, setItem] = useState<string | undefined>(data?.data.url)

	useEffect(() => {
		if (error) toast.error(errorCatch(error))
	}, [error])

	useEffect(() => {
		setItem(data?.data.url)
	}, [data?.data])

	return { item, isLoading, refetch_link }
}
