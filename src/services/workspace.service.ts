import { axiosWithAuth } from '@/api/interceptors'
import { IGetMembersResponse, ROLES } from '@/types/auth.types'
import { IRole, IWorkspaces } from '@/types/workspace.types'

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
			`${this.BASE_URL}/members/`,
			{
				params: {
					ws_id: id
				}
			}
		)
		return response
	}

	async deleteWorkspaceUser(user_id: number) {
		const response = await axiosWithAuth.delete<{ message: string }>(
			`${this.BASE_URL}/members/${user_id}/`
		)
		return response
	}

	async getInviteLink(id: number) {
		const response = await axiosWithAuth.post<{ url: string }>(
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

	async updateRole(user_id: number, data: { ws_id: number; role: string }) {
		const response = await axiosWithAuth.patch<{ message: string }>(
			`${this.BASE_URL}/members/${user_id}/`,
			data
		)
		return response
	}

	async getWorkspaceRoles() {
		const response = await axiosWithAuth.get<{ roles: IRole[] }>(
			this.BASE_URL + '/roles/'
		)
		return response
	}
}

export const workspaceService = new WorkspaceService()
