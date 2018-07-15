import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  },
  login (credentials) {
    return Api().post('auth/login', credentials)
  },
  checkLogin () {
    return localStorage.getItem('token')
  }
}
