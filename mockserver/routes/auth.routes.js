const Router = require('express')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const { forgetPasswordMailer } = require('../mailService')
const router = new Router()

const generateToken = (id, email, expiresTime) => {
	// return jwt.sign({ userId: id }, process.env.jwtSecret)
	return jwt.sign({ userId: id, email }, process.env.jwtSecret, {
		expiresIn: expiresTime
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
			accessToken: generateToken(newUser.id, newUser.email, '24h'),
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
			accessToken: generateToken(user.id, user.email, '24h'),
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

router.put('/forget', async (req, res) => {
	try {
		const { email } = req.body
		const user = users.find(val => val.email === email)
		if (!user) {
			return res.status(400).json({
				status: 'failure',
				message: 'Пользователь не найден' // login
			})
		}

		const token = generateToken(user.id, user.email, '15min')

		forgetPasswordMailer(
			email,
			`${process.env.CLIENT_URL}/auth/recovery?code=${token}`
		)

		return res.status(201).json({
			status: 'success',
			message: 'Письмо отправлено на почту'
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({
			status: 'failure',
			message: 'Something went wrong, try again'
		})
	}
})

router.put('/update', async (req, res) => {
	try {
		const { password, token } = req.body

		if (!token) {
			return res.status(401).json({ message: 'Время и Стекло' })
		}

		const decoded = jwt.verify(token, process.env.jwtSecret)
		if (!decoded) res.status(401).json({ message: 'Время и Стекло' })

		index = users.findIndex(u => u.email === decoded.email)
		users[index].password = password

		return res.status(201).json({
			status: 'success',
			message: 'Пароль пользователя успешно изменен'
		})
	} catch (error) {
		console.log(error)
		res.status(500).json({
			status: 'failure',
			message: 'Something went wrong, try again'
		})
	}
})

router.post('/logout', async (req, res) => {
	try {
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
