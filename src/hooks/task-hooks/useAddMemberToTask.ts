import { errorCatch } from '@/api/error'
import { taskService } from '@/services/task.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

export function useAddMemberToTask() {
	const queryClient = useQueryClient()

	const { mutate: addMember, isPending } = useMutation({
		mutationKey: ['add member to task'],
		mutationFn: (data: { task_id: number; user_id: number }) =>
			taskService.addMemberToTask(data.user_id, data.task_id),
		onSuccess(res) {
			toast.success(res.data.message)
			queryClient.invalidateQueries({
				queryKey: ['task members']
			})
		},
		onError: (error: any) => toast.error(errorCatch(error))
	})

	return { addMember, isPending }
}
