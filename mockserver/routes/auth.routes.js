const Router = require('express')
const jwt = require('jsonwebtoken')
const router = new Router()

const generateToken = id => {
	// return jwt.sign({ userId: id }, process.env.jwtSecret)
	return jwt.sign({ userId: id }, 'process.env.jwtSecret', {
		expiresIn: '24h'
	})
}

const users = []

// /api/auth/register
router.post('/register', async (req, res) => {
	try {
		const { email, password } = req.body
		const candidate = users.find(user => user.email === email)

		if (candidate) {
			return res
				.status(400)
				.json({ status: 'failure', message: 'User already exists' })
		}

		newUser = {
			id: users.length,
			email,
			password
		}
		users.push(newUser)

		console.log('register: ' + JSON.stringify(users))
		return res.status(201).json({
			accessToken: generateToken(newUser.id),
			user: {
				id: newUser.id,
				email: newUser.email
			}
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({
			status: 'failure',
			message: 'Something went wrong, try again'
		})
	}
})

// /api/auth/login
router.post('/login', async (req, res) => {
	try {
		const { email, password } = req.body
		// const user = await pool.query("SELECT * FROM person WHERE email = $1", [
		//   email,
		// ]);
		const user = users.find(val => val.email === email)
		if (!user) {
			return res.status(400).json({
				status: 'failure',
				message: 'Invalid login or password, try again' // login
			})
		}

		const isMatch = password === user.password
		if (!isMatch) {
			return res.status(400).json({
				status: 'failure',
				message: 'Invalid login or password, try again' // password
			})
		}

		console.log('login: ' + JSON.stringify(users))
		return res.status(200).json({
			accessToken: generateToken(newUser.id),
			user: {
				id: newUser.id,
				email: newUser.email
			}
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({
			status: 'failure',
			message: 'Something went wrong, try again'
		})
	}
})

module.exports = router
