export type IWorkspace = {
	id: number
	name: string
}

export interface IWorkspaces {
	workspaces: IWorkspace[]
}

export interface IAddWorkspace {
	name: string
}
