import { errorCatch } from '@/api/error'
import { workspaceService } from '@/services/workspace.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

export function useUpdateWorkspace() {
	const queryClient = useQueryClient()

	const { mutate: updateWorkspace, isPending } = useMutation({
		mutationKey: ['update workspace'],
		mutationFn: ({ id, name }: { id: number; name: string }) =>
			workspaceService.updateWorkspaceName(id, { name }),
		onSuccess(res) {
			queryClient.invalidateQueries({
				queryKey: ['workspaces']
			})
			toast.success(res.data.message)
		},
		onError: (error: any) => toast.error(errorCatch(error))
	})

	return { updateWorkspace, isPending }
}
