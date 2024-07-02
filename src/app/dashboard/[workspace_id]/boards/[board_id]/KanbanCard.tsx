import { useState } from 'react'
import type { TaskI } from '@/types/task.types'
import { Box, TextField, Typography } from '@mui/material'
import { COLORS } from '@/constants/color.constants'
import Image from 'next/image'
import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'
import shortenText from '@/helpers/shortenText'
import { EditTask } from './task_info/EditTask'

interface IKanbanCard {
	item: TaskI
	taskEditHandler?: (tasK_id: number) => void
}

export function KanbanCard({ item, taskEditHandler }: IKanbanCard) {
	const { attributes, listeners, setNodeRef, transform, isDragging } =
		useDraggable({
			id: item.task_id,
			data: {
				type: 'Task',
				task: item
			}
		})
	// const [isEdit, setIsEdit] = useState(false)

	const style = {
		transform: CSS.Transform.toString(transform),
		opacity: isDragging ? 0 : 1,
		cursor: 'pointer'
	}

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
				'&:hover': {
					transition: '0.2s',
					filter: 'brightness(0.9)'
				}
			}}
		>
			<TextField
				// onClick={() => setIsEdit(true)}
				multiline
				value={shortenText(item.name, 120)}
				onClick={() => taskEditHandler && taskEditHandler(item.task_id)}
				InputProps={{
					readOnly: true
				}}
				sx={{
					outline: 'none',
					'& .MuiOutlinedInput-root': {
						'& fieldset': {
							border: 'none'
						},
						padding: '4px'
					},
					'& .MuiInputBase-input': {
						padding: '8px',
						cursor: 'pointer'
					}
				}}
			/>
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
			{/* {isEdit && (
				<EditTask
					task_id={item.task_id}
					board_id={board_id as number}
					isModal={isEdit}
					setIsModal={setIsEdit}
				/>
			)} */}
		</Box>
	)
}
