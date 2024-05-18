export interface CommentI {
	id: number
	name: string
	date: string
	comment: string
	edited: boolean
	task: number
}

export interface CommentsResponseI {
	comments: CommentI[]
	message: string
}

export interface AddCommentI {
	date: string
	comment: string
	task_id: number
}
