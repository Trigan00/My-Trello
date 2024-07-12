import { axiosWithAuth } from '@/api/interceptors'
import {
	GeneralStatisticsResI,
	GetStatisticsI,
	MembersStatisticsResI
} from '@/types/statistics.types'

class StatisticsService {
	async getGeneralStatistics({ id, month, year, isWorkspace }: GetStatisticsI) {
		const response = await axiosWithAuth.get<GeneralStatisticsResI>(
			`/${isWorkspace ? 'workspaces' : 'boards'}/statistics/${id}/`,
			{
				params: {
					month,
					year
				}
			}
		)
		return response
	}

	async getMembersStatistics({ id, month, year, isWorkspace }: GetStatisticsI) {
		const response = await axiosWithAuth.get<MembersStatisticsResI>(
			`/${isWorkspace ? 'workspaces' : 'boards'}/members/statistics/${id}/`,
			{
				params: {
					month,
					year
				}
			}
		)
		return response
	}
}

export const statisticsService = new StatisticsService()
