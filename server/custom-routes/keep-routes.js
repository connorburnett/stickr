let Keeps = require('../models/keep.js')

//module.exports = router

module.exports = {

}


function handleResponse(action, data, error) {
  var response = {
    action: action,
    data: data
  }
  if (error) {
    response.error = error
  }
  return response
}