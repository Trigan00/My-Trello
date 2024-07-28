import { errorCatch } from '@/api/error'
import { boardsService } from '@/services/board.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

export function useAddMemberToBoard(key: number, onSuccessFunc?: () => void) {
	const queryClient = useQueryClient()

	const { mutate: addMember, isPending } = useMutation({
		mutationKey: ['add member to board'],
		mutationFn: (data: { board_id: number; user_id: number; role: string }) =>
			boardsService.addMemberToBoard(data.user_id, data.board_id, data.role),
		onSuccess(res) {
			toast.success(res.data.message)
			queryClient.invalidateQueries({
				queryKey: ['board members', key]
			})
			onSuccessFunc && onSuccessFunc()
		},
		onError: (error: any) => toast.error(errorCatch(error))
	})

	return { addMember, isPending }
}
