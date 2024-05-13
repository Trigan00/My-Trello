const Router = require('express')
let { board_members } = require('./boards.routes')
const router = new Router()

let tasks = [
	{ task_id: 0, name: 'task 1', column_id: 0 }
	// { task_id: 1, name: 'task 2', column_id: 1 },
	// {
	// 	task_id: 2,
	// 	name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	// 	column_id: 0
	// }
	// {
	// 	task_id: 4,
	// 	name: 'Diam in arcu cursus euismod quis viverra nibh cras',
	// 	column_id: 1
	// },
	// {
	// 	task_id: 5,
	// 	name: 'Consequat ac felis donec',
	// 	column_id: 2
	// },
	// {
	// 	task_id: 6,
	// 	name: 'Adipiscing vitae proin sagittis',
	// 	column_id: 2
	// },
	// {
	// 	task_id: 7,
	// 	name: 'Ornare arcu odio ut sem nulla pharetra',
	// 	column_id: 3
	// },
	// {
	// 	task_id: 8,
	// 	name: 'Dui ut ornare lectus sit amet',
	// 	column_id: 0
	// },
	// {
	// 	task_id: 9,
	// 	name: 'Dictum sit amet justo donec enim',
	// 	column_id: 2
	// },
	// {
	// 	task_id: 10,
	// 	name: 'Mega huge task name Lorem ipsum dolor sit',
	// 	column_id: 2
	// },
	// { task_id: 11, name: 'task 4', column_id: 3 },
	// { task_id: 12, name: 'task 5', column_id: 3 }
]

function createData(id, username, email) {
	return { id, username, email }
}

let task_members = [
	createData(0, 'Ayaz', 'test1@mail.ru'),
	createData(1, 'Niyaz', 'test2@mail.ru')
]

router.get('/members', async (req, res) => {
	try {
		return res.status(201).json({ members: task_members })
	} catch (error) {
		console.log(error)
		res.status(500).json({
			status: 'failure',
			message: 'Something went wrong, try again'
		})
	}
})

router.get('/', async (req, res) => {
	try {
		return res.status(201).json({ tasks })
	} catch (error) {
		console.log(error)
		res.status(500).json({
			status: 'failure',
			message: 'Something went wrong, try again'
		})
	}
})

router.get('/:id', async (req, res) => {
	try {
		const id = req.params.id
		console.log(JSON.stringify(tasks.find(task => task.task_id == id)))
		return res.status(201).json(tasks.find(task => task.task_id == id))
	} catch (error) {
		console.log(error)
		res.status(500).json({
			status: 'failure',
			message: 'Something went wrong, try again'
		})
	}
})

router.post('/', async (req, res) => {
	try {
		const { name, column_id, description, start_time, deadline } = req.body
		tasks.push({
			task_id: tasks.length,
			name,
			description: description || null,
			column_id,
			start_time: start_time || null,
			deadline: deadline || null
		})
		console.log('New task: ' + JSON.stringify(tasks[tasks.length - 1]))
		return res.status(201).json(true)
	} catch (error) {
		console.log(error)
		res.status(500).json({
			status: 'failure',
			message: 'Something went wrong, try again'
		})
	}
})

router.patch('/:id', async (req, res) => {
	try {
		const id = req.params.id
		const { name, column_id, description, start_time, deadline } = req.body
		const task = tasks.find(value => value.task_id == id)
		if (name) task.name = name
		if (description) task.description = description
		if (start_time) task.start_time = start_time
		if (deadline) task.deadline = deadline
		if (column_id == 0 || column_id) task.column_id = column_id
		// console.log('tasks: ' + JSON.stringify(tasks))
		return res.status(201).json({ message: 'Задача успешно изменена' })
	} catch (error) {
		console.log(error)
		res.status(500).json({
			status: 'failure',
			message: 'Something went wrong, try again'
		})
	}
})

router.delete('/:id', async (req, res) => {
	try {
		const id = req.params.id
		tasks = tasks.filter(value => value.task_id != id)
		return res.status(201).json({ message: 'Задача успешно удалена' })
	} catch (error) {
		console.log(error)
		res.status(500).json({
			status: 'failure',
			message: 'Something went wrong, try again'
		})
	}
})

router.post('/members', async (req, res) => {
	try {
		const { task_id, user_id } = req.body
		const user = board_members.find(u => u.id == user_id)
		task_members.push(createData(user.id, user.username, user.email))
		return res.status(201).json({ message: 'Участник добавлен' })
	} catch (error) {
		console.log(error)
		res.status(500).json({
			status: 'failure',
			message: 'Something went wrong, try again'
		})
	}
})

router.delete('/members/:id', async (req, res) => {
	try {
		const user_id = req.params.id
		task_members = task_members.filter(value => value.id != user_id)
		return res.status(201).json({ message: 'Участник удален' })
	} catch (error) {
		console.log(error)
		res.status(500).json({
			status: 'failure',
			message: 'Something went wrong, try again'
		})
	}
})

module.exports = router
