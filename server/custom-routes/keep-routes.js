let Keeps = require('../models/keep.js')

//module.exports = router

module.exports = {

	createKeeps: {
		path: '/keeps/:userId',
		reqType: 'post',
		method(req, res, next) {
			keeps.create(req.params.userId)
				.then((keep) => {
					return res.send(keep)
				})
				.catch((err) => {
					return res.send({ message: err })
				})
		}
	},

	// getUserKeeps: {
	// 	path: '/keeps',
	// 	reqType: 'get',
	// 	method(req, res, next) {
	// 		keeps.find({
	// 			owner: req.params.term,
	// 		})
	// 			.then((found) => {
	// 				//return res.send(200, found);
	// 				res.status(200).send(found);
	// 			}).catch((err) => {
	// 				// return res.send(418, {
	// 				// 	message: err
	// 				// })
	// 				return res.status(418).send({
	// 					message: err
	// 				});
	// 			});
	// 	}
	// },

	getUserKeeps: {
		path: '/userkeeps/:userId',
		reqType: 'get',
		method(req, res, next) {
			let action = 'Find User Keeps'
			Keeps.find({ UserId: req.params.UserId })
				.then(keeps => {
					console.log(UserId)
					res.send(handleResponse(action, keeps))
				}).catch(error => {
					return next(handleResponse(action, null, error))
				})
		}
	},

	getKeeps: {
		path: '/keeps',
		reqType: 'get',
		method(req, res, next) {
			let action = 'Find Keeps'
			keeps.find({ userId: req.session.uid })
				.then(keeps => {
					res.send(handleResponse(action, keeps))
				}).catch(error => {
					return next(handleResponse(action, null, error))
				})
		}
	},
	
	getKeepsByVault: {
		path: '/vaultkeeps/:vaultId',
		reqType: 'get',
		method(req, res, next) {
			let action = 'Find Vault Keeps'
			Keeps.find({ vaultId: req.params.vaultId })
				.then(keeps => {
					res.send(handleResponse(action, keeps))
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