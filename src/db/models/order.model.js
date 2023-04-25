const { Model } = require('objection');
const Courses = require('./courses.model');
const Users = require('./users.model')
const CourseOrder = require('./course_order.model')

class Order extends Model {
  static get tableName() {
    return 'order';
  }

  static get idColumn() {
    return 'id';
  }

  static get relationMappings() {
    return (
      {
        order: {
          relation: Model.BelongsToOneRelation,
          modelClass: Users,
          join: {
            from: 'order.user_id',
            to: 'user.id'
          }
        },
        courses: {
          relation: Model.ManyToManyRelation,
          modelClass: Courses,
          join: {
            from: 'order.id',
            through: {
              from: 'course_order.order_id',
              to: 'course_order.course_id'
            },
            to: 'courses.id'
          }
        },
        course_order: {
          relation: Model.HasManyRelation,
          modelClass: CourseOrder,
          join: {
            from: 'order.id',
            to: 'course_order.order_id'
          }
        }
      }
    )
  };
}
module.exports = Order;
