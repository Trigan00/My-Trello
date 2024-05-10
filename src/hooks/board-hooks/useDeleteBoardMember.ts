import { errorCatch } from '@/api/error'
import { boardsService } from '@/services/board.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

export function useDeleteBoardMember() {
	const queryClient = useQueryClient()

	const { mutate: deleteBoardMember, isPending: isDeleteMemberPending } =
		useMutation({
			mutationKey: ['delete board member'],
			mutationFn: (data: { user_id: number }) =>
				boardsService.deleteMemberFromBoard(data.user_id),
			onSuccess(res) {
				queryClient.invalidateQueries({
					queryKey: ['board members']
				})
				toast.success(res.data.message)
			},
			onError: (error: any) => toast.error(errorCatch(error))
		})

	return { deleteBoardMember, isDeleteMemberPending }
}
