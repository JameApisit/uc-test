export enum ErrorCode {
  // common
  BadRequest = 400,
  AccessDenied = 401,
  NotFound = 404,
  InternalError = 500,

  SQLCannotInsert = 91,
  SQLCannotUpdate = 92,

  // user = 1
  RequestDuplicatedAccess = 1001,
  UserCantAccess = 1002,
  PasswordIncorrect = 1003,
}
