const express = require('express')
const bodyParser = require('body-parser')
const { authRouter } = require('./routes')
const cors = require('cors')
require('dotenv').config()
const authMiddleware = require('./middleware/auth.middleware')

const PORT = process.env.PORT || 4200
const app = express()

app.use(bodyParser.json())
app.use(
	bodyParser.urlencoded({
		extended: true
	})
)
app.use(
	cors({
		credentials: true,
		origin: ['http://localhost:3000']
	})
)

app.use('/api/auth', authRouter)

app.get('/', (req, res) => {
	res.status(200).json('Server is working')
})

app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT))
