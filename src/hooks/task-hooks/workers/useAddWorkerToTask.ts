import { errorCatch } from '@/api/error'
import { taskService } from '@/services/task.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

export function useAddWorkerToTask(key: number) {
	const queryClient = useQueryClient()

	const { mutate: addWorker, isPending } = useMutation({
		mutationKey: ['add worker to task'],
		mutationFn: (data: { task_id: number; user_id: number }) =>
			taskService.addWorkerToTask(data.user_id, data.task_id),
		onSuccess(res) {
			toast.success(res.data.message)
			queryClient.invalidateQueries({
				queryKey: ['task workers', key]
			})
		},
		onError: (error: any) => toast.error(errorCatch(error))
	})

	return { addWorker, isPending }
}
