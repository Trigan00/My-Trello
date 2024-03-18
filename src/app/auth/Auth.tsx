'use client'

import { IAuthForm } from '@/types/auth.types'
import { FormGroup } from '@mui/material'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'

export function Auth() {
	const { register, handleSubmit, reset } = useForm<IAuthForm>({})
	console.log(process.env.URL_API)

	// const { mutate } = useMutation({
	// 	mutationKey: ['auth'],
	// 	mutationFn: (data: IAuthForm) =>
	// 		authService.main(isLoginForm ? 'login' : 'register', data),
	// 	onSuccess() {
	// 		toast.success('Successfully login!')
	// 		reset()
	// 		push(DASHBOARD_PAGES.HOME)
	// 	}
	// })

	// const onSubmit: SubmitHandler<IAuthForm> = data => {
	// 	mutate(data)
	// }

	return <FormGroup></FormGroup>
}
