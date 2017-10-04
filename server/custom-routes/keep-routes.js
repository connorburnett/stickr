let Keeps = require('../models/keep.js')

//module.exports = router

module.exports = {

	createKeeps: {
		path: '/keeps',
		reqType: 'post',
		method(req, res, next) {
			keeps.create(req.body)
			.then((keep) => {
				return res.send(keep)
			})
			.catch((err) => {
				return res.send({message:err})
			})
		}
	},

	getUserKeeps: {
		path: '/home/:userId/keeps',
		reqType: 'get',
		method(req, res, next) {
			keeps.find({
				owner: req.params.term,
			})
				.then((found) => {
					//return res.send(200, found);
					res.status(200).send(found);
				}).catch((err) => {
					// return res.send(418, {
					// 	message: err
					// })
					return res.status(418).send({
						message: err
					});
				});
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