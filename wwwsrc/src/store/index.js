import axios from 'axios'
import vue from 'vue'
import vuex from 'vuex'
import router from '../router'

let api = axios.create({
  baseURL: 'http://localhost:3000/api/',
  timeout: 10000,
  withCredentials: true
})

let auth = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 2000,
  withCredentials: true
})
vue.use(vuex)

var store = new vuex.Store({

  state: {
    credentials: {},
    viewUser: {},
    home: {},
    vaults: [],
    keeps: {},
    keepView: {}
  },

  mutations: {
    setUser(state, data) {
      console.log(data)
      state.credentials = data
    },

    setUserView(state, data) {
      state.viewUser = data
    },
    setUserKeeps(state, data) {
      state.keeps = data
    },

    setKeepView(state, data) {
      state.keepView = data
    },

    setVaults(state, data) {
      state.vaults = data
    },
    setActiveVault(state, data) {
      state.activeVault = data
    },

  },

  actions: {
    // authentication

    authenticate({ commit, dispatch }) {
      auth("authenticate").then(res => {
        if (!res.data.data) {
          return router.push('/')
        }
        commit('setUser', res.data.data)
        router.push('/home')
      })
        .catch(err => {
          //commit('handleError', err)
          router.push('/')
        })
    },

    // user actions

    register({ commit, dispatch }, credentials) {
      auth.post("register", credentials).then(res => {
        if (res.data.data) {
          commit('setUser', res.data.data)
          return router.push('/home')
        }
      })
    },
    login({ commit, dispatch }, credentials) {
      auth.post("login", credentials).then(res => {
        if (res.data.data) {
          commit('setUser', res.data.data)
          return router.push('/home')

        } else if (res.data.error) {
          alert('Invalid Username or Password')
        }
      })
    },
    logout({ commit, dispatch }) {
      auth.delete("logout")
        .then(commit('setUser', {}))
      return router.push('/')

    },

    // profile and keep actions

    // getUser({ commit, dispatch }, userid) {
    //   api(`account/${userid}`).then(res => {
    //     commit('setUserView', res.data.data)
    //   })
    // },

    getUserKeeps({ commit, dispatch }, userid) {
      api(`home/userId/${userid}`).then(res => {
        commit('setUserKeeps', res.data.data)
      })
    },
    getKeeps({ commit, dispatch }, obj) {
      api(`/home/${obj.type}/${obj.query}`).then(res => {
        commit('setUserKeeps', res.data.data)
      })
    },
    keepView({ commit, dispatch }, keepid) {
      api(`keeps/${keepid}`).then(res => {
        commit('setKeepView', res.data.data)
      })
    },

    // profile and vault actions

    getVaults({ commit, dispatch }, userid) {
      api(`${userid}/vaults`)
        .then(res => {
          commit('setVaults', res.data.data)
        })
    },
    getVault({ commit, dispatch }, id) {
      api(`${userid}/vaults/${vaultid}`)
        .then(res => {
          commit('setActiveVault', res.data.data)
        })
    },

    // create keeps

    createKeep({ commit, dispatch }, keep) {
      api.post("keeps/", keep).then(res => {
        dispatch('getUserKeeps', res.data.owner)
      })
    },

    // create vaults

    createVault({ commit, dispatch }, vault) {
      api.post("vaults/", vault).then(res => {
        dispatch('getVaults', res.data.owner)
      })
    }
  }



})

export default store