import { useMutation, useQueryClient } from '@tanstack/react-query'
import { errorCatch } from '@/api/error'
import { toast } from 'sonner'
import { IProfile } from '@/types/auth.types'
import { accountService } from '@/services/account.service'

export function useEditProfile() {
	const queryClient = useQueryClient()

	const { mutate: editProfile, isPending } = useMutation({
		mutationKey: ['edit profile'],
		mutationFn: (data: Omit<IProfile, 'email'>) =>
			accountService.editProfile(data),
		onSuccess(res) {
			queryClient.invalidateQueries({
				queryKey: ['profile']
			})
			toast.success(res.data.message)
		},
		onError(error: any) {
			toast.error(errorCatch(error))
		}
	})

	return { editProfile, isPending }
}
