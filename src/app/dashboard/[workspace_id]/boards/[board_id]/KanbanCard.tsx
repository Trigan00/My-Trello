import type { Dispatch, SetStateAction } from 'react'
import { Controller, useForm } from 'react-hook-form'

import type { TaskI, TypeTaskFormState } from '@/types/task.types'

import { useDeleteTask } from '@/hooks/task-hooks/useDeleteTask'
// import { useTaskDebounce } from '@/hooks/task-hooks/useTaskDebounce'
import { Box, Grid, Typography } from '@mui/material'
import { COLORS } from '@/constants/color.constants'
import Image from 'next/image'
import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'
import shortenText from '@/helpers/shortenText'

interface IKanbanCard {
	item: TaskI
	setItems: Dispatch<SetStateAction<TaskI[] | undefined>>
}

export function KanbanCard({ item, setItems }: IKanbanCard) {
	const { attributes, listeners, setNodeRef, transform, isDragging, over } =
		useDraggable({
			id: item.id,
			data: {
				type: 'Task',
				task: item
			}
		})
	const style = {
		transform: CSS.Transform.toString(transform),
		opacity: isDragging ? 0 : 1,
		cursor: 'pointer'
	}
	// const { register, control, watch } = useForm<TypeTaskFormState>({
	// 	defaultValues: {
	// 		name: item.name
	// 	}
	// })

	// useTaskDebounce({ watch, itemId: item.id })

	return (
		<Box
			ref={setNodeRef}
			style={style}
			{...listeners}
			{...attributes}
			sx={{
				position: 'relative',
				mt: '10px',
				color: COLORS.textBlack,
				backgroundColor: COLORS.border,
				borderRadius: '10px',
				p: '10px 20px 10px 12px',
				'&:hover': {
					transition: '0.2s',
					filter: 'brightness(0.9)'
				}
			}}
		>
			<Typography onClick={() => console.log('message')}>
				{shortenText(item.name, 120)}
			</Typography>
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
