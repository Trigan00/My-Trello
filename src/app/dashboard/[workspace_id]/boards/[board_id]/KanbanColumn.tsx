// import { Draggable, Droppable } from '@hello-pangea/dnd'
import { useState, type Dispatch, type SetStateAction } from 'react'

import type { ColumnI, TaskI } from '@/types/task.types'
import AddIcon from '@mui/icons-material/Add'
import { KanbanTaskForm } from './KanbanTaskForm'
import { KanbanCard } from './KanbanCard'
import { MyCard } from '@/components/UI/MyCard'
import { Box, Button, TextField, Tooltip, Typography } from '@mui/material'
import { COLORS } from '@/constants/color.constants'
import { useDroppable } from '@dnd-kit/core'
import shortenText from '@/helpers/shortenText'
import { ColumnSettings } from './ColumnSettings'
import { useEditName } from '@/hooks/columns-hooks/useEditName'
import { EditTask } from './task_info/EditTask'
import { DEFAULT_COLUMNS } from '@/constants/columns.constants'

interface IKanbanColumn {
	column_id: number
	board_id: number
	label: string
	items: TaskI[] | undefined
	setItems: Dispatch<SetStateAction<TaskI[] | undefined>>
	columns: ColumnI[]
}

export function KanbanColumn({
	column_id,
	board_id,
	items,
	label,
	columns
}: IKanbanColumn) {
	const { setNodeRef, over } = useDroppable({
		id: column_id
	})
	const { editName } = useEditName(reset)
	const [isEdit, setIsEdit] = useState(false)
	const [name, setName] = useState('')
	const [isTaskForm, setIsTaskForm] = useState(false)
	const [isTaskEdit, setIsTaskEdit] = useState(false)
	const [editTaskId, setEditTaskId] = useState<number>()

	const taskEditHandler = (tasK_id: number) => {
		setEditTaskId(tasK_id)
		setIsTaskEdit(true)
	}

	function reset() {
		setIsEdit(false)
		setName('')
	}

	const saveHandler = () => {
		editName({ id: column_id, name })
	}

	return (
		<div
			ref={setNodeRef}
			style={{ height: 'fit-content' }}
		>
			<MyCard
				variant='shadowed'
				sx={{
					flexShrink: 0,
					padding: '20px 21px',
					width: '250px',
					height: 'fit-content',
					transition: '0.2s',
					transform: over && over.id === column_id ? 'scale(1.05)' : 'none'
				}}
			>
				{isEdit ? (
					<Box>
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
								onClick={saveHandler}
							>
								Сохранить
							</Button>
							<Button
								size='small'
								onClick={reset}
							>
								Отмена
							</Button>
						</Box>
					</Box>
				) : (
					<Box
						sx={{
							position: 'relative',
							display: 'flex',
							justifyContent: 'space-between'
						}}
					>
						<Tooltip
							title={label}
							placement='top'
						>
							<Typography
								fontWeight={600}
								fontSize={'16px'}
								sx={{
									color: COLORS.textBlack,
									mb: '16px'
								}}
							>
								{shortenText(label, 18)}
							</Typography>
						</Tooltip>
						{!DEFAULT_COLUMNS.has(
							columns.find(el => el.id === column_id)?.name || ''
						) && (
							<ColumnSettings
								setIsEdit={setIsEdit}
								column_id={column_id}
								label={label}
							/>
						)}
					</Box>
				)}
				<div
				// style={
				// 	{
				// 		maxHeight: '500px',
				// 		overflowX: 'hidden',
				// 		overflowY: 'auto',
				// 		scrollbarWidth: 'thin'
				// 	}
				// }
				>
					{items
						?.filter(item => item.column_id === column_id)
						.map(item => (
							<KanbanCard
								key={item.task_id}
								item={item}
								taskEditHandler={taskEditHandler}
							/>
						))}
				</div>
				<Button
					onClick={() => setIsTaskForm(true)}
					variant='text'
					startIcon={<AddIcon sx={{ color: COLORS.textBlack }} />}
					color='inherit'
					sx={{
						mt: '16px',
						width: '100%',
						color: COLORS.textBlack
					}}
				>
					Добавить
				</Button>
				{isTaskForm && (
					<KanbanTaskForm
						board_id={board_id}
						column_id={column_id}
						isModal={isTaskForm}
						setIsModal={setIsTaskForm}
					/>
				)}
			</MyCard>

			{isTaskEdit && (
				<EditTask
					task_id={editTaskId as number}
					board_id={board_id as number}
					isModal={isTaskEdit}
					setIsModal={setIsTaskEdit}
					columns={columns}
				/>
			)}
		</div>
	)
}
