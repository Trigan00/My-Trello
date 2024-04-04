const Router = require('express')
const router = new Router()

const workSpaces = [
	{ id: 0, title: 'Пространство 1' },
	{ id: 1, title: 'Пространство 2' },
	{ id: 2, title: 'Пространство 3' }
]

router.get('/', async (req, res) => {
	try {
		return res.status(201).json(workSpaces)
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
		workSpaces.push({
			id: workSpaces.length,
			title
		})
		console.log(workSpaces)
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
