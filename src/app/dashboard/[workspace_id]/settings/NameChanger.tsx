'use client'

import { MyCard } from '@/components/UI/MyCard'
import { Heading } from '@/components/UI/Heading'
import { useWorkspaces } from '@/hooks/workspace-hooks/useWorkspaces'
import { Box, Button, Divider, TextField, Typography } from '@mui/material'
import { COLORS } from '@/constants/color.constants'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Loader } from '@/components/UI/Loader/Loader'
import { useUpdateWorkspace } from '@/hooks/workspace-hooks/useUpdateWorkspace'

interface NameChangerI {
	workspace_id: number
}

export function NameChanger({ workspace_id }: NameChangerI) {
	const { items: Workspaces } = useWorkspaces()
	const { updateWorkspace, isPending } = useUpdateWorkspace()

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<{ name: string }>({})

	const changeName: SubmitHandler<{ name: string }> = data => {
		updateWorkspace({ id: workspace_id, name: data.name })
	}

	return (
		<>
			<MyCard
				variant='shadowed'
				sx={{ mt: '20px' }}
			>
				<Box sx={{ p: 3 }}>
					<Typography
						fontSize={18}
						fontWeight={500}
					>
						Название
					</Typography>
					<Typography
						color={COLORS.textGrey}
						fontSize={14}
					>
						Изменение названия рабочего пространства
					</Typography>
				</Box>
				<Divider />
				<Box sx={{ p: 3, maxWidth: 650 }}>
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
						size='medium'
						label='Название'
						variant='outlined'
						type='text'
						fullWidth
					/>
				</Box>
				<Divider />
				<Box sx={{ p: 3, display: 'flex', justifyContent: 'end' }}>
					{isPending ? (
						<Loader />
					) : (
						<Button
							sx={{
								color: 'white',
								fontWeight: '400'
							}}
							variant='contained'
							onClick={handleSubmit(changeName)}
						>
							Сохранить
						</Button>
					)}
				</Box>
			</MyCard>
		</>
	)
}
