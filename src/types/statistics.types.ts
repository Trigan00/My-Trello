export interface GetStatisticsI {
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

export type MembersStatistics = Array<{
	name: string
	all: number
	in: number
	not_in: number
}>

export interface MembersStatisticsResI {
	data: MembersStatistics
}
