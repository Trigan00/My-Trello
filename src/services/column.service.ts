import type { ColumnI } from '@/types/task.types'

import { axiosWithAuth } from '@/api/interceptors'

class ColumnService {
	private BASE_URL = '/tasks/columns'

	async getColumns(board_id: number) {
		const response = await axiosWithAuth.get<{ columns: ColumnI[] }>(
			`${this.BASE_URL}/`,
			{
				params: {
					board_id
				}
			}
		)
		return response
	}

	async editName(id: number, name: string) {
		const response = await axiosWithAuth.patch<{ message: string }>(
			`${this.BASE_URL}/${id}/`,
			{ name }
		)
		return response
	}

	async addColumn(name: string, board_id: number) {
		const response = await axiosWithAuth.post<{ message: string }>(
			`${this.BASE_URL}/`,
			{ name, board_id }
		)
		return response
	}

	async deleteColumn(id: number) {
		const response = await axiosWithAuth.delete<{ message: string }>(
			`${this.BASE_URL}/${id}/`
		)
		return response
	}
}

export const columnService = new ColumnService()
