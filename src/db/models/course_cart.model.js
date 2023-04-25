const { Model } = require('objection');
const Users = require('./users.model')
const Courses = require('./courses.model');

class CourseCart extends Model {
  static get tableName() {
    return 'course_cart';
  }

  static get idColumn() {
    return ['user_id', 'course_id'];
  }

  static get relationMappings() {
    return (
      {
        user: {
          relation: Model.HasManyRelation,
          modelClass: Users,
          join: {
            from: 'course_cart.user_id',
            to: 'users.id'
          }
        },
        course: {
          relation: Model.HasManyRelation,
          modelClass: Courses,
          join: {
            from: 'course_cart.course_id',
            to: 'courses.id'
          }
        }
      }
    )
  };
}
module.exports = CourseCart;
