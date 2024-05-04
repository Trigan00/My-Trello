const Router = require('express')
const router = new Router()

let boards = [
	{ id: 0, title: 'Доска 1' },
	{ id: 1, title: 'Доска 2' },
	{ id: 2, title: 'Доска 3' },
	{ id: 3, title: 'Доска 4' }
	// { id: 4, title: 'Доска 1' },
	// { id: 5, title: 'Доска 2' },
	// { id: 6, title: 'Доска 3' },
	// { id: 7, title: 'Доска 4' },
	// { id: 8, title: 'Доска 4' },
	// { id: 9, title: 'Доска 4' }
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

router.patch('/:id', async (req, res) => {
	try {
		const id = req.params.id
		const { name } = req.body
		const board = boards.find(board => board.id == id)
		board.title = name
		return res.status(201).json({ message: 'Название успешно изменено' })
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
		boards = boards.filter(value => value.id != id)
		return res.status(201).json({ message: 'Доска успешно удалена' })
	} catch (error) {
		console.log(error)
		res.status(500).json({
			status: 'failure',
			message: 'Something went wrong, try again'
		})
	}
})

module.exports = router
