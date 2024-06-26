import { axiosWithAuth } from '@/api/interceptors'

class StatisticsService {
	private BASE_URL = '/statistics'

	async getLogs(page: number, per_page = 50) {
		const response = await axiosWithAuth.get(this.BASE_URL, {
			params: {
				page,
				per_page
			}
		})
		return response
	}
}

export const statisticsService = new StatisticsService()
