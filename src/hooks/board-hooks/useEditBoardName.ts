import { useMutation, useQueryClient } from '@tanstack/react-query'
import { errorCatch } from '@/api/error'
import { toast } from 'sonner'
import { boardsService } from '@/services/board.service'

export function useEditBoardName() {
	const queryClient = useQueryClient()

	const { mutate: editBoardName, isPending } = useMutation({
		mutationKey: ['edit board name'],
		mutationFn: ({ id, name }: { id: number; name: string }) =>
			boardsService.editBoardName(id, name),
		onSuccess(res) {
			queryClient.invalidateQueries({
				queryKey: ['boards']
			})
			toast.success(res.data.message)
		},
		onError(error: any) {
			toast.error(errorCatch(error))
		}
	})

	return { editBoardName, isPending }
}
