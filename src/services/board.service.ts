import { axiosWithAuth } from '@/api/interceptors'
import { BoardsResponse, boardMembersResponseI } from '@/types/board.types'

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
}

export const boardsService = new BoardsService()
