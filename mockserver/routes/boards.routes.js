const Router = require('express')
const router = new Router()
let { workspaceUsers } = require('./workspaces.routes')

let boards = [
	{ id: 0, name: 'Доска 1' },
	{ id: 1, name: 'Доска 2' },
	{ id: 2, name: 'Доска 3' },
	{ id: 3, name: 'Доска 4' }
]

function createData(id, username, email) {
	return { id, username, email }
}

let board_members = [
	createData(0, 'Ayaz', 'test1@mail.ru'),
	createData(1, 'Niyaz', 'test2@mail.ru'),
	createData(2, 'Ivan', 'test3@mail.ru')
]

router.get('/', async (req, res) => {
	try {
		return res.status(201).json({ boards })
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
		boards.push({
			id: boards.length,
			name
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
		board.name = name
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

router.get('/members', async (req, res) => {
	try {
		return res.status(201).json({ members: board_members })
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
		const { board_id, user_id } = req.body
		const user = workspaceUsers.find(u => u.id == user_id)
		board_members.push(createData(user.id, user.username, user.email))
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
		board_members = board_members.filter(value => value.id != user_id)
		return res.status(201).json({ message: 'Участник удален' })
	} catch (error) {
		console.log(error)
		res.status(500).json({
			status: 'failure',
			message: 'Something went wrong, try again'
		})
	}
})

module.exports = { router, board_members }
