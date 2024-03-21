'use client'

import { authService } from '@/services/auth.service'
import { IAuthForm } from '@/types/auth.types'
import {
	Avatar,
	Box,
	Button,
	CssBaseline,
	Grid,
	IconButton,
	InputAdornment,
	Link,
	Paper,
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
import { SITE_NAME } from '@/constants/seo.constants'
import { errorCatch } from '@/api/error'
import { VisibilityOff, Visibility } from '@mui/icons-material'

function Copyright(props: any) {
	return (
		<Typography
			variant='body2'
			color='text.secondary'
			align='center'
			{...props}
		>
			{'Copyright © '}
			<Link
				color='inherit'
				href='#'
			>
				{SITE_NAME}
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	)
}

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
		<Grid
			container
			component='main'
			sx={{ height: '100vh' }}
		>
			<CssBaseline />
			<Grid
				item
				xs={false}
				sm={4}
				md={7}
				sx={{
					backgroundImage: 'url(/AuthFon.jpeg)',
					backgroundRepeat: 'no-repeat',
					backgroundColor: t =>
						t.palette.mode === 'light'
							? t.palette.grey[50]
							: t.palette.grey[900],
					backgroundSize: 'cover',
					backgroundPosition: 'center'
				}}
			/>
			<Grid
				item
				xs={12}
				sm={8}
				md={5}
				component={Paper}
				elevation={6}
				square
			>
				<Box
					sx={{
						my: 8,
						mx: 4,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						maxWidth: '505px'
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
						sx={{ mt: 1 }}
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
						<Copyright sx={{ mt: 5 }} />
					</Box>
				</Box>
			</Grid>
		</Grid>
	)
}
