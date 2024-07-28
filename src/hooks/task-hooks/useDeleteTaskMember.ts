import { errorCatch } from '@/api/error'
import { taskService } from '@/services/task.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

export function useDeleteTaskMember(key: number) {
	const queryClient = useQueryClient()

	const { mutate: deleteTaskMember, isPending } = useMutation({
		mutationKey: ['delete board member'],
		mutationFn: (data: { user_id: number }) =>
			taskService.deleteMemberFromTask(data.user_id),
		onSuccess(res) {
			queryClient.invalidateQueries({
				queryKey: ['task members', key]
			})
			toast.success(res.data.message)
		},
		onError: (error: any) => toast.error(errorCatch(error))
	})

	return { deleteTaskMember, isPending }
}
