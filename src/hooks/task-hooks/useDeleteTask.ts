import { useMutation, useQueryClient } from '@tanstack/react-query'

import { taskService } from '@/services/task.service'
import { errorCatch } from '@/api/error'
import { toast } from 'sonner'

export function useDeleteTask(onDelete: () => void) {
	const queryClient = useQueryClient()

	const { mutate: deleteTask, isPending: isDeletePending } = useMutation({
		mutationKey: ['delete task'],
		mutationFn: (id: number) => taskService.deleteTask(id),
		onSuccess(res) {
			queryClient.invalidateQueries({
				queryKey: ['tasks']
			})
			onDelete()
			toast.success(res.data.message)
		},
		onError(error: any) {
			toast.error(errorCatch(error))
		}
	})

	return { deleteTask, isDeletePending }
}
