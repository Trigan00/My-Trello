import { errorCatch } from '@/api/error'
import { workspaceService } from '@/services/workspace.service'
import { ROLES } from '@/types/auth.types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

export function useUpdateRole(onErrorFn?: () => void) {
	const queryClient = useQueryClient()

	const { mutate: updateRole, isPending } = useMutation({
		mutationKey: ['update role'],
		mutationFn: ({
			ws_id,
			user_id,
			role
		}: {
			ws_id: number
			user_id: number
			role: string
		}) => workspaceService.updateRole(user_id, { ws_id, role }),
		onSuccess(res) {
			toast.success(res.data.message)
			queryClient.invalidateQueries({
				queryKey: ['workspace users']
			})
		},
		onError: (error: any) => {
			onErrorFn && onErrorFn()
			toast.error(errorCatch(error))
		}
	})

	return { updateRole, isPending }
}
