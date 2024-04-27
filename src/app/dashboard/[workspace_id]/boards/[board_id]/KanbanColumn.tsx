import { Draggable, Droppable } from '@hello-pangea/dnd'
import type { Dispatch, SetStateAction } from 'react'

import type { TaskI } from '@/types/task.types'

import { KanbanAddTask } from './KanbanAddTask'
import { KanbanCard } from './KanbanCard'
import { MyCard } from '@/components/UI/MyCard'
import { Typography } from '@mui/material'
import { COLORS } from '@/constants/color.constants'

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
	return (
		<Droppable droppableId={column_id.toString()}>
			{provided => (
				<div
					ref={provided.innerRef}
					{...provided.droppableProps}
				>
					<MyCard
						variant='shadowed'
						sx={{
							p: '20px 21px',
							width: '250px'
						}}
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

						{items
							?.filter(item => item.column_id === column_id)
							.map((item, index) => (
								<Draggable
									key={item.id}
									draggableId={item.id.toString()}
									index={index}
								>
									{provided => (
										<div
											ref={provided.innerRef}
											{...provided.draggableProps}
											{...provided.dragHandleProps}
										>
											<KanbanCard
												key={item.id}
												item={item}
												setItems={setItems}
											/>
										</div>
									)}
								</Draggable>
							))}

						{provided.placeholder}
						<KanbanAddTask />
					</MyCard>
				</div>
			)}
		</Droppable>
	)
}
