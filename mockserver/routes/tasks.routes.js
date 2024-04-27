const Router = require('express')
const router = new Router()

const tasks = [
	{ id: 1, name: 'task 1', column_id: 0 },
	{ id: 99, name: 'task 2', column_id: 1 },
	{
		id: 3,
		name: 'Mega huge task name Lorem ipsum dolor sit',
		column_id: 2
	},
	{ id: 4, name: 'task 4', column_id: 3 },
	{ id: 5, name: 'task 5', column_id: 3 }
]

router.get('/', async (req, res) => {
	try {
		return res.status(201).json(tasks)
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
		const { name, column_id } = req.body
		tasks.push({
			id: tasks.length,
			name,
			column_id
		})
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
		const { name, column_id } = req.body
		const task = tasks.find(value => value.id == id)
		if (name) task.name = name
		if (column_id == 0 || column_id) task.column_id = column_id
		console.log('tasks: ' + JSON.stringify(tasks))
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
		tasks = tasks.filter(value => value.id != id)
		return res.status(201).json({ message: 'Задача успешно удалена' })
	} catch (error) {
		console.log(error)
		res.status(500).json({
			status: 'failure',
			message: 'Something went wrong, try again'
		})
	}
})

module.exports = router
