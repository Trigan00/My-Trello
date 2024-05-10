import AddIcon from '@mui/icons-material/Add'
import { useState } from 'react'
import MyModal from '@/components/UI/MyModal'
import { Button, TextField, Typography } from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Loader } from '@/components/UI/Loader/Loader'
import { useAddBoard } from '@/hooks/board-hooks/useAddBoard'

interface NewBoardI {
	ws_id: number
}

export function NewBoard({ ws_id }: NewBoardI) {
	const [isModal, setIsModal] = useState(false)
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<{ name: string }>({})
	const { addBoard, isPending } = useAddBoard(() => {
		reset()
		setIsModal(false)
	})
	const onSubmit: SubmitHandler<{ name: string }> = data => {
		addBoard({ name: data.name, ws_id })
	}

	return (
		<>
			<Button
				variant='contained'
				onClick={() => setIsModal(true)}
				sx={{
					width: '140px',
					color: 'white',
					p: '8px',
					fontSize: '12px',
					fontWeight: '400'
				}}
			>
				<AddIcon fontSize='small' />
				Добавить доску
			</Button>
			<MyModal
				isModal={isModal}
				setIsModal={setIsModal}
				onClose={reset}
			>
				<Typography sx={{ fontWeight: '600', fontSize: '20px' }}>
					Добавить новую доску
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
