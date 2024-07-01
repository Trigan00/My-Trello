import { useMutation, useQueryClient } from '@tanstack/react-query'

import { TypeTaskFormState } from '@/types/task.types'

import { taskService } from '@/services/task.service'
import { errorCatch } from '@/api/error'
import { toast } from 'sonner'

export function useUpdateTask(
	onErrorHandler?: () => void,
	onSuccessFunc?: () => void,
	key?: string
) {
	const queryClient = useQueryClient()

	const { mutate: updateTask, isPending } = useMutation({
		mutationKey: ['update task', key],
		mutationFn: ({ id, data }: { id: number; data: TypeTaskFormState }) =>
			taskService.updateTask(id, data),
		onSuccess(res) {
			console.log(res)
			queryClient.invalidateQueries({
				queryKey: ['tasks']
			})
			queryClient.invalidateQueries({
				queryKey: ['task', res.data.task_id]
			})
			onSuccessFunc && onSuccessFunc()
			sessionStorage.removeItem('TasksState')
		},
		onError(error: any) {
			toast.error(errorCatch(error))
			onErrorHandler && onErrorHandler()
		}
	})

	return { updateTask, isPending }
}
