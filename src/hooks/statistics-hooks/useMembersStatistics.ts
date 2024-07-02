import { errorCatch } from '@/api/error'
import { statisticsService } from '@/services/statistics.service'
import { MembersStatistics, GetStatisticsI } from '@/types/statistics.types'
import { useQuery } from '@tanstack/react-query'
import { useState, useEffect } from 'react'
import { toast } from 'sonner'

const empty = [
	{
		name: '',
		all: 0,
		in: 0,
		not_in: 0
	}
]

export const useMembersStatistics = (StatData: GetStatisticsI) => {
	const { data, isLoading, error } = useQuery({
		queryKey: ['members statistics', StatData.month, StatData.year],
		queryFn: () => statisticsService.getMembersStatistics(StatData)
	})

	const [stat, setStat] = useState<MembersStatistics>(empty)

	useEffect(() => {
		if (error) toast.error(errorCatch(error))
	}, [error])

	useEffect(() => {
		setStat(data?.data.data || empty)
	}, [data?.data])

	return { stat, isLoading }
}
