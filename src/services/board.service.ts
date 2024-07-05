import { axiosWithAuth } from '@/api/interceptors'
import {
	BoardsResponse,
	TimeLineI,
	boardMembersResponseI
} from '@/types/board.types'

export const per_Page = 10

class BoardsService {
	private BASE_URL = '/boards'
	private MEMBERS_URL = this.BASE_URL + '/members'

	async getBoards(workspace_id: number) {
		const response = await axiosWithAuth.get<BoardsResponse>(
			this.BASE_URL + '/',
			{
				params: {
					ws_id: workspace_id
				}
			}
		)
		return response
	}

	async addBoard(name: string, ws_id: number) {
		const response = await axiosWithAuth.post<{ message: string }>(
			this.BASE_URL + '/',
			{
				name,
				ws_id
			}
		)
		return response
	}

	async editBoardName(id: number, name: string) {
		const response = await axiosWithAuth.patch<{ message: string }>(
			`${this.BASE_URL}/${id}/`,
			{ name }
		)
		return response
	}

	async deleteBoard(id: number) {
		const response = await axiosWithAuth.delete<{ message: string }>(
			`${this.BASE_URL}/${id}/`
		)
		return response
	}

	async getBoardMembers(board_id: number) {
		const response = await axiosWithAuth.get<boardMembersResponseI>(
			this.MEMBERS_URL + '/',
			{
				params: {
					board_id
				}
			}
		)
		return response
	}

	async addMemberToBoard(user_id: number, board_id: number) {
		const response = await axiosWithAuth.post<{ message: string }>(
			this.MEMBERS_URL + '/',
			{
				user_id,
				board_id
			}
		)
		return response
	}

	async deleteMemberFromBoard(user_id: number) {
		const response = await axiosWithAuth.delete<{ message: string }>(
			`${this.MEMBERS_URL}/${user_id}/`
		)
		return response
	}

	async getLogs(board_id: number, page: number, per_page = per_Page) {
		const response = await axiosWithAuth.get<TimeLineI>(
			`/boards/logs/${board_id}/`,
			{
				params: {
					page,
					per_page
				}
			}
		)
		return response
	}
}

export const boardsService = new BoardsService()
