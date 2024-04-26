const Router = require('express')
const router = new Router()

const tasks = [
	{ id: 1, isCompleted: false, name: 'task 1', status: 0 },
	{ id: 2, isCompleted: true, name: 'task 2', status: 1 },
	{
		id: 3,
		isCompleted: false,
		name: 'Mega huge task name Lorem ipsum dolor sit',
		status: 2
	},
	{ id: 4, isCompleted: true, name: 'task 4', status: 3 },
	{ id: 5, isCompleted: false, name: 'task 5', status: 3 }
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

router.post('/add', async (req, res) => {
	try {
		// const { title } = req.body
		// boards.push({
		// 	id: boards.length,
		// 	title
		// })
		// console.log(boards)
		return res.status(201).json(true)
	} catch (error) {
		console.log(error)
		res.status(500).json({
			status: 'failure',
			message: 'Something went wrong, try again'
		})
	}
})

module.exports = router
