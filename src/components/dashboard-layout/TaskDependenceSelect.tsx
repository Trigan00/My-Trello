import * as React from 'react'
import Box from '@mui/material/Box'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import Chip from '@mui/material/Chip'
import { useTasks } from '@/hooks/task-hooks/useTasks'
import { Skeleton } from '@mui/material'
import shortenText from '@/helpers/shortenText'
import { useMemo } from 'react'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250
		}
	}
}

interface MembersSelectI {
	board_id: number
	dependence: number[]
	setDependence: React.Dispatch<React.SetStateAction<number[]>>
	currentTask_id?: number
}

export default function TaskDependenceSelect({
	dependence,
	board_id,
	setDependence,
	currentTask_id
}: MembersSelectI) {
	let { items: tasks } = useTasks(board_id)
	tasks = useMemo(
		() =>
			currentTask_id || currentTask_id === 0
				? tasks?.filter(t => t.task_id !== currentTask_id)
				: tasks,
		[tasks, currentTask_id]
	)

	const handleChange = (event: SelectChangeEvent<typeof dependence>) => {
		const {
			target: { value }
		} = event
		const arr =
			typeof value === 'string' ? value.split(',').map(v => Number(v)) : value
		setDependence(arr)
	}

	return (
		<>
			{dependence && tasks ? (
				<FormControl sx={{ width: '100%' }}>
					<InputLabel
						id='demo-multiple-chip-label'
						size='small'
					>
						<p
							style={{
								margin: 0,
								paddingRight: '5px',
								backgroundColor: 'white'
							}}
						>
							Зависимые задачи
						</p>
					</InputLabel>
					<Select
						labelId='demo-multiple-chip-label'
						id='demo-multiple-chip'
						multiple
						value={dependence}
						onChange={handleChange}
						size='small'
						input={
							<OutlinedInput
								id='select-multiple-chip'
								label='Chip'
							/>
						}
						renderValue={selected => (
							<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
								{selected.map(value => (
									<Chip
										key={value}
										label={shortenText(
											tasks.find(t => t.task_id === value)?.name as string,
											16
										)}
									/>
								))}
							</Box>
						)}
						MenuProps={MenuProps}
					>
						{tasks.map(task => (
							<MenuItem
								key={task.task_id}
								value={task.task_id}
							>
								{shortenText(task.name, 16)}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			) : (
				<Skeleton
					variant='rounded'
					sx={{
						mt: 2,
						height: '40px',
						width: '100%',
						borderRadius: '15px'
					}}
				/>
			)}
		</>
	)
}
