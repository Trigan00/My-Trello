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
	start_time: string | null
	deadline: string | null
	verified: boolean
}

export type TypeTaskFormState = Partial<FullTaskI> //На бэке проверять что пришло, потому что все параметры опциональны

export interface TaskDependence {
	name: string
	column_id: number
	task_id: number
}
