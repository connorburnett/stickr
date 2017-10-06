let Vaults = require('../models/vault.js')

//module.exports = router

module.exports = {

	createVaults: {
		path: '/vaults/:userId',
		reqType: 'post',
		method(req, res, next) {
			vaults.create(req.params.userId)
				.then((vault) => {
					return res.send(vault)
				})
				.catch((err) => {
					return res.send({ message: err })
				})
		}
	},
  
  userVaults: {
    path: '/uservaults/:userId',
    reqType: 'get',
    method(req, res, next) {
      let action = 'Find User Vaults'
      Vaults.find({ userId: req.params.userId })
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