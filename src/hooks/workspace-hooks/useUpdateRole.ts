import { errorCatch } from '@/api/error'
import { workspaceService } from '@/services/workspace.service'
import { ROLES } from '@/types/auth.types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

export function useUpdateRole() {
	const queryClient = useQueryClient()

	const { mutate: updateRole, isPending } = useMutation({
		mutationKey: ['update role'],
		mutationFn: ({
			id,
			user_id,
			role
		}: {
			id: number
			user_id: number
			role: ROLES
		}) => workspaceService.updateRole(id, { user_id, role }),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['workspace users']
			})
		},
		onError: (error: any) => toast.error(errorCatch(error))
	})

	return { updateRole, isPending }
}
