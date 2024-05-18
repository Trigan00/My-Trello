import { axiosWithAuth } from '@/api/interceptors'
import { AddCommentI, CommentsResponseI } from '@/types/comments.types'

class CommentService {
	private BASE_URL = '/tasks/comments'

	async getComments(task_id: number) {
		const response = await axiosWithAuth.get<CommentsResponseI>(
			this.BASE_URL + '/',
			{
				params: {
					task_id
				}
			}
		)
		return response
	}

	async createComment(data: AddCommentI) {
		const response = await axiosWithAuth.post<{ message: string }>(
			this.BASE_URL + '/',
			data
		)
		return response
	}
}

export const commentService = new CommentService()
