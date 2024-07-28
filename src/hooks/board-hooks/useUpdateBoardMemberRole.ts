import { errorCatch } from '@/api/error'
import { boardsService } from '@/services/board.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

export function useUpdateBoardMemberRole(key: number, onErrorFn?: () => void) {
	const queryClient = useQueryClient()

	const { mutate: updateRole, isPending } = useMutation({
		mutationKey: ['update board member role'],
		mutationFn: ({ user_id, role }: { user_id: number; role: string }) =>
			boardsService.updateBoardMemberRole(user_id, role),
		onSuccess(res) {
			toast.success(res.data.message)
			queryClient.invalidateQueries({
				queryKey: ['board members', key]
			})
		},
		onError: (error: any) => {
			onErrorFn && onErrorFn()
			toast.error(errorCatch(error))
		}
	})

	return { updateRole, isPending }
}
