const AppError = require("../utils/AppError")

class ContactController {
  contact(request, response) {
    const { name, email, text } = request.body

    if (!name) {
      throw new AppError("O nome é obrigatorio!")
    } else if (!email) {
      throw new AppError("O e-mail é obrigatoria!")
    } else if (!text) {
      throw new AppError("Esqueceu a mensagem!")
    }

    response.json({ name, email, text })
  }
}

module.exports = ContactController
