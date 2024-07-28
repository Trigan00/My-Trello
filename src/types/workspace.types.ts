export type IWorkspace = {
	id: number
	name: string
	is_admin: boolean
}

export interface IWorkspaces {
	workspaces: IWorkspace[]
}

export interface IAddWorkspace {
	name: string
}

export type IRole = {
	role: string
	description: string
}
