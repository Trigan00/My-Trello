const authRouter = require('./auth.routes')
const workspacesRouter = require('./workspaces.routes')
const boardsRouter = require('./boards.routes')
const tasksRouter = require('./tasks.routes')
const columnsRouter = require('./columns.routes')

module.exports = {
	authRouter,
	workspacesRouter,
	boardsRouter,
	tasksRouter,
	columnsRouter
}
