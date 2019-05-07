import axios from 'axios'

// const apiUrl = '/api/todos'
const apiUrl = 'http://localhost:3000/memos'

export default {
  getTodos(fn) {
    return axios.get(apiUrl)
  },
  addTodo(todo, fn) {
    return axios.post(apiUrl, todo)
  },
  deleteTodo(id, fn) {
    return axios.delete(apiUrl + id)
  },
  updateTodo({ id, text, done }, fn) {
    return axios.patch(apiUrl + id, {
      text,
      done
    })
  }
}
