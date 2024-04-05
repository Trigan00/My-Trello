import AddIcon from '@mui/icons-material/Add'
import { useState } from 'react'
import MyModal from '@/components/UI/MyModal'
import { Button, TextField, Typography } from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Loader } from '@/components/UI/Loader/Loader'
import { AddBoardI } from '@/types/task.types'
import { useAddBoard } from '@/hooks/board-hooks/useAddBoard'

export function NewBoard() {
	const [isModal, setIsModal] = useState(false)
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<AddBoardI>({})
	const { addBoard, isPending } = useAddBoard(() => setIsModal(false))
	const onSubmit: SubmitHandler<AddBoardI> = data => {
		addBoard(data)
	}

	return (
		<>
			<Button
				variant='contained'
				onClick={() => setIsModal(true)}
				sx={{
					width: '140px',
					color: 'white',
					textTransform: 'inherit',
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
				resetFunc={reset}
			>
				<Typography sx={{ fontWeight: '600', fontSize: '20px' }}>
					Добавить новую доску
				</Typography>
				<TextField
					{...register('title', {
						required: 'Не может быть пустым'
					})}
					error={!!errors.title}
					helperText={errors.title?.message}
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
