import type { FullTaskI, TaskI, TypeTaskFormState } from '@/types/task.types'

import { axiosWithAuth } from '@/api/interceptors'

class TaskService {
	private BASE_URL = '/tasks'
	private MEMBERS_URL = this.BASE_URL + '/members'

	async getTasks() {
		const response = await axiosWithAuth.get<{ tasks: TaskI[] }>(this.BASE_URL)
		return response
	}

	async createTask(data: FullTaskI) {
		const response = await axiosWithAuth.post(this.BASE_URL, data)
		return response
	}

	async updateTask(id: number, data: TypeTaskFormState) {
		const response = await axiosWithAuth.patch(`${this.BASE_URL}/${id}`, data)
		return response
	}

	async deleteTask(id: number) {
		const response = await axiosWithAuth.delete(`${this.BASE_URL}/${id}`)
		return response
	}

	async addMemberToTask(user_id: number, task_id: number) {
		const response = await axiosWithAuth.post<{ message: string }>(
			this.MEMBERS_URL,
			{
				user_id,
				task_id
			}
		)
		return response
	}

	async deleteMemberFromTask(user_id: number) {
		const response = await axiosWithAuth.delete<{ message: string }>(
			`${this.MEMBERS_URL}/${user_id}`
		)
		return response
	}
}

export const taskService = new TaskService()
