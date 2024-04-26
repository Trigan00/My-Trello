import { Draggable, Droppable } from '@hello-pangea/dnd'
import type { Dispatch, SetStateAction } from 'react'

import type { TaskI } from '@/types/task.types'

import { KanbanAddCard } from './KanbanAddCard'
import { KanbanCard } from './KanbanCard'
import { MyCard } from '@/components/UI/MyCard'
import { Typography } from '@mui/material'
import { COLORS } from '@/constants/color.constants'

interface IKanbanColumn {
	value: number
	label: string
	items: TaskI[] | undefined
	setItems: Dispatch<SetStateAction<TaskI[] | undefined>>
}

export function KanbanColumn({ value, items, label, setItems }: IKanbanColumn) {
	return (
		<Droppable droppableId={value.toString()}>
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
							?.filter(item => item.status === value)
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
						<KanbanAddCard setItems={setItems} />
					</MyCard>
				</div>
			)}
		</Droppable>
	)
}
