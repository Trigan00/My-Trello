'use client'

import NextLink from 'next/link'
import React from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Button, TextField, Box, Typography, Avatar } from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IAuthRecoveryForm } from '@/types/auth.types'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'
import { authService } from '@/services/auth.service'
import { errorCatch } from '@/api/error'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'

export default function Recovery() {
	const searchParams = useSearchParams()
	const token = searchParams.get('code')
	const { push } = useRouter()
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm<IAuthRecoveryForm>({})
	const { mutate } = useMutation({
		mutationKey: ['auth_recovery'],
		mutationFn: (data: IAuthRecoveryForm) =>
			authService.recovery(token ? 'update' : 'forget', data, token),
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
			sx={{
				my: 8,
				mx: 4,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center'
			}}
		>
			<Avatar sx={{ m: 1, bgcolor: '#9c07ab' }}>
				<LockOutlinedIcon />
			</Avatar>
			<Typography
				component='h1'
				variant='h5'
			>
				{token ? 'Восстановить пароль' : 'Забыли пароль?'}
			</Typography>

			<Box
				component='form'
				onSubmit={handleSubmit(onSubmit)}
				noValidate
				sx={{ mt: 1, maxWidth: '505px', width: '100%' }}
			>
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
							margin='normal'
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
							margin='normal'
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

				<Button
					type='submit'
					fullWidth
					variant='contained'
					sx={{
						color: 'white'
					}}
				>
					Сбросить пароль
				</Button>

				<NextLink
					href='/auth'
					className='Link'
				>
					Войти
				</NextLink>
			</Box>
		</Box>
	)
}
