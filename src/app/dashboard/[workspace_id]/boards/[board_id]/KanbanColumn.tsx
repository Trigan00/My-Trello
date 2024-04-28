// import { Draggable, Droppable } from '@hello-pangea/dnd'
import {
	useEffect,
	useRef,
	useState,
	type Dispatch,
	type SetStateAction
} from 'react'

import type { TaskI } from '@/types/task.types'

import { KanbanAddTask } from './KanbanAddTask'
import { KanbanCard } from './KanbanCard'
import { MyCard } from '@/components/UI/MyCard'
import { Typography } from '@mui/material'
import { COLORS } from '@/constants/color.constants'
import { useDroppable } from '@dnd-kit/core'

interface IKanbanColumn {
	column_id: number
	label: string
	items: TaskI[] | undefined
	setItems: Dispatch<SetStateAction<TaskI[] | undefined>>
}

export function KanbanColumn({
	column_id,
	items,
	label,
	setItems
}: IKanbanColumn) {
	const { isOver, setNodeRef } = useDroppable({
		id: column_id
	})
	const elementRef = useRef<HTMLDivElement>(null)

	// const onMouseEnterHandler = () => {
	// 	if (elementRef.current && isOver) setHeight(elementRef.current.clientHeight)
	// }
	// const onMouseLeaveHandler = () => {
	// 	if (elementRef.current && isOver) setHeight(elementRef.current.clientHeight)
	// }

	return (
		<div
			ref={setNodeRef}
			style={{ height: 'fit-content' }}
		>
			<MyCard
				// ref={elementRef}
				variant='shadowed'
				sx={{
					flexShrink: 0,
					padding: '20px 21px',
					width: '250px',
					height: 'fit-content',
					// backgroundColor: 'red',
					transition: '0.2s'
				}}
				// onMouseOver={onMouseOverHandler}
			>
				<Typography
					fontWeight={600}
					fontSize={'16px'}
					sx={{
						color: COLORS.textBlack,
						width: '100%',
						mb: '16px'
					}}
				>
					{label}
				</Typography>
				<div
					style={
						{
							// maxHeight: '500px',
							// overflowX: 'hidden',
							// overflowY: 'auto',
							// scrollbarWidth: 'thin'
						}
					}
				>
					{items
						?.filter(item => item.column_id === column_id)
						.map((item, index) => (
							<KanbanCard
								key={item.id}
								item={item}
								setItems={setItems}
							/>
						))}
				</div>
				<KanbanAddTask />
			</MyCard>
		</div>
	)
}
