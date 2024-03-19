'use client'

import { authService } from '@/services/auth.service'
import { IAuthForm } from '@/types/auth.types'
import {
	Avatar,
	Box,
	Button,
	Container,
	CssBaseline,
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

export function Auth() {
	const { push } = useRouter()
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<IAuthForm>({})

	const { mutate } = useMutation({
		mutationKey: ['auth'],
		mutationFn: (data: IAuthForm) =>
			authService.main(isLoginForm ? 'login' : 'register', data),
		onSuccess() {
			toast.success(`Successfully ${isLoginForm ? 'login' : 'registered'}!`)
			reset()
			push(DASHBOARD_PAGES.HOME)
		},
		onError: (error: any) => toast.error(error.response.data.message)
	})
	const [isLoginForm, setIsLoginForm] = useState(false)

	const onSubmit: SubmitHandler<IAuthForm> = data => {
		mutate(data)
	}

	return (
		<Container maxWidth='xs'>
			<CssBaseline />
			<Box
				sx={{
					marginTop: 8,
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
					{isLoginForm ? 'Sign in' : 'Sign Up'}
				</Typography>
				<Box
					component='form'
					onSubmit={handleSubmit(onSubmit)}
					noValidate
					sx={{ mt: 1 }}
				>
					<TextField
						{...register('email', {
							required: 'This is required.',
							pattern: /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/
						})}
						error={!!errors.email}
						label='email'
						helperText={errors.email?.message}
						variant='outlined'
						margin='normal'
						size='small'
						fullWidth
						required
					/>
					<TextField
						{...register('password', { required: 'This is required.' })}
						error={!!errors.password}
						label='password'
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
						{isLoginForm ? 'Sign in' : 'Sign Up'}
					</Button>

					<Link
						variant='body2'
						onClick={() => setIsLoginForm(prev => !prev)}
						sx={{ cursor: 'pointer' }}
					>
						{isLoginForm
							? "Don't have an account? Sign Up"
							: 'Already have an account? Sign in'}
					</Link>
				</Box>
			</Box>
		</Container>
	)
}
