const Router = require('express')
const router = new Router()

let workSpaces = [
	{ id: 0, title: 'Пространство 1' },
	{ id: 1, title: 'Пространство 2' },
	{ id: 2, title: 'Пространство 3' }
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

router.patch('/update-name/:id', async (req, res) => {
	try {
		const id = req.params.id
		const { title } = req.body
		const ws = workSpaces.find(value => value.id == id)
		ws.title = title
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

router.get('/users/:id', async (req, res) => {
	try {
		const id = req.params.id
		return res.status(201).json(workspaceUsers)
	} catch (error) {
		console.log(error)
		res.status(500).json({
			status: 'failure',
			message: 'Something went wrong, try again'
		})
	}
})

router.delete('/delete-user/:id', async (req, res) => {
	try {
		const id = req.params.id
		workspaceUsers = workspaceUsers.filter(value => value.id != id)
		console.log(workspaceUsers)
		return res.status(201).json(true)
	} catch (error) {
		console.log(error)
		res.status(500).json({
			status: 'failure',
			message: 'Something went wrong, try again'
		})
	}
})

router.get('/invite-link/:id', async (req, res) => {
	try {
		const id = req.params.id
		return res.status(201).json({
			inviteLink:
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
		return res.status(201).json(true)
	} catch (error) {
		console.log(error)
		res.status(500).json({
			status: 'failure',
			message: 'Something went wrong, try again'
		})
	}
})

router.patch('/update-role/:id', async (req, res) => {
	try {
		const ws_id = req.params.id
		const { user_id, role } = req.body
		const user = workspaceUsers.find(value => value.id == user_id)
		user.role = role
		console.log(workspaceUsers)
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
