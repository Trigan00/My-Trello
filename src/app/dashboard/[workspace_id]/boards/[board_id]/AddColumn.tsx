import { MyCard } from '@/components/UI/MyCard'
import { COLORS } from '@/constants/color.constants'
import { useAddColumn } from '@/hooks/columns-hooks/useAddColumn'
import { Box, Button, TextField, Typography } from '@mui/material'
import Image from 'next/image'
import { useState } from 'react'

interface AddColumnI {
	board_id: number
}

export function AddColumn({ board_id }: AddColumnI) {
	const [isEdit, setIsEdit] = useState(false)
	const [name, setName] = useState('')

	const { addColumn } = useAddColumn(() => {
		setName('')
		setIsEdit(false)
	})

	const onClickHandler = () => {
		addColumn({ name, board_id })
	}

	if (isEdit) {
		return (
			<MyCard
				variant='shadowed'
				sx={{
					boxSizing: 'border-box',
					padding: '20px 21px',
					flexShrink: 0,
					width: '292px',
					height: 'fit-content'
				}}
			>
				<TextField
					variant='outlined'
					fullWidth
					size='small'
					label='Название колонки'
					value={name}
					onChange={event => setName(event.target.value)}
				/>
				<Box
					sx={{
						mt: 1,
						display: 'flex',
						gap: 1
					}}
				>
					<Button
						variant='contained'
						size='small'
						disabled={!!!name}
						sx={{ color: 'white' }}
						onClick={onClickHandler}
					>
						Добавить
					</Button>
					<Button
						size='small'
						onClick={() => {
							setName('')
							setIsEdit(false)
						}}
					>
						Отмена
					</Button>
				</Box>
			</MyCard>
		)
	}

	return (
		<MyCard
			variant='shadowed'
			sx={{
				flexShrink: 0,
				padding: '20px 21px',
				width: '250px',
				height: 'fit-content',
				display: 'flex',
				alignItems: 'center',
				gap: 1,
				cursor: 'pointer'
			}}
			onClick={() => setIsEdit(true)}
		>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					gap: 1,
					'&:hover': {
						filter: 'brightness(0.7)'
					}
				}}
			>
				<Image
					src='/svg/circle_add.svg'
					alt={'circle_add'}
					width={20}
					height={20}
				/>
				<Typography
					// fontWeight={600}
					fontSize={'15px'}
					fontWeight={500}
					sx={{
						color: COLORS.textGrey,
						width: '100%'
					}}
				>
					Добавить колонку
				</Typography>
			</Box>
		</MyCard>
	)
}
