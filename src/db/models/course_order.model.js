const { Model } = require('objection');
const Order = require('./order.model')
const Course = require('./courses.model')

class CourseOrder extends Model {
  static get tableName() {
    return 'course_order';
  }

  static get relationMappings() {
    return (
      {
        order: {
          relation: Model.HasManyRelation,
          modelClass: Order,
          join: {
            from: 'course_order.order_id',
            to: 'order.id'
          }
        },
        courses: {
          relation: Model.HasManyRelation,
          modelClass: Course,
          join: {
            from: 'course_order.course_id',
            to: 'courses.id'
          }
        }
      }
    )
  };
}
module.exports = CourseOrder;