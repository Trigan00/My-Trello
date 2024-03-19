const jwt = require('jsonwebtoken')

class Middleware {
	decodeToken(req, res, next) {
		if (req.method === 'OPTIONS') return next()

		try {
			const token = req.headers.authorization.split(' ')[1] // "Bearer TOKEN"
			if (!token) {
				return res.status(401).json({ message: 'No authorization' })
			}

			const decoded = jwt.verify(token, process.env.jwtSecret)
			req.user = decoded
			next()
		} catch (e) {
			res.status(401).json({ message: 'No authorization' })
		}
	}
}

module.exports = new Middleware()
