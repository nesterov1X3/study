const Users = require('../db/models/users.model');
const { NotFound } = require('../helpers/errors/error')

const getUsers = async (params, query) => {
  const { page = 0, limit = 5 } = query;
  const { id } = params;
  if (id) {
    const userById = await Users.query().findById(id);
    if (!userById) {
      throw new NotFound()
    }
    return userById;
  }
  const usersList = await Users.query()
    .page(page, limit);

  if (!usersList) {
    throw new NotFound('Users not Found')
  }
  return usersList;
}

const deleteUser = async (params) => {
  const { id } = params;
  const userById = await Users.query().deleteById(id);
  if (!userById) {
    throw new NotFound()
  }
}

const updateUser = async (body) => {
  const { id, name, surname, mail, role_id } = body;
  const person = {
    name,
    surname,
    mail,
    role_id
  }
  const updatedUser = await Users.query().update(person).where('id', id);
  if (!updatedUser) {
    throw new NotFound()
  }
  return { id, name, surname, mail, role_id };
}

module.exports = { getUsers, deleteUser, updateUser };
