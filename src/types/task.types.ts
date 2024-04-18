export interface BoardI {
	id: number
	title: string
}

export interface AddBoardI {
	title: string
}

export enum EnumTaskPriority {
	low = 'low',
	medium = 'medium',
	high = 'high'
}

export interface TaskI {
	id: number
	name: string
	priority?: EnumTaskPriority
	isCompleted: boolean
}
