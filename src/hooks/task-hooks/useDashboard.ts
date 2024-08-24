import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

import { DashboardResponseI } from '@/types/task.types'
import { taskService } from '@/services/task.service'
import { errorCatch } from '@/api/error'
import { toast } from 'sonner'

export function useDashboard() {
	const { data, isLoading, error } = useQuery({
		queryKey: ['dashboard'],
		queryFn: () => taskService.getDashboard()
	})

	const [dashboardData, setDashboardData] = useState<
		DashboardResponseI | undefined
	>(data?.data)

	useEffect(() => {
		if (error) toast.error(errorCatch(error))
	}, [error])

	useEffect(() => {
		setDashboardData(data?.data)
	}, [data?.data])

	return { dashboardData, isLoading }
}
