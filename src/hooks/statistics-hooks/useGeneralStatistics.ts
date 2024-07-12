import { errorCatch } from '@/api/error'
import { statisticsService } from '@/services/statistics.service'
import { GeneralStatisticsResI, GetStatisticsI } from '@/types/statistics.types'
import { useQuery } from '@tanstack/react-query'
import { useState, useEffect } from 'react'
import { toast } from 'sonner'

// const empty = {
// 	linear_series: [],
// 	pie_series: []
// }

export const useGeneralStatistics = (StatData: GetStatisticsI) => {
	const { data, isLoading, error } = useQuery({
		queryKey: ['general statistics', StatData.month, StatData.year],
		queryFn: () => statisticsService.getGeneralStatistics(StatData)
	})

	const [stat, setStat] = useState<GeneralStatisticsResI>()

	useEffect(() => {
		if (error) toast.error(errorCatch(error))
	}, [error])

	useEffect(() => {
		setStat(data?.data)
	}, [data?.data])

	return { stat, isLoading }
}
