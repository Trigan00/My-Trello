export interface ColumnI {
	name: string
	id: number
}

export interface TaskI {
	task_id: number
	name: string
	column_id: number
}

export type TypeTaskFormState = Partial<Omit<TaskI, 'id'>> //На бэке проверять что пришло, потому что оба параметра опциональны

export interface FullTaskI {
	name: string
	description: string | null
	column_id: number
	start_time: string | null
	deadline: string | null
}
