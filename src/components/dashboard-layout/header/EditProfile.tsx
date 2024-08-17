import { useState } from 'react'
import MyModal from '@/components/UI/MyModal'
import { Button, IconButton, Stack, TextField, Typography } from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Loader } from '@/components/UI/Loader/Loader'
import { useEditProfile } from '@/hooks/profile-hooks/useEditProfile'
import { IProfile } from '@/types/auth.types'
import EditIcon from '@mui/icons-material/Edit'
import TelegramIcon from '@mui/icons-material/Telegram'

export function EditProfile({
	telegram_url,
	username
}: Omit<IProfile, 'email'>) {
	const [isModal, setIsModal] = useState(false)
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<Omit<IProfile, 'email'>>({
		defaultValues: {
			telegram_url,
			username
		}
	})
	const { editProfile, isPending } = useEditProfile(() => {
		reset()
		setIsModal(false)
	})
	const onSubmit: SubmitHandler<Omit<IProfile, 'email'>> = data => {
		editProfile({ username: data.username, telegram_url: data.telegram_url })
	}

	return (
		<>
			<IconButton
				size='small'
				onClick={() => setIsModal(true)}
			>
				<EditIcon
					sx={{ color: 'text.secondary' }}
					fontSize='small'
				/>
			</IconButton>
			<MyModal
				isModal={isModal}
				setIsModal={setIsModal}
				onClose={reset}
			>
				<Stack spacing={2}>
					<Typography sx={{ fontWeight: '600', fontSize: '20px' }}>
						Редактировать профиль
					</Typography>
					<TextField
						{...register('username', {
							required: 'Не может быть пустым'
						})}
						error={!!errors.username}
						helperText={errors.username?.message}
						size='small'
						label='Имя пользователя'
						variant='outlined'
						type='text'
						fullWidth
					/>
					<a href='https://t.me/tackk_trackker_bot'>
						<Button
							variant='contained'
							fullWidth
							sx={{ color: 'white' }}
							endIcon={<TelegramIcon />}
						>
							Уведомления
						</Button>
					</a>
					{/* <TextField
					{...register('telegram_url', {
						required: 'Не может быть пустым'
					})}
					error={!!errors.telegram_url}
					helperText={errors.telegram_url?.message}
					size='small'
					label='Telegram'
					variant='outlined'
					type='text'
					fullWidth
					sx={{ mt: 3 }}
				/> */}
					{isPending ? (
						<Loader />
					) : (
						<Button
							sx={{
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
				</Stack>
			</MyModal>
		</>
	)
}
