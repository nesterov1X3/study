const Courses = require('../db/models/courses.model');
const { NotFound, ConflictCourse, ConflictCourseName } = require('../helpers/errors/error');

const getCourse = async (params, query) => {
  const { page = 0, limit = 5 } = query;
  const { id } = params;
  if (id) {
    const courseById = await Courses.query().findById(id)

    if (!courseById) {
      throw new NotFound('Course not found')
    }
    return courseById;
  }
  const coursesList = await Courses.query()
    .page(page, limit);
  if (!coursesList) {
    throw new NotFound('Courses not found')
  }
  return coursesList;
}

const createCourse = async (body) => {
  const { name, description, price, link, reserved } = body;

  const featureCourse = await Courses.query().findOne({ name });
  if (featureCourse) {
    throw new ConflictCourse()
  }
  const course = await Courses.query().insert({
    name,
    description,
    price,
    link,
    reserved
  })

  return course;
}

const deleteCourse = async (params) => {
  const { id } = params;

  const courseById = await Courses.query().deleteById(id)
  if (!courseById) {
    throw new NotFound('Course not found')
  }
}

const updateCourse = async (body) => {
  const { id, name, description, price, link, reserved } = body;
  const courseByName = await Courses.query().findOne({ name })

  if (courseByName) {
    throw new ConflictCourseName()
  }

  const updatedCourse = await Courses.query().update(body).where('id', id);
  if (!updatedCourse) {
    throw new NotFound('Course not found')
  }
  return { id, name, description, price, link, reserved };
}

module.exports = { getCourse, createCourse, deleteCourse, updateCourse };
