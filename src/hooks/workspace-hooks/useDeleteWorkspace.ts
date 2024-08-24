import { errorCatch } from '@/api/error'
import { DASHBOARD_PAGES } from '@/config/pages-url.config'
import { workspaceService } from '@/services/workspace.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

export function useDeleteWorkspace() {
	const queryClient = useQueryClient()
	const { push } = useRouter()

	const { mutate: deleteWorkspace, isPending: isDeletePending } = useMutation({
		mutationKey: ['delete workspace'],
		mutationFn: (id: number) => workspaceService.deleteWorkspace(id),
		onSuccess(res) {
			queryClient.invalidateQueries({
				queryKey: ['workspaces']
			})
			toast.success(res.data.message)
			push(DASHBOARD_PAGES.DASHBOARD)
		},
		onError: (error: any) => toast.error(errorCatch(error))
	})

	return { deleteWorkspace, isDeletePending }
}
