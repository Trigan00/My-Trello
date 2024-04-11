import { errorCatch } from '@/api/error'
import { workspaceService } from '@/services/workspace.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

export function useUpdateWorkspace() {
	const queryClient = useQueryClient()

	const { mutate: updateWorkspace, isPending } = useMutation({
		mutationKey: ['update workspace'],
		mutationFn: ({ id, title }: { id: number; title: string }) =>
			workspaceService.updateWorkspaceName(id, { title }),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['workspaces']
			})
			toast.success('Название обновлено')
		},
		onError: (error: any) => toast.error(errorCatch(error))
	})

	return { updateWorkspace, isPending }
}
