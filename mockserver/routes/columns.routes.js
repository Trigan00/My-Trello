const Router = require('express')
const router = new Router()

let COLUMNS = [
	{
		name: 'Планируется',
		id: 0
	},
	{
		name: 'В работе',
		id: 1
	},
	{
		name: 'На проверке',
		id: 2
	},
	{
		name: 'Сделано',
		id: 3
	}
]

router.get('/:id', async (req, res) => {
	try {
		const id = req.params.id
		return res.status(201).json({ columns: COLUMNS })
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
		const { name } = req.body
		COLUMNS.push({
			id: COLUMNS.length,
			name: name
		})
		return res.status(201).json({ message: 'Колонка успешно добавлена' })
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
		const col = COLUMNS.find(col => col.id == id)
		col.name = name
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
		COLUMNS = COLUMNS.filter(value => value.id != id)
		return res.status(201).json({ message: 'Колонка успешно удалена' })
	} catch (error) {
		console.log(error)
		res.status(500).json({
			status: 'failure',
			message: 'Something went wrong, try again'
		})
	}
})

module.exports = router
