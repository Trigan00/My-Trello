'use client'

import { authService } from '@/services/auth.service'
import { IAuthForm } from '@/types/auth.types'
import { Box, Link, Stack, TextField, Typography } from '@mui/material'
import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { useRouter, useSearchParams } from 'next/navigation'
import { DASHBOARD_PAGES } from '@/config/pages-url.config'
import { errorCatch } from '@/api/error'
import { EnumTokens } from '@/services/auth-token.service'
import { SITE_NAME } from '@/constants/seo.constants'
import { LoadingButton } from '@mui/lab'

export function Auth() {
	const searchParams = useSearchParams()
	const invite_token = searchParams.get(EnumTokens.INVITE_TOKEN)
	const { push } = useRouter()
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<IAuthForm>({})
	const [isLoginForm, setIsLoginForm] = useState(true)
	const { mutate, isPending } = useMutation({
		mutationKey: ['auth'],
		mutationFn: (data: IAuthForm) =>
			authService.main(isLoginForm ? 'signin' : 'signup', data, invite_token),
		onSuccess(res) {
			!isLoginForm && toast.success(res.data.message)
			// reset()
			isLoginForm && push(DASHBOARD_PAGES.HOME)
		},
		onError: (error: any) => toast.error(errorCatch(error))
	})

	const onSubmit: SubmitHandler<IAuthForm> = data => {
		mutate(data)
	}

	return (
		<Box
			component='form'
			onSubmit={handleSubmit(onSubmit)}
			noValidate
		>
			<Stack spacing={3}>
				<Typography
					component='h1'
					variant='h5'
					fontWeight={'600'}
				>
					{isLoginForm ? 'Войти' : 'Регистрация'} в {SITE_NAME}
				</Typography>

				<Typography
					variant='body2'
					sx={{ mt: 2, mb: 5 }}
				>
					{isLoginForm ? 'Еще нет аккаунта?' : 'Уже есть аккаунт?'}
					<Link
						variant='subtitle2'
						underline='hover'
						onClick={() => setIsLoginForm(prev => !prev)}
						sx={{ ml: 0.5, cursor: 'pointer' }}
					>
						{isLoginForm ? 'Зарегистроваться' : ' Тогда войдите'}
					</Link>
				</Typography>

				<TextField
					{...register('email', {
						required: 'Не может быть пустым',
						pattern: {
							value: /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/,
							message: 'Пожалуйста, введите действующий Email-адрес.'
						}
					})}
					type='email'
					error={!!errors.email}
					label='Email'
					helperText={errors.email?.message}
					variant='outlined'
					size='small'
					fullWidth
					required
				/>
				{!isLoginForm && (
					<TextField
						{...register('username', {
							required: 'Не может быть пустым'
						})}
						error={!!errors.username}
						label='Имя пользователя'
						helperText={errors.username?.message}
						variant='outlined'
						size='small'
						fullWidth
						required
					/>
				)}
				<TextField
					{...register('password', {
						required: 'Не может быть пустым',
						minLength: {
							value: 8,
							message: 'В пароле должно быть не менее 8 символов.'
						},
						pattern: {
							value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
							message:
								'Пароль должен содержать по крайней мере одну цифру, одну строчную и одну заглавную букву'
						}
					})}
					type='password'
					error={!!errors.password}
					label='Пароль'
					helperText={errors.password?.message}
					variant='outlined'
					size='small'
					fullWidth
					required
				/>

				<LoadingButton
					loading={isPending}
					type='submit'
					variant='contained'
					fullWidth
					sx={{
						color: 'white'
					}}
				>
					{isLoginForm ? 'Войти' : 'Зарегистроваться'}
				</LoadingButton>

				<Stack
					direction='row'
					alignItems='center'
					justifyContent='flex-end'
					sx={{ my: 3 }}
				>
					<Link
						variant='subtitle2'
						underline='hover'
						href='/auth/recovery'
					>
						Забыли пароль?
					</Link>
				</Stack>
			</Stack>
		</Box>
	)
}
