'use client'

import React, { useState } from 'react'

import { ViewSwitcher } from './view-switcher'
import { getStartEndDateForProject, initTasks } from './helper'
import { Box } from '@mui/material'
import { COLORS } from '@/constants/color.constants'
import { ViewMode, Task, Gantt } from '@/components/gantt_src'
import { EditTask } from '../task_info/EditTask'

export function GanttComponent({ board_id }: { board_id: number }) {
	const [view, setView] = useState<ViewMode>(ViewMode.Day)
	const [isTask, setIsTask] = useState(false)
	const [selectedTaskId, setSelectedTaskId] = useState<number>()
	const [tasks, setTasks] = React.useState<Task[]>(initTasks())

	let columnWidth = 65
	if (view === ViewMode.Year) {
		columnWidth = 350
	} else if (view === ViewMode.Month) {
		columnWidth = 300
	} else if (view === ViewMode.Week) {
		columnWidth = 250
	}

	const handleClick = (task: Task) => {
		setIsTask(true)
		setSelectedTaskId(Number(task.id))
	}

	const handleDblClick = (task: Task) => {
		handleClick(task)
	}

	const handleTaskChange = (task: Task) => {
		console.log('start:' + task.start)
		console.log('end:' + task.end)
		let newTasks = tasks.map(t => (t.id === task.id ? task : t))
		// if (task.project) {
		// 	const [start, end] = getStartEndDateForProject(newTasks, task.project)
		// 	const project =
		// 		newTasks[newTasks.findIndex(t => t.id === (task.project as any))]
		// 	if (
		// 		project.start.getTime() !== start.getTime() ||
		// 		project.end.getTime() !== end.getTime()
		// 	) {
		// 		const changedProject = { ...project, start, end }
		// 		newTasks = newTasks.map(t =>
		// 			t.id === (task.project as any) ? changedProject : t
		// 		)
		// 	}
		// }
		setTasks(newTasks)
	}

	return (
		<Box
			className='Wrapper'
			p={4}
		>
			<ViewSwitcher onViewModeChange={viewMode => setView(viewMode)} />
			<Gantt
				tasks={tasks}
				viewMode={view}
				onDateChange={handleTaskChange}
				onProgressChange={undefined}
				// onClick={handleClick}
				onDoubleClick={handleDblClick}
				listCellWidth='155px'
				columnWidth={columnWidth}
				locale='ru'
				barBackgroundColor={COLORS.primary}
				todayColor={'#0000001F'}
				barBackgroundSelectedColor={COLORS.primary}
			/>
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

// const handleExpanderClick = (task: Task) => {
// 	setTasks(tasks.map(t => (t.id === task.id ? task : t)))
// 	console.log('On expander click Id:' + task.id)
// }
