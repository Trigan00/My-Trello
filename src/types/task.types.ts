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

export interface DashboardTasksI {
	task_id: number
	task_name: string
	board_id: number
	board_name: string
	ws_id: number
	ws_name: string
	date: string
}

export interface DashboardResponseI {
	not_started_tasks: DashboardTasksI[]
	at_work_data: DashboardTasksI[]
	recently_completed: DashboardTasksI[]
}
