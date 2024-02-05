const { Router } = require("express")

const ContactController = require("../controllers/ContactController")

const contactRoutes = Router()

const contactController = new ContactController()

contactRoutes.post("/", contactController.contact)

module.exports = contactRoutes
