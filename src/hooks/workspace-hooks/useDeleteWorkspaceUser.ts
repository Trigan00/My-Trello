import { errorCatch } from '@/api/error'
import { workspaceService } from '@/services/workspace.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

export function useDeleteWorkspaceUser() {
	const queryClient = useQueryClient()

	const { mutate: deleteWorkspaceUser, isPending: isDeleteUserPending } =
		useMutation({
			mutationKey: ['delete workspace user'],
			mutationFn: (data: { user_id: number; ws_id: number }) =>
				workspaceService.deleteWorkspaceUser(data.user_id, data.ws_id),
			onSuccess(res) {
				queryClient.invalidateQueries({
					queryKey: ['workspace users']
				})
				toast.success(res.data.message)
			},
			onError: (error: any) => toast.error(errorCatch(error))
		})

	return { deleteWorkspaceUser, isDeleteUserPending }
}
