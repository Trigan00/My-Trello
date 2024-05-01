import { useMutation, useQueryClient } from '@tanstack/react-query'

import { errorCatch } from '@/api/error'
import { toast } from 'sonner'
import { columnService } from '@/services/column.service'

export function useDeleteColumn() {
	const queryClient = useQueryClient()

	const { mutate: deleteColumn, isPending } = useMutation({
		mutationKey: ['delete column'],
		mutationFn: (id: number) => columnService.deleteColumn(id),
		onSuccess(res) {
			queryClient.invalidateQueries({
				queryKey: ['columns']
			})
			toast.success(res.data.message)
		},
		onError(error: any) {
			toast.error(errorCatch(error))
		}
	})

	return { deleteColumn, isPending }
}
