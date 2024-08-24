import { errorCatch } from '@/api/error'
import { taskService } from '@/services/task.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

export function useDeleteTaskWorker(key: number) {
	const queryClient = useQueryClient()

	const { mutate: deleteTaskWorker, isPending } = useMutation({
		mutationKey: ['delete task worker'],
		mutationFn: (data: { user_id: number }) =>
			taskService.deleteWorkerFromTask(data.user_id),
		onSuccess(res) {
			queryClient.invalidateQueries({
				queryKey: ['task workers', key]
			})
			toast.success(res.data.message)
		},
		onError: (error: any) => toast.error(errorCatch(error))
	})

	return { deleteTaskWorker, isPending }
}
