import AddIcon from '@mui/icons-material/Add'
import { useState } from 'react'
import MyModal from '@/components/UI/MyModal'
import { Button, TextField, Typography } from '@mui/material'
import { IAddWorkspace } from '@/types/workspace.types'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useAddWorkspace } from '@/hooks/workspace-hooks/useAddWorkspace'
import { Loader } from '@/components/UI/Loader/Loader'

export function NewWorkspace() {
	const [isModal, setIsModal] = useState(false)
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<IAddWorkspace>({})
	const { addWorkspace, isPending } = useAddWorkspace(() => setIsModal(false))

	const onSubmit: SubmitHandler<IAddWorkspace> = data => {
		addWorkspace(data)
	}

	return (
		<>
			<Button
				variant='contained'
				onClick={() => setIsModal(true)}
				sx={{
					width: '220px',
					color: 'white',
					textTransform: 'inherit',
					p: '11px 12px',
					fontSize: '14px',
					fontWeight: '400',
					margin: '30px auto'
				}}
			>
				<AddIcon fontSize='small' />
				Рабочие пространства
			</Button>
			<MyModal
				isModal={isModal}
				setIsModal={setIsModal}
				resetFunc={reset}
			>
				<Typography sx={{ fontWeight: '600', fontSize: '20px' }}>
					Добавить рабочее пространство
				</Typography>
				<TextField
					{...register('name', {
						maxLength: {
							value: 80,
							message: 'Лимит знаков: 80'
						},
						required: 'Не может быть пустым'
					})}
					error={!!errors.name}
					helperText={errors.name?.message}
					size='small'
					label='Название'
					variant='outlined'
					type='text'
					fullWidth
					sx={{ mt: 3 }}
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
						Создать
					</Button>
				)}
			</MyModal>
		</>
	)
}
