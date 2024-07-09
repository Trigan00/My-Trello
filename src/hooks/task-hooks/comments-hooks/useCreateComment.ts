import { useMutation, useQueryClient } from '@tanstack/react-query'
import { errorCatch } from '@/api/error'
import { toast } from 'sonner'
import { commentService } from '@/services/comments.service'
import { AddCommentI } from '@/types/comments.types'

export function useCreateComment(task_id: number) {
	const queryClient = useQueryClient()

	const { mutate: createComment, isPending } = useMutation({
		mutationKey: ['create comment'],
		mutationFn: (data: AddCommentI) => commentService.createComment(data),
		onSuccess(res) {
			queryClient.invalidateQueries({
				queryKey: ['comments', task_id]
			})
			toast.success(res.data.message)
		},
		onError(error: any) {
			toast.error(errorCatch(error))
		}
	})

	return { createComment, isPending }
}
