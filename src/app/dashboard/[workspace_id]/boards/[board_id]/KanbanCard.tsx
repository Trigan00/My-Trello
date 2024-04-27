import type { Dispatch, SetStateAction } from 'react'
import { Controller, useForm } from 'react-hook-form'

import type { TaskI, TypeTaskFormState } from '@/types/task.types'

import { useDeleteTask } from '@/hooks/task-hooks/useDeleteTask'
// import { useTaskDebounce } from '@/hooks/task-hooks/useTaskDebounce'
import { Box, Grid, Typography } from '@mui/material'
import { COLORS } from '@/constants/color.constants'
import Image from 'next/image'

interface IKanbanCard {
	item: TaskI
	setItems: Dispatch<SetStateAction<TaskI[] | undefined>>
}

export function KanbanCard({ item, setItems }: IKanbanCard) {
	// const { register, control, watch } = useForm<TypeTaskFormState>({
	// 	defaultValues: {
	// 		name: item.name
	// 	}
	// })

	// useTaskDebounce({ watch, itemId: item.id })

	return (
		<Box
			sx={{
				position: 'relative',
				mt: '10px',
				color: COLORS.textBlack,
				backgroundColor: COLORS.border,
				borderRadius: '10px',
				p: '10px 12px',
				cursor: 'pointer'
			}}
			onClick={() => console.log('message')}
		>
			<Typography sx={{ mr: '20px' }}>{item.name}</Typography>
			<Image
				style={{
					position: 'absolute',
					top: '10px',
					right: '6px',
					cursor: 'grab',
					padding: '5px'
				}}
				src={'/svg/drag.svg'}
				alt={'drag'}
				width={10}
				height={16}
			/>
		</Box>
	)
}
