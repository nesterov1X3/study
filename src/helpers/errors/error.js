
class BadRequest extends Error {
  constructor(message) {
    super(message);
    this.status = 400
    this.name = 'BadRequest'
    this.message = message || "Bad Request"
  }
}

class Unauthorized extends Error {
  constructor(message) {
    super(message);
    this.status = 401
    this.name = 'Unauthorized'
    this.message = message || "User Unauthorized"
  }
}

class Forbidden extends Error {
  constructor(message) {
    super(message);
    this.status = 403
    this.name = 'Forbidden'
    this.message = message || " the server understood the request but refuses to authorize it..."
  }
}

class ConflictUserMail extends Error {
  constructor(message) {
    super(message);
    this.status = 409
    this.name = 'ConflictUserMail'
    this.message = message || 'User with the same name already exists'
  }
}
class ConflictCourse extends Error {
  constructor(message) {
    super(message);
    this.status = 400
    this.name = 'ConflictCourse'
    this.message = message || 'Course with the same name alredy exists'
  }
}
class ConflictCourseCart extends Error {
  constructor(message) {
    super(message);
    this.status = 400
    this.name = 'ConflictCourseCart'
    this.message = message || 'Course Cart with the same course alredy exists'
  }
}
class ConflictCourseName extends Error {
  constructor(message) {
    super(message);
    this.status = 400
    this.name = 'ConflictCourseName'
    this.message = message || "You can't change name to the previous one"
  }
}
class InvalidUSerMail extends BadRequest {
  constructor(message) {
    super(message);
    this.name = 'InvalidUserMail'
    this.message = message
  }
}
class InvalidUserPassword extends BadRequest {
  constructor(message) {
    super(message);
    this.name = 'InvalidUserPassword'
    this.message = message
  }
}
class NotFound extends Error {
  constructor(message) {
    super(message);
    this.status = 404
    this.name = 'NotFound'
    this.message = message || 'User not Found'
  }
}

module.exports = {
  BadRequest,
  Unauthorized,
  Forbidden,
  ConflictUserMail,
  NotFound,
  InvalidUSerMail,
  InvalidUserPassword,
  ConflictCourse,
  ConflictCourseName,
  ConflictCourseCart
}
