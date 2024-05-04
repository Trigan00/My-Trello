import { errorCatch } from '@/api/error'
import { boardsService } from '@/services/board.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

export function useDeleteBoard(onSuccessFunc: () => void) {
	const queryClient = useQueryClient()

	const { mutate: deleteBoard, isPending: isDeletePending } = useMutation({
		mutationKey: ['delete board'],
		mutationFn: (board_id: number) => boardsService.deleteBoard(board_id),
		onSuccess(res) {
			queryClient.invalidateQueries({
				queryKey: ['boards']
			})
			toast.success(res.data.message)
			onSuccessFunc()
		},
		onError: (error: any) => toast.error(errorCatch(error))
	})

	return { deleteBoard, isDeletePending }
}
