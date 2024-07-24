import { SortableContext, useSortable } from '@dnd-kit/sortable'
import TrashIcon from '../icons/TrashIcon'
import { Column, Id, Task } from '../types'
import { CSS } from '@dnd-kit/utilities'
import { useMemo, useState } from 'react'
import PlusIcon from '../icons/PlusIcon'
import TaskCard from './TaskCard'
import { MyCard } from '@/components/UI/MyCard'

interface Props {
	column: Column
	deleteColumn: (id: Id) => void
	updateColumn: (id: Id, title: string) => void

	createTask: (columnId: Id) => void
	updateTask: (id: Id, content: string) => void
	deleteTask: (id: Id) => void
	tasks: Task[]
}

function ColumnContainer({
	column,
	deleteColumn,
	updateColumn,
	createTask,
	tasks,
	deleteTask,
	updateTask
}: Props) {
	const [editMode, setEditMode] = useState(false)

	const tasksIds = useMemo(() => {
		return tasks.map(task => task.id)
	}, [tasks])

	const {
		setNodeRef,
		attributes,
		listeners,
		transform,
		transition,
		isDragging
	} = useSortable({
		id: column.id,
		data: {
			type: 'Column',
			column
		},
		disabled: editMode
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
			></div>
		)
	}

	return (
		<div
			ref={setNodeRef}
			style={style}
		>
			<MyCard
				variant='shadowed'
				sx={{
					flexShrink: 0,
					padding: '20px 21px',
					width: '250px',
					height: 'fit-content',
					transition: '0.2s'
					// transform: over && over.id === column_id ? 'scale(1.05)' : 'none'
				}}
			>
				{/* Column title */}
				<div
					{...attributes}
					{...listeners}
					onClick={() => {
						setEditMode(true)
					}}
				>
					<div className='flex gap-2'>
						<div>0</div>
						{!editMode && column.title}
						{editMode && (
							<input
								className='bg-black focus:border-rose-500 border rounded outline-none px-2'
								value={column.title}
								onChange={e => updateColumn(column.id, e.target.value)}
								autoFocus
								onBlur={() => {
									setEditMode(false)
								}}
								onKeyDown={e => {
									if (e.key !== 'Enter') return
									setEditMode(false)
								}}
							/>
						)}
					</div>
					<button
						onClick={() => {
							deleteColumn(column.id)
						}}
					>
						<TrashIcon />
					</button>
				</div>

				{/* Column task container */}
				<div className='flex flex-grow flex-col gap-4 p-2 overflow-x-hidden overflow-y-auto'>
					<SortableContext items={tasksIds}>
						{tasks.map(task => (
							<TaskCard
								key={task.id}
								task={task}
								deleteTask={deleteTask}
								updateTask={updateTask}
							/>
						))}
					</SortableContext>
				</div>
				{/* Column footer */}
				<button
					className='flex gap-2 items-center border-columnBackgroundColor border-2 rounded-md p-4 border-x-columnBackgroundColor hover:bg-mainBackgroundColor hover:text-rose-500 active:bg-black'
					onClick={() => {
						createTask(column.id)
					}}
				>
					<PlusIcon />
					Add task
				</button>
			</MyCard>
		</div>
	)
}

export default ColumnContainer
