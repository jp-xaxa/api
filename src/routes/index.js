const { Router } = require("express")

const usersRouter = require("./users.routes")
const notesRouter = require("./notes.routes")
const tagsRouter = require("./tags.routes")
const contactRouter = require("./contact.routes")
const sessionsRouter = require("./sessions.routes")

const routes = Router()
routes.use("/users", usersRouter)
routes.use("/sessions", sessionsRouter)
routes.use("/notes", notesRouter)
routes.use("/tags", tagsRouter)
routes.use("/contact", contactRouter)

module.exports = routes
