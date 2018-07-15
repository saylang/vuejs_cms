import auth from './AuthenticationService'

export default {
  guest (to, from, next) {
    next(!auth.checkLogin())
  },

  auth (to, from, next) {
    next(auth.checkLogin() ? true : {
      path: '/login',
      query: {
        redirect: to.name
      }
    })
  }
}
