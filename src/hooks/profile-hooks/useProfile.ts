import { errorCatch } from '@/api/error'
import { accountService } from '@/services/account.service'
import { IProfile } from '@/types/auth.types'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'

const empty: IProfile = {
	email: '',
	telegram_url: '',
	username: ''
}
export function useProfile() {
	const { data, isLoading, error } = useQuery({
		queryKey: ['profile'],
		queryFn: () => accountService.getProfile()
	})

	const [profile, setProfile] = useState<IProfile>(data?.data || empty)

	useEffect(() => {
		if (error) toast.error(errorCatch(error))
	}, [error])

	useEffect(() => {
		if (data) setProfile(data.data)
	}, [data?.data])

	return { profile, isLoading }
}
