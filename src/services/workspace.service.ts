import { axiosWithAuth } from '@/api/interceptors'
import { IGetMembersResponse, ROLES } from '@/types/auth.types'
import { IWorkspaces } from '@/types/workspace.types'

class WorkspaceService {
	private BASE_URL = '/workspaces'

	async getWorkspaces() {
		const response = await axiosWithAuth.get<IWorkspaces>(this.BASE_URL + '/')
		return response
	}

	async addWorkspace(name: string) {
		const response = await axiosWithAuth.post<{ message: string }>(
			this.BASE_URL + '/',
			{
				name
			}
		)
		return response
	}

	async updateWorkspaceName(id: number, data: { name: string }) {
		const response = await axiosWithAuth.patch<{ message: string }>(
			`${this.BASE_URL}/${id}/`,
			data
		)
		return response
	}
	async getWorkspaceUsers(id: number) {
		const response = await axiosWithAuth.get<IGetMembersResponse>(
			`${this.BASE_URL}/members/${id}/`
		)
		return response
	}

	async deleteWorkspaceUser(user_id: number, ws_id: number) {
		const response = await axiosWithAuth.delete<{ message: string }>(
			`${this.BASE_URL}/members/${user_id}/` //#TODO в delete нет тела
		)
		return response
	}

	async getInviteLink(id: number) {
		const response = await axiosWithAuth.post<{ invite_token: string }>(
			`${this.BASE_URL}/invite/`,
			{ ws_id: id }
		)
		return response
	}

	async deleteWorkspace(id: number) {
		const response = await axiosWithAuth.delete<{ message: string }>(
			`${this.BASE_URL}/${id}/`
		)
		return response
	}

	async updateRole(user_id: number, data: { ws_id: number; role: ROLES }) {
		const response = await axiosWithAuth.patch<{ message: string }>(
			`${this.BASE_URL}/members/${user_id}/`,
			data
		)
		return response
	}
}

export const workspaceService = new WorkspaceService()
