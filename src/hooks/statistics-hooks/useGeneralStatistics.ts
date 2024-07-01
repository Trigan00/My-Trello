import { errorCatch } from '@/api/error'
import { statisticsService } from '@/services/statistics.service'
import {
	GeneralStatistics,
	GetGeneralStatisticsI
} from '@/types/statistics.types'
import { useQuery } from '@tanstack/react-query'
import { useState, useEffect } from 'react'
import { toast } from 'sonner'

const empty = {
	all: [],
	in: [],
	not_in: []
}

export const useGeneralStatistics = (StatData: GetGeneralStatisticsI) => {
	const { data, isLoading, error } = useQuery({
		queryKey: [
			StatData.isWorkspace ? 'Workspaces' : 'Boards',
			'general statistics',
			StatData.month,
			StatData.year
		],
		queryFn: () => statisticsService.getGeneralStatistics(StatData)
	})

	const [stat, setStat] = useState<GeneralStatistics>(empty)

	useEffect(() => {
		if (error) toast.error(errorCatch(error))
	}, [error])

	useEffect(() => {
		setStat(data?.data.data || empty)
	}, [data?.data])

	return { stat, isLoading }
}
