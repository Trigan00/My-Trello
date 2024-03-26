'use client'

import { authService } from '@/services/auth.service'
import { IAuthForm } from '@/types/auth.types'
import {
	Avatar,
	Box,
	Button,
	Grid,
	Link,
	TextField,
	Typography
} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { DASHBOARD_PAGES } from '@/config/pages-url.config'
import NextLink from 'next/link'
import { errorCatch } from '@/api/error'

export function Auth() {
	const { push } = useRouter()
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<IAuthForm>({})
	const [isLoginForm, setIsLoginForm] = useState(true)
	const { mutate } = useMutation({
		mutationKey: ['auth'],
		mutationFn: (data: IAuthForm) =>
			authService.main(isLoginForm ? 'login' : 'register', data),
		onSuccess() {
			toast.success(`Successfully ${isLoginForm ? 'login' : 'registered'}!`)
			reset()
			push(DASHBOARD_PAGES.HOME)
		},
		onError: (error: any) => toast.error(errorCatch(error))
	})

	const onSubmit: SubmitHandler<IAuthForm> = data => {
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
			<Avatar sx={{ m: 1, bgcolor: '#e10655' }}>
				<LockOutlinedIcon />
			</Avatar>
			<Typography
				component='h1'
				variant='h5'
			>
				{isLoginForm ? 'Войти' : 'Регистрация'}
			</Typography>
			<Box
				component='form'
				onSubmit={handleSubmit(onSubmit)}
				noValidate
				sx={{ mt: 1, maxWidth: '505px' }}
			>
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
					margin='normal'
					size='small'
					fullWidth
					required
				/>

				<Button
					type='submit'
					variant='contained'
					fullWidth
					sx={{
						color: 'white'
					}}
				>
					{isLoginForm ? 'Войти' : 'Зарегистроваться'}
				</Button>

				<Grid container>
					<Grid
						item
						xs
					>
						{isLoginForm && (
							<NextLink
								href='/auth/recovery'
								className='Link'
							>
								Забыли пароль?
							</NextLink>
						)}
					</Grid>
					<Grid item>
						<Link
							variant='body2'
							onClick={() => setIsLoginForm(prev => !prev)}
							sx={{ cursor: 'pointer' }}
						>
							{isLoginForm
								? 'Еще нет аккаунта? Зарегистроваться'
								: 'Уже есть аккаунт? Тогда войдите'}
						</Link>
					</Grid>
				</Grid>
			</Box>
		</Box>
	)
}
