const Users = require('../db/models/users.model');
const bcrypt = require("bcrypt");
const { ConflictUserMail, InvalidUserPassword, NotFound } = require('../helpers/errors/error')
const { Validation } = require('../helpers/validate')

const registration = async (body) => {
  const { id, mail, name, surname, password, role_id } = body;
  Validation.validateMail(mail);
  Validation.validatePassword(password);

  const condidate = await Users.query().findOne({ mail });
  if (condidate) {
    throw new ConflictUserMail('User with the same name already exists')
  }
  const salt = bcrypt.genSaltSync(7);
  const hashPassword = bcrypt.hashSync(password, salt);
  await Users.query().insert({
    id,
    mail,
    name,
    surname,
    password: hashPassword,
    role_id
  })

  return { id, mail, name, surname };
}

const login = async (body) => {
  const { mail, password } = body;
  Validation.validateMail(mail);
  Validation.validatePassword(password);

  const user = await Users.query().findOne({ mail });
  if (!user) {
    throw new NotFound('User Not Found')
  }

  const validPassword = bcrypt.compareSync(password, user.password);

  if (!validPassword) {
    throw new InvalidUserPassword('Wrong Password')
  }
  return { id: user.id, mail };
}

module.exports = { registration, login };
