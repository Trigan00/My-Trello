const Router = require('express')
const router = new Router()

let COLUMNS = [
	{
		label: 'Планируется',
		id: 0
	},
	{
		label: 'В работе',
		id: 1
	},
	{
		label: 'На проверке',
		id: 2
	},
	{
		label: 'Сделано',
		id: 3
	}
]

router.get('/:id', async (req, res) => {
	try {
		const id = req.params.id
		return res.status(201).json(COLUMNS)
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
			label: name
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
		col.label = name
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
