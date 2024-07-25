import type { TaskI } from '@/types/task.types'
import { Typography } from '@mui/material'
import { COLORS } from '@/constants/color.constants'
import Image from 'next/image'
import { CSS } from '@dnd-kit/utilities'
import shortenText from '@/helpers/shortenText'
import { useSortable } from '@dnd-kit/sortable'

interface IKanbanCard {
	item: TaskI
	taskEditHandler?: (tasK_id: number) => void
}

export function KanbanCard({ item, taskEditHandler }: IKanbanCard) {
	const {
		attributes,
		listeners,
		setNodeRef,
		transform,
		transition,
		isDragging
	} = useSortable({
		id: String(item.task_id),
		data: {
			type: 'Task',
			task: item
		}
	})

	const style = {
		transition,
		transform: CSS.Transform.toString(transform)
	}

	if (isDragging) {
		return (
			<div
				ref={setNodeRef}
				style={style}
			>
				<Typography
					sx={{
						marginTop: '10px',
						padding: '8px',
						wordWrap: 'break-word',
						color: 'white',
						border: `1px dashed ${COLORS.textGrey}`,
						borderRadius: '10px'
					}}
					onClick={() => taskEditHandler && taskEditHandler(item.task_id)}
				>
					{shortenText(item.name, 120)}
				</Typography>
			</div>
		)
	}

	return (
		<div
			ref={setNodeRef}
			style={style}
			{...listeners}
			{...attributes}
		>
			<div
				style={{
					position: 'relative',
					marginTop: '10px',
					color: COLORS.textBlack,
					backgroundColor: COLORS.border,
					borderRadius: '10px'
					// '&:hover': {
					// 	// transition: '0.2s',
					// 	filter: 'brightness(0.9)'
					// }
				}}
			>
				<Typography
					sx={{
						padding: '8px',
						pr: '25px',
						wordWrap: 'break-word',
						cursor: 'pointer'
					}}
					onClick={() => taskEditHandler && taskEditHandler(item.task_id)}
				>
					{shortenText(item.name, 120)}
				</Typography>
				{/* <TextField
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
				/> */}
				<Image
					style={{
						position: 'absolute',
						top: '7px',
						right: '6px',
						cursor: 'grab',
						padding: '5px'
					}}
					src={'/svg/drag.svg'}
					alt={'drag'}
					width={10}
					height={16}
				/>
			</div>
		</div>
	)
}
