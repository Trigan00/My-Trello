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
	status: number
}

export type TypeTaskFormState = Partial<Omit<TaskI, 'id' | 'updatedAt'>>
