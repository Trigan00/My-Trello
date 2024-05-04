import { axiosWithAuth } from '@/api/interceptors'
import { BoardI } from '@/types/task.types'

class BoardsService {
	private BASE_URL = '/boards'

	async getBoards(workspace_id: number) {
		const response = await axiosWithAuth.get<BoardI[]>(
			this.BASE_URL //#TODO another path
		)
		return response
	}

	async addBoard(title: string) {
		const response = await axiosWithAuth.post<true>(this.BASE_URL + '/add', {
			title
		})
		return response
	}

	async editBoardName(id: number, name: string) {
		const response = await axiosWithAuth.patch<{ message: string }>(
			`${this.BASE_URL}/${id}`,
			{ name }
		)
		return response
	}

	async deleteBoard(id: number) {
		const response = await axiosWithAuth.delete<{ message: string }>(
			`${this.BASE_URL}/${id}`
		)
		return response
	}
}

export const boardsService = new BoardsService()
