const nodemailer = require('nodemailer')
require('dotenv').config()

const data = {
	host: process.env.SMTP_HOST,
	port: process.env.SMTP_PORT,
	secure: true,
	auth: {
		user: process.env.SMTP_USER,
		pass: process.env.SMTP_PASSWORD
	}
}
const transporter = nodemailer.createTransport(data)

const forgetPasswordMailer = (to, link) => {
	transporter.sendMail(
		{
			from: 'My Trello <mytest_90@mail.ru>',
			to,
			subject: 'Password Reset Request on ' + process.env.API_URL,
			text: '',
			html: `
              <div>
                  <h1>Please click on this link to reset your password</h1>
                  <a href="${link}">${link}</a>
              </div>
          `
		},
		(error, info) => {
			if (error) {
				console.log('Something went wrong', error)
			}
			if (info) {
				console.log('Password Reset mail send successfully')
			}
		}
	)
}

module.exports = { forgetPasswordMailer }
