import { useMutation, useQueryClient } from '@tanstack/react-query'
import { errorCatch } from '@/api/error'
import { toast } from 'sonner'
import { columnService } from '@/services/column.service'

export function useAddColumn(onSuccessFunc: () => void) {
	const queryClient = useQueryClient()

	const { mutate: addColumn } = useMutation({
		mutationKey: ['add column'],
		mutationFn: (name: string) => columnService.addColumn(name),
		onSuccess(res) {
			queryClient.invalidateQueries({
				queryKey: ['columns']
			})
			onSuccessFunc()
			toast.success(res.data.message)
		},
		onError(error: any) {
			toast.error(errorCatch(error))
		}
	})

	return { addColumn }
}
