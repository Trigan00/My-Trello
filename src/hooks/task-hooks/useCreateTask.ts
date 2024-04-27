import { useMutation, useQueryClient } from '@tanstack/react-query'

import { TypeTaskFormState } from '@/types/task.types'

import { taskService } from '@/services/task.service'
import { errorCatch } from '@/api/error'
import { toast } from 'sonner'

export function useCreateTask() {
	const queryClient = useQueryClient()

	const { mutate: createTask } = useMutation({
		mutationKey: ['create task'],
		mutationFn: (data: TypeTaskFormState) => taskService.createTask(data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['tasks']
			})
		},
		onError(error: any) {
			toast.error(errorCatch(error))
		}
	})

	return { createTask }
}
