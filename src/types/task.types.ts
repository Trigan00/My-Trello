export interface BoardI {
	id: number
	title: string
}

export interface AddBoardI {
	title: string
}

export interface TaskI {
	id: number
	name: string
	column_id: number
	// status: number
}

export type TypeTaskFormState = Partial<Omit<TaskI, 'id'>> //На бэке проверять что пришло, потому что оба параметра опциональны
