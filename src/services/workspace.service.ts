import { axiosWithAuth } from '@/api/interceptors'
import { IWorkspace } from '@/types/workspace.types'

class WorkspaceService {
	private BASE_URL = '/workspaces'

	async getWorkspaces() {
		const response = await axiosWithAuth.get<IWorkspace[]>(this.BASE_URL)
		return response
	}

	async addWorkspace(name: string) {
		const response = await axiosWithAuth.post<true>(this.BASE_URL + '/add', {
			title: name
		})
		return response
	}
}

export const workspaceService = new WorkspaceService()
