import { useMutation, useQueryClient } from '@tanstack/react-query'
import { errorCatch } from '@/api/error'
import { toast } from 'sonner'
import { columnService } from '@/services/column.service'

export function useEditName(onSuccessFunc: () => void) {
	const queryClient = useQueryClient()

	const { mutate: editName } = useMutation({
		mutationKey: ['edit column name'],
		mutationFn: ({ id, name }: { id: number; name: string }) =>
			columnService.editName(id, name),
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

	return { editName }
}
