const actions = {
  create: 'Create',
  update: 'Update',
  remove: 'Remove',
  find: 'Find',
  findAll: 'Find All'
}

const models = {
  credentials: {
    name: 'Credentials',
    endpoint: 'credentials',
    //preventDefaultApi: true
  },
  vault: {
    name: 'Vault',
    endpoint: 'vaults',
    useCustomRoutes: true
  },
  keep: {
    name: 'Keep',
    endpoint: 'keeps',
    useCustomRoutes: true
  }
}


module.exports = {
  actions,
  models
}