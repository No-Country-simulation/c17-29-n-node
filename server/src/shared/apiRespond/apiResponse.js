const apiResponse = (res, code, status , message = '', data = {}) => {
  return res.status(status).json({
    code: code,
    type: status,
    msg: message,
    data: data
  })
}