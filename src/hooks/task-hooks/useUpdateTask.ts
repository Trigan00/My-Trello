import { useMutation, useQueryClient } from '@tanstack/react-query'

import { TypeTaskFormState } from '@/types/task.types'

import { taskService } from '@/services/task.service'
import { errorCatch } from '@/api/error'
import { toast } from 'sonner'

export function useUpdateTask(onErrorHandler: () => void, key?: string) {
	const queryClient = useQueryClient()

	const { mutate: updateTask } = useMutation({
		mutationKey: ['update task', key],
		mutationFn: ({ id, data }: { id: number; data: TypeTaskFormState }) =>
			taskService.updateTask(id, data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['tasks']
			})
			sessionStorage.removeItem('TasksState')
		},
		onError(error: any) {
			toast.error(errorCatch(error))
			onErrorHandler()
		}
	})

	return { updateTask }
}
