import axios from 'axios'

// const apiUrl = '/api/todos'
const apiUrl = 'http://localhost:3000/memos'

export default {
  getList() {
    return axios.get(apiUrl)
  },
  add(data) {
    return axios.post(apiUrl, data)
  },
  delete(id) {
    return axios.delete(apiUrl + '/' + id)
  },
  update({ id, title, text, onFix }) {
    return axios.patch(apiUrl + '/' + id, {
      title,
      text,
      onFix
    })
  }
}
