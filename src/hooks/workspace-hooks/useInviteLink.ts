import { workspaceService } from '@/services/workspace.service'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

export function useInviteLink(workspace_id: number) {
	const { data, isLoading } = useQuery({
		queryKey: ['invite link'],
		queryFn: () => workspaceService.getInviteLink(workspace_id)
	})

	const [item, setItem] = useState<{ invite_token: string } | undefined>(
		data?.data
	)

	useEffect(() => {
		setItem(data?.data)
	}, [data?.data])

	return { item, isLoading }
}
