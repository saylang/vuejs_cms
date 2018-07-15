import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: `http://localhost:8000/`,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    },
    timeout: 3000,
    withCredentials: false
  })
}
