const { Model } = require('objection');

class Courses extends Model {
  static get tableName() {
    return 'courses';
  }
}
module.exports = Courses;
