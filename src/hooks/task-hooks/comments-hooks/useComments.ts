import { errorCatch } from '@/api/error'
import { commentService } from '@/services/comments.service'
import { CommentI } from '@/types/comments.types'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'

export function useComments(task_id: number) {
	const { data, isLoading, error } = useQuery({
		queryKey: ['comments', task_id],
		queryFn: () => commentService.getComments(task_id)
	})

	const [comments, setComments] = useState<CommentI[] | undefined>(
		data?.data.comments
	)

	useEffect(() => {
		if (error) toast.error(errorCatch(error))
	}, [error])

	useEffect(() => {
		setComments(data?.data.comments)
	}, [data?.data])

	return { comments, isLoading }
}
