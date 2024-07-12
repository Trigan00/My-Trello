import { useMutation } from '@tanstack/react-query'
import { errorCatch } from '@/api/error'
import { toast } from 'sonner'
import { accountService } from '@/services/account.service'

export function useChangePassword() {
	const { mutate: changePassword, isPending } = useMutation({
		mutationKey: ['edit profile'],
		mutationFn: (data: { old_password: string; new_password: string }) =>
			accountService.changePassword(data),
		onSuccess(res) {
			toast.success(res.data.message)
		},
		onError(error: any) {
			toast.error(errorCatch(error))
		}
	})

	return { changePassword, isPending }
}
