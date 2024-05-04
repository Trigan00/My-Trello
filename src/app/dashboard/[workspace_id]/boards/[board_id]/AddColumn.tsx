import { MyCard } from '@/components/UI/MyCard'
import { COLORS } from '@/constants/color.constants'
import { useAddColumn } from '@/hooks/columns-hooks/useAddColumn'
import { Box, Button, TextField, Typography } from '@mui/material'
import Image from 'next/image'
import { useState } from 'react'

export function AddColumn() {
	const [isEdit, setIsEdit] = useState(false)
	const [name, setName] = useState('')

	const { addColumn } = useAddColumn(() => {
		setName('')
		setIsEdit(false)
	})

	const onClickHandler = () => {
		addColumn(name)
	}

	if (isEdit) {
		return (
			<Box sx={{ flexShrink: 0, width: '292px' }}>
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
			</Box>
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
				transition: '0.2s',
				display: 'flex',
				alignItems: 'center',
				gap: 1,
				cursor: 'pointer',
				'&:hover': {
					filter: 'brightness(0.3)'
				}
			}}
			onClick={() => setIsEdit(true)}
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
		</MyCard>
	)
}
