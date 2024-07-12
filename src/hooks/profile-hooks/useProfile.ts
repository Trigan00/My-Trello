import { errorCatch } from '@/api/error'
import { accountService } from '@/services/account.service'
import { IProfile } from '@/types/auth.types'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'

export function useProfile() {
	const { data, isLoading, error } = useQuery({
		queryKey: ['profile'],
		queryFn: () => accountService.getProfile()
	})

	const [profile, setProfile] = useState<IProfile | undefined>(data?.data)

	useEffect(() => {
		if (error) toast.error(errorCatch(error))
	}, [error])

	useEffect(() => {
		setProfile(data?.data)
	}, [data?.data])

	return { profile, isLoading }
}
