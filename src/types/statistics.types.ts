export interface GetGeneralStatisticsI {
	id: number
	month: number
	year: number
	isWorkspace: boolean
}

export type GeneralStatistics = {
	all: Array<number | null>
	in: Array<number | null>
	not_in: Array<number | null>
}

export interface GeneralStatisticsResI {
	data: GeneralStatistics
}
