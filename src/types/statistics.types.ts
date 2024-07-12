export interface GetStatisticsI {
	id: number
	month: number
	year: number
	isWorkspace: boolean
}

export interface GeneralStatisticsResI {
	linear_series: Array<{ name: string; data: Array<number | null> }>
	pie_series: Array<{ name: string; value: number }>
}

export type MembersStatistics = {
	labels: Array<string>
	dataset: Array<Array<number>>
	user_names: Array<string>
}

export interface MembersStatisticsResI {
	data: MembersStatistics
}
