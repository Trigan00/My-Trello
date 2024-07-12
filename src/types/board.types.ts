import { IUser } from './auth.types'

export interface BoardI {
	id: number
	name: string
}

export interface BoardsResponse {
	boards: BoardI[]
	message: string
}

export interface AddBoardI {
	name: string
	ws_id: number
}

export type BoardMemberI = Omit<IUser, 'role'>

export interface boardMembersResponseI {
	members: BoardMemberI[]
}

export interface TimeLineItemI {
	id: number
	log_info: string
	time: string
	task_name: string | null
	task_id: number
	action: string
}

export interface TimeLineI {
	count: number
	logs: Array<TimeLineItemI>
}
