import { errorCatch } from '@/api/error'
import { boardsService } from '@/services/board.service'
import { AddBoardI } from '@/types/task.types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

export function useAddBoard(onSuccessFunc: () => void) {
	const queryClient = useQueryClient()

	const { mutate: addBoard, isPending } = useMutation({
		mutationKey: ['add board'],
		mutationFn: (data: AddBoardI) => boardsService.addBoard(data.title),
		onSuccess(res) {
			toast.success('Доска добавлена')
			queryClient.invalidateQueries({
				queryKey: ['boards']
			})
			onSuccessFunc()
		},
		onError: (error: any) => toast.error(errorCatch(error))
	})

	return { addBoard, isPending }
}
