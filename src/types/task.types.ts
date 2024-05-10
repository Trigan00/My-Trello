export interface ColumnI {
	name: string
	id: number
}

export interface TaskI {
	id: number
	name: string
	column_id: number
	// status: number
}

export type TypeTaskFormState = Partial<Omit<TaskI, 'id'>> //На бэке проверять что пришло, потому что оба параметра опциональны
