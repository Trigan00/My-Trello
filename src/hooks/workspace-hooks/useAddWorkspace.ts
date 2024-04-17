import { errorCatch } from '@/api/error'
import { workspaceService } from '@/services/workspace.service'
import { IAddWorkspace } from '@/types/workspace.types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

export function useAddWorkspace(onSuccessFunc: () => void) {
	const queryClient = useQueryClient()

	const { mutate: addWorkspace, isPending } = useMutation({
		mutationKey: ['add workspaces'],
		mutationFn: (data: IAddWorkspace) =>
			workspaceService.addWorkspace(data.name),
		onSuccess(res) {
			toast.success(res.data.message)
			queryClient.invalidateQueries({
				queryKey: ['workspaces']
			})
			onSuccessFunc()
		},
		onError: (error: any) => toast.error(errorCatch(error))
	})

	return { addWorkspace, isPending }
}
