export interface ColumnI {
	name: string
	id: number
}

export interface TaskI {
	task_id: number
	name: string
	column_id: number
}

export interface FullTaskI {
	name: string
	description: string | null
	column_id: number
	start: string | null
	end: string | null
	dependencies_id: number[]
	verified: boolean
}

export type TypeTaskFormState = Partial<FullTaskI> & {
	initial_order?: number[]
	finite_order?: number[]
} //На бэке проверять что пришло, потому что все параметры опциональны
