import { axiosWithAuth } from '@/api/interceptors'
import { IUser } from '@/types/auth.types'
import { IWorkspace } from '@/types/workspace.types'

class WorkspaceService {
	private BASE_URL = '/workspaces'

	async getWorkspaces() {
		const response = await axiosWithAuth.get<IWorkspace[]>(this.BASE_URL)
		return response
	}

	async addWorkspace(name: string) {
		const response = await axiosWithAuth.post(this.BASE_URL + '/add', {
			title: name
		})
		return response
	}

	async updateWorkspaceName(id: number, data: { title: string }) {
		const response = await axiosWithAuth.patch(
			`${this.BASE_URL}/update-name/${id}`,
			data
		)
		return response
	}
	async getWorkspaceUsers(id: number) {
		const response = await axiosWithAuth.get<IUser[]>(
			`${this.BASE_URL}/users/${id}`
		)
		return response
	}

	async deleteWorkspaceUser(id: number) {
		const response = await axiosWithAuth.delete(
			`${this.BASE_URL}/delete-user/${id}`
		)
		return response
	}

	async getInviteLink(id: number) {
		const response = await axiosWithAuth.get<{ inviteLink: string }>(
			`${this.BASE_URL}/invite-link/${id}`
		)
		return response
	}

	async deleteWorkspace(id: number) {
		const response = await axiosWithAuth.delete(`${this.BASE_URL}/${id}`)
		return response
	}
}

export const workspaceService = new WorkspaceService()
