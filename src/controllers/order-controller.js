const CourseCart = require('../db/models/course_cart.model');
const Order = require('../db/models/order.model');

const { NotFound } = require('../helpers/errors/error');

const getOrder = async (params) => {
  const { user_id } = params;
  const courseCart = await CourseCart.query()
    .select('*')
    .innerJoin('courses', 'course_cart.course_id', 'courses.id')
    .where({ user_id })
  if (courseCart.length === 0) {
    throw new NotFound('Course not found')
  }
  const orderPrice = courseCart.reduce((acc, { price }) => acc + price, 0)
  const order = {
    date: Date.now(),
    order_price: orderPrice,
    user_id
  }
  return order;
}

const createOrder = async (body) => {
  const { user_id } = body

  const courseCart = await CourseCart.query()
    .select('*')
    .innerJoin('courses', 'course_cart.course_id', 'courses.id')
    .where({ user_id })

  const orderPrice = courseCart.reduce((acc, { price }) => acc + price, 0)

  const order = await Order.query().insertGraph(
    {
      '#id': 'id', date: new Date(), order_price: orderPrice, user_id,
      course_order: courseCart.map(item => (
        {
          order_id: '#ref(order.id)', course_id: item.course_id
        }
      ))
    }
    , { allowRefs: true })
  await CourseCart.query().delete().where({ user_id })
  return order;
}

module.exports = { getOrder, createOrder };
