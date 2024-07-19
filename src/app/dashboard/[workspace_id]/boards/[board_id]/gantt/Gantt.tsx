'use client'

import React, { useEffect, useState } from 'react'

import { ViewSwitcher } from './view-switcher'
import { getStartEndDateForProject, initTasks } from './helper'
import { Box, Button } from '@mui/material'
import { COLORS } from '@/constants/color.constants'
import { ViewMode, Task, Gantt } from '@/components/gantt_src'
import { EditTask } from '../task_info/EditTask'
import { useGantt } from '@/hooks/task-hooks/useGantt'
import { useUpdateTask } from '@/hooks/task-hooks/useUpdateTask'
import dayjs from 'dayjs'

export function GanttComponent({ board_id }: { board_id: number }) {
	const [sortType, setSort] = useState<'default' | 'columns'>('columns')
	const { tasks, setTasks, refetch } = useGantt({ board_id, sort_by: sortType })
	const { updateTask } = useUpdateTask()

	const [view, setView] = useState<ViewMode>(ViewMode.Day)
	const [isTask, setIsTask] = useState(false)
	const [selectedTaskId, setSelectedTaskId] = useState<number>()
	// const [tasks, setTasks] = React.useState<Task[]>(initTasks())

	let columnWidth = 65
	if (view === ViewMode.Year) {
		columnWidth = 350
	} else if (view === ViewMode.Month) {
		columnWidth = 300
	} else if (view === ViewMode.Week) {
		columnWidth = 250
	}

	useEffect(() => {
		refetch()
	}, [sortType])

	const handleClick = (task: Task) => {
		setIsTask(true)
		setSelectedTaskId(Number(task.id))
	}

	const handleDblClick = (task: Task) => {
		handleClick(task)
	}

	const handleTaskChange = (task: Task) => {
		if (!tasks) return
		console.log('start:' + task.start)
		console.log('end:' + task.end)
		let newTasks = tasks.map(t => (t.id === task.id ? task : t))
		if (task.project) {
			const [start, end] = getStartEndDateForProject(newTasks, task.project)
			const project =
				newTasks[newTasks.findIndex(t => t.id === (task.project as any))]
			if (
				project.start.getTime() !== start.getTime() ||
				project.end.getTime() !== end.getTime()
			) {
				const changedProject = { ...project, start, end }
				newTasks = newTasks.map(t =>
					t.id === (task.project as any) ? changedProject : t
				)
			}
		}
		updateTask({
			id: Number(task.id),
			data: {
				start: dayjs(task.start).format(),
				end: dayjs(task.end).format()
			}
		})
		setTasks(newTasks)
	}

	const handleExpanderClick = (task: Task) => {
		if (!tasks) return
		setTasks(tasks.map(t => (t.id === task.id ? task : t)))
		console.log('On expander click Id:' + task.id)
	}

	return (
		<Box
			className='Wrapper'
			p={4}
		>
			<Button
				onClick={() => {
					setSort(prev => (prev === 'columns' ? 'default' : 'columns'))
				}}
			>
				{sortType}
			</Button>
			<ViewSwitcher onViewModeChange={viewMode => setView(viewMode)} />
			{tasks && (
				<Gantt
					tasks={tasks}
					viewMode={view}
					onDateChange={handleTaskChange}
					onProgressChange={undefined}
					// onClick={handleClick}
					onDoubleClick={handleDblClick}
					onExpanderClick={handleExpanderClick}
					listCellWidth='155px'
					columnWidth={columnWidth}
					locale='ru'
					barBackgroundColor={COLORS.primary}
					todayColor={'#0000001F'}
					barBackgroundSelectedColor={COLORS.primary}
					projectBackgroundColor='#00000000'
					projectBackgroundSelectedColor='#00000000'
				/>
			)}

			{isTask && (
				<EditTask
					board_id={board_id}
					task_id={selectedTaskId as number}
					isModal={isTask}
					setIsModal={setIsTask}
				/>
			)}
		</Box>
	)
}

// const handleTaskDelete = (task: Task) => {
// 	const conf = window.confirm('Are you sure about ' + task.name + ' ?')
// 	if (conf) {
// 		setTasks(tasks.filter(t => t.id !== task.id))
// 	}
// 	return conf
// }

// const handleProgressChange = async (task: Task) => {
// 	setTasks(tasks.map(t => (t.id === task.id ? task : t)))
// 	console.log('On progress change Id:' + task.id)
// }

// const handleSelect = (task: Task, isSelected: boolean) => {
// 	console.log(task.name + ' has ' + (isSelected ? 'selected' : 'unselected'))
// }
