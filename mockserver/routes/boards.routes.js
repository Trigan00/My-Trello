const Router = require('express')
const router = new Router()

const boards = [
	{ id: 0, title: 'Доска 1' },
	{ id: 1, title: 'Доска 2' },
	{ id: 2, title: 'Доска 3' }
]

router.get('/', async (req, res) => {
	try {
		return res.status(201).json(boards)
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
		const { title } = req.body
		boards.push({
			id: boards.length,
			title
		})
		console.log(boards)
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
