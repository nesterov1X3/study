const CourseCart = require('../db/models/course_cart.model');

const { NotFound, ConflictCourseCart } = require('../helpers/errors/error');

const getCourseCart = async (params) => {

  const courseCart = await CourseCart.query()
    .select('*')
    .innerJoin('courses', 'course_cart.course_id', 'courses.id')
    .where({ user_id: params.user_id })
  if (courseCart.length === 0) {
    throw new NotFound('Course not found')
  }
  return courseCart;
}

const createCourseCart = async (body) => {
  const { user_id, course_id } = body;
  const existingCourseCart = await CourseCart.query().findOne({ user_id, course_id })
  if (existingCourseCart) {
    throw new ConflictCourseCart()
  }
  const courseCart = await CourseCart.query().insert({
    user_id,
    course_id,
  })

  return courseCart;
}

const deleteCourseCart = async (params) => {
  const courseCartById = await CourseCart.query().delete().where({ user_id: params.user_id })
  if (!courseCartById) {
    throw new NotFound('Course not found')
  }
}
module.exports = { getCourseCart, createCourseCart, deleteCourseCart };
