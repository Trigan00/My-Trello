import { axiosWithAuth } from '@/api/interceptors'
import {
	GeneralStatisticsResI,
	GetGeneralStatisticsI
} from '@/types/statistics.types'

class StatisticsService {
	async getLogs(page: number, per_page = 50) {
		const response = await axiosWithAuth.get('/boards/logs/', {
			params: {
				page,
				per_page
			}
		})
		return response
	}
	async getGeneralStatistics({
		id,
		month,
		year,
		isWorkspace
	}: GetGeneralStatisticsI) {
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
}

export const statisticsService = new StatisticsService()
