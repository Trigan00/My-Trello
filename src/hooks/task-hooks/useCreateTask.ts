import { useMutation, useQueryClient } from '@tanstack/react-query'

import { FullTaskI } from '@/types/task.types'

import { taskService } from '@/services/task.service'
import { errorCatch } from '@/api/error'
import { toast } from 'sonner'

export function useCreateTask(onSuccessFunc: () => void) {
	const queryClient = useQueryClient()

	const { mutate: createTask, isPending } = useMutation({
		mutationKey: ['create task'],
		mutationFn: (data: FullTaskI) => taskService.createTask(data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['tasks']
			})
			onSuccessFunc()
		},
		onError(error: any) {
			toast.error(errorCatch(error))
		}
	})

	return { createTask, isPending }
}
