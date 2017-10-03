let router = require('express').Router()
let Users = require('../models/credentials')

router.post('/register', (req, res) => {
  
  Users.create(req.body)
    .then((credentials) => {
      req.session.uid = credentials._id
      req.session.save()
      credentials.password = null
      delete credentials.password
      res.send({
        message: 'Successfully created user account',
        data: credentials
      })
    })
    .catch(err => {
      res.send({ error: err })
    })
})


router.post('/login', (req, res) => {
  Users.findOne({ email: req.body.email })
    .then(credentials => {
      credentials.validatePassword(req.body.password)
        .then(valid => {
          if (!valid) {
            return res.send({ error: 'Invalid Email or Password' })
          }
          req.session.uid = credentials._id;
          req.session.save()
          credentials.password = null
          delete credentials.password
          res.send({
            message: 'successfully logged in',
            data: credentials
          })
        })
        .catch(err => {
          res.send({ error: err || 'Invalid Email or Password' })
        })
    })
    .catch(err => {
      res.send({
        error: err,
        message: 'Invalid Email or Password'
      })
    })
})

router.delete('/logout', (req, res) => {
  req.session.destroy()
  res.send({
    message: 'You have successfully been logged out. Please come back soon!'
  })
})


router.get('/authenticate', (req, res) => {
  Users.findById(req.session.uid).then(credentials => {
    credentials.password = null
    delete credentials.password
    return res.send({
      data: credentials
    })
  }).catch(err => {
    return res.send({
      error: err
    })
  })
})



module.exports = router