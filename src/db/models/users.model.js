const { Model } = require('objection');
const Role = require('./roles.model')

class Users extends Model {
  static get tableName() {
    return 'users';
  }

  static get relationMappings() {
    return (
      {
        relation: Model.BelongsToOneRelation,
        modelClass: Role,
        join: {
          from: 'users.role_id',
          to: 'role.id'
        }
      }
    )
  };
}
module.exports = Users;
