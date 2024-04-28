import type { Dispatch, SetStateAction } from 'react'
import { Controller, useForm } from 'react-hook-form'

import type { TaskI, TypeTaskFormState } from '@/types/task.types'

import { useDeleteTask } from '@/hooks/task-hooks/useDeleteTask'
// import { useTaskDebounce } from '@/hooks/task-hooks/useTaskDebounce'
import { Box, Grid, Typography } from '@mui/material'
import { COLORS } from '@/constants/color.constants'
import Image from 'next/image'
import { useDraggable } from '@dnd-kit/core'

interface IKanbanCard {
	item: TaskI
	setItems: Dispatch<SetStateAction<TaskI[] | undefined>>
}

export function KanbanCard({ item, setItems }: IKanbanCard) {
	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id: item.id,
		data: {
			type: 'Task',
			task: item
		}
	})
	const style = transform
		? {
				transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`
			}
		: undefined
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
				position: 'relative !important',
				mt: '10px',
				color: COLORS.textBlack,
				backgroundColor: COLORS.border,
				borderRadius: '10px',
				p: '10px 12px',
				cursor: 'pointer'
			}}
		>
			<Typography
				sx={{ mr: '20px' }}
				onClick={() => console.log('message')}
			>
				{item.name}
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
