import { Task } from '@/components/gantt_src'

export function initTasks() {
	const currentDate = new Date()
	const tasks: Task[] = [
		{
			start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
			end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
			name: 'Some Project',
			id: 'ProjectSample',
			progress: 0,
			type: 'project',
			hideChildren: false
			// displayOrder: 1
		},
		{
			start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
			end: new Date(
				currentDate.getFullYear(),
				currentDate.getMonth(),
				2,
				12,
				28
			),
			name: 'Idea',
			id: 'Task 0',
			progress: 0,
			type: 'task',
			project: 'ProjectSample'
			// displayOrder: 2
		},

		{
			start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4),
			end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8, 0, 0),
			name: 'Discussion with team',
			id: 'Task 2',
			progress: 0,
			dependencies: ['Task 1'],
			type: 'task',
			project: 'ProjectSample'
			// displayOrder: 4
		},
		{
			start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
			end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 9, 0, 0),
			name: 'Developing',
			id: 'Task 3',
			progress: 0,
			dependencies: ['Task 2'],
			type: 'task',
			project: 'ProjectSample'
			// displayOrder: 5
		},
		{
			start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
			end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 10),
			name: 'Review',
			id: 'Task 4',
			type: 'task',
			progress: 0,
			dependencies: ['Task 2'],
			project: 'ProjectSample'
			// displayOrder: 6
		},
		{
			start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
			end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
			name: 'Release',
			id: 'Task 6',
			progress: 0,
			type: 'milestone',
			dependencies: ['Task 4'],
			project: 'ProjectSample'
			// displayOrder: 7
		},
		{
			start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
			end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4, 0, 0),
			name: 'Research',
			id: 'Task 1',
			progress: 0,
			dependencies: ['Task 0'],
			type: 'task',
			project: 'ProjectSample'
			// displayOrder: 3
		},
		{
			start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 18),
			end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 19),
			name: 'Party Time',
			id: 'Task 9',
			progress: 0,
			isDisabled: true,
			type: 'task'
		},
		{
			start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
			end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
			name: 'Project 2',
			id: 'ProjectSample 2',
			progress: 0,
			type: 'project',
			hideChildren: false
			// displayOrder: 1
		},
		{
			start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
			end: new Date(
				currentDate.getFullYear(),
				currentDate.getMonth(),
				2,
				12,
				28
			),
			name: 'Idea 2',
			id: 'Task test',
			progress: 0,
			// dependencies: ['Task 1'],
			type: 'task',
			project: 'ProjectSample 2'
			// displayOrder: 2
		}
	]
	return tasks
}

export function getStartEndDateForProject(tasks: Task[], projectId: string) {
	const projectTasks = tasks.filter(t => t.project === projectId)
	let start = projectTasks[0].start
	let end = projectTasks[0].end

	for (let i = 0; i < projectTasks.length; i++) {
		const task = projectTasks[i]
		if (start.getTime() > task.start.getTime()) {
			start = task.start
		}
		if (end.getTime() < task.end.getTime()) {
			end = task.end
		}
	}
	return [start, end]
}
