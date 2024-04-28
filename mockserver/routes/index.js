const authRouter = require('./auth.routes')
const workspacesRouter = require('./workspaces.routes')
const boardsRouter = require('./boards.routes')
const tasksRouter = require('./tasks.routes')

module.exports = {
	authRouter,
	workspacesRouter,
	boardsRouter,
	tasksRouter
}
