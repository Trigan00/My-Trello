'use client'

import React from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { TextField, Box, Typography, Stack, Link } from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IAuthRecoveryForm } from '@/types/auth.types'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'
import { authService } from '@/services/auth.service'
import { errorCatch } from '@/api/error'
import { LoadingButton } from '@mui/lab'

export default function Recovery() {
	const searchParams = useSearchParams()
	const token = searchParams.get('token')
	const { push } = useRouter()
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm<IAuthRecoveryForm>({})
	const { mutate, isPending } = useMutation({
		mutationKey: ['auth_recovery'],
		mutationFn: (data: IAuthRecoveryForm) =>
			authService.recovery(
				token ? 'resetpassword' : 'forgotpassword',
				data,
				token
			),
		onSuccess() {
			toast.success(
				token ? 'Пароль успешно изменен' : 'На почту отправлено письмо'
			)
			push('/auth')
		},
		onError: (error: any) => toast.error(errorCatch(error))
	})

	const onSubmit: SubmitHandler<IAuthRecoveryForm> = data => {
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
					{token ? 'Восстановить пароль' : 'Забыли пароль?'}
				</Typography>
				{token ? (
					<>
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
							label='Введите новый пароль'
							helperText={errors.password?.message}
							variant='outlined'
							size='small'
							fullWidth
							required
						/>
						<TextField
							{...register('confirm_password', {
								required: 'Не может быть пустым',
								validate: {
									matchesPassword: value =>
										value === watch('password') || 'Пароли не совпадают'
								}
							})}
							type='password'
							error={!!errors.confirm_password}
							label='Подтвердите новый пароль'
							helperText={errors.confirm_password?.message}
							variant='outlined'
							size='small'
							fullWidth
							required
						/>
					</>
				) : (
					<TextField
						{...register('email', {
							required: 'Не может быть пустым',
							pattern: {
								value: /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/,
								message: 'Пожалуйста, введите действующий Email-адрес.'
							}
						})}
						error={!!errors.email}
						label='Email'
						helperText={errors.email?.message}
						variant='outlined'
						margin='normal'
						size='small'
						fullWidth
						required
					/>
				)}

				<LoadingButton
					loading={isPending}
					type='submit'
					fullWidth
					variant='contained'
					sx={{
						color: 'white'
					}}
				>
					Сбросить пароль
				</LoadingButton>

				<Stack
					direction='row'
					alignItems='center'
					justifyContent='flex-start'
					sx={{ my: 3 }}
				>
					<Link
						variant='subtitle2'
						underline='hover'
						href='/auth'
					>
						Войти
					</Link>
				</Stack>
			</Stack>
		</Box>
	)
}
