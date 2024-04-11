import { errorCatch } from '@/api/error'
import { workspaceService } from '@/services/workspace.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

export function useDeleteWorkspaceUser() {
	const queryClient = useQueryClient()

	const { mutate: deleteWorkspaceUser, isPending: isDeleteUserPending } =
		useMutation({
			mutationKey: ['delete workspace user'],
			mutationFn: (id: number) => workspaceService.deleteWorkspaceUser(id),
			onSuccess() {
				queryClient.invalidateQueries({
					queryKey: ['workspace users']
				})
				toast.success('Пользователь удален')
			},
			onError: (error: any) => toast.error(errorCatch(error))
		})

	return { deleteWorkspaceUser, isDeleteUserPending }
}
