const { InvalidUserPassword, InvalidUSerMail } = require('./errors/error')

class Validation {
  static validateMail(string) {
    if (!string)
      throw new InvalidUSerMail("Mail field can't be empty")

    if (!string.toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ))
      throw new InvalidUSerMail('User have invalid mail')

  }
  static validatePassword(string) {
    if (!string)
      throw new InvalidUserPassword("Password field can't be empty")

    if (string.length < 6)
      throw new InvalidUserPassword('Password should be longer than 6 symbols')

    if (string.length > 30)
      throw new InvalidUserPassword('Password should be less than 30 symbols')

    if (!string.match(/(?=.*\d)/))
      throw new InvalidUserPassword('Password should have Numeric Character')

    if (!string.match(/(?=.*[A-Z])/))
      throw new InvalidUserPassword('Password should have Uppercase Character')

    if (!string.match(/(?=.*[^\dA-Za-z])/))
      throw new InvalidUserPassword('Password should have Special Character')
  }
}
module.exports = { Validation }