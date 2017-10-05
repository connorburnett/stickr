let Vaults = require('../models/vault.js')

//module.exports = router

module.exports = {

	createVaults: {
		path: '/vaults',
		reqType: 'post',
		method(req, res, next) {
			vaults.create(req.body)
				.then((vault) => {
					return res.send(vault)
				})
				.catch((err) => {
					return res.send({ message: err })
				})
		}
	},
  
  userVaults: {
    path: '/vaults',
    reqType: 'get',
    method(req, res, next) {
      let action = 'Find User Vaults'
      vaults.find({ userId: req.session.uid })
        .then(vaults => {
          res.send(handleResponse(action, vaults))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  }

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