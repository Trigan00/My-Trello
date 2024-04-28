const Router = require('express')
const router = new Router()

let workSpaces = [
	{ id: 0, name: 'Пространство 1' },
	{ id: 1, name: 'Пространство 2' },
	{ id: 2, name: 'Пространство 3' }
]

function createData(id, username, email, role) {
	return { id, username, email, role }
}

let workspaceUsers = [
	createData(0, 'Ayaz', 'test1@mail.ru', 'admin'),
	createData(1, 'Niyaz', 'test2@mail.ru', 'observer'),
	createData(2, 'Ivan', 'test3@mail.ru', 'employee')
]

router.get('/', async (req, res) => {
	try {
		return res.status(201).json({ workspaces: workSpaces })
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
		workSpaces.push({
			id: workSpaces.length,
			name
		})
		console.log(workSpaces)
		return res.status(201).json({ message: 'РП успешно создано' })
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
		const ws = workSpaces.find(value => value.id == id)
		ws.name = name
		console.log(workSpaces)
		return res.status(201).json({ message: 'Имя успешно изменено' })
	} catch (error) {
		console.log(error)
		res.status(500).json({
			status: 'failure',
			message: 'Something went wrong, try again'
		})
	}
})

router.get('/members/:id', async (req, res) => {
	try {
		const id = req.params.id
		return res.status(201).json({ members: workspaceUsers })
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
		const { ws_id } = req.body
		workspaceUsers = workspaceUsers.filter(value => value.id != user_id)
		console.log(workspaceUsers)
		return res.status(201).json({ message: 'Пользователь удален' })
	} catch (error) {
		console.log(error)
		res.status(500).json({
			status: 'failure',
			message: 'Something went wrong, try again'
		})
	}
})

router.post('/invite', async (req, res) => {
	try {
		const { ws_id } = req.body
		return res.status(201).json({
			invite_token:
				'https://docs.google.com/document/d/1MNLERJvitk9iWIVo-J9dAIdlAOC2CXB6j2SS0cPaUvM/edit'
		})
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
		workSpaces = workSpaces.filter(value => value.id != id)
		console.log(workSpaces)
		return res.status(201).json({ message: 'РП успешно удалено' })
	} catch (error) {
		console.log(error)
		res.status(500).json({
			status: 'failure',
			message: 'Something went wrong, try again'
		})
	}
})

router.patch('/members/:id', async (req, res) => {
	try {
		const user_id = req.params.id
		const { ws_id, role } = req.body
		const user = workspaceUsers.find(value => value.id == user_id)
		user.role = role
		console.log(workspaceUsers)
		return res.status(201).json({ message: 'Роль успешно изменена' })
	} catch (error) {
		console.log(error)
		res.status(500).json({
			status: 'failure',
			message: 'Something went wrong, try again'
		})
	}
})

module.exports = router
