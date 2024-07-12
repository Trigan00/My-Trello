import { useState } from 'react'
import MyModal from '@/components/UI/MyModal'
import { Button, MenuItem, TextField, Typography } from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Loader } from '@/components/UI/Loader/Loader'
import { useChangePassword } from '@/hooks/profile-hooks/useChangePassword'

export function EditPassword() {
	const [isModal, setIsModal] = useState(false)
	const {
		register,
		handleSubmit,
		reset,
		watch,
		formState: { errors }
	} = useForm<{
		old_password: string
		new_password: string
		confirm_password: string
	}>({})
	const { changePassword, isPending } = useChangePassword(() => {
		reset()
		setIsModal(false)
	})
	const onSubmit: SubmitHandler<{
		old_password: string
		new_password: string
	}> = data => {
		changePassword({
			old_password: data.old_password,
			new_password: data.new_password
		})
	}

	return (
		<>
			<MenuItem onClick={() => setIsModal(true)}>Смена пароля</MenuItem>
			<MyModal
				isModal={isModal}
				setIsModal={setIsModal}
				onClose={reset}
			>
				<Typography sx={{ fontWeight: '600', fontSize: '20px' }}>
					Сменить пароль
				</Typography>
				<TextField
					{...register('old_password', {
						required: 'Не может быть пустым'
					})}
					type='password'
					error={!!errors.old_password}
					label='Введите старый пароль'
					helperText={errors.old_password?.message}
					variant='outlined'
					margin='normal'
					size='small'
					fullWidth
					required
				/>
				<TextField
					{...register('new_password', {
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
					error={!!errors.new_password}
					label='Введите новый пароль'
					helperText={errors.new_password?.message}
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
								value === watch('new_password') || 'Пароли не совпадают'
						}
					})}
					type='password'
					error={!!errors.confirm_password}
					label='Повторите новый пароль'
					helperText={errors.confirm_password?.message}
					variant='outlined'
					margin='normal'
					size='small'
					fullWidth
					required
				/>

				{isPending ? (
					<Loader />
				) : (
					<Button
						sx={{
							mt: 2,
							color: 'white',
							textTransform: 'inherit',
							fontWeight: '400'
						}}
						variant='contained'
						fullWidth
						onClick={handleSubmit(onSubmit)}
					>
						Сохранить
					</Button>
				)}
			</MyModal>
		</>
	)
}
