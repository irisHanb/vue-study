import axios from 'axios'
import { getDiffieHellman } from 'crypto'

const apiUrl = 'http://localhost:3000/todos/'

export default {
  getTodos(fn) {
    axios
      .get(apiUrl)
      .then(function(res) {
        fn(res.data)
      })
      .catch(function(error) {
        console.log(error)
      })
  },
  addTodo(todo, fn) {
    axios
      .post(apiUrl, todo)
      .then(res => {
        fn()
      })
      .catch(error => {
        console.log(error)
      })
  },
  delTodo(id, fn) {
    // console.log('delTodo> ', { id, text, done })
    axios
      .delete(apiUrl + id)
      .then(res => {
        fn()
      })
      .catch(error => {
        console.log(error)
      })
  },
  updateTodo({ id, text, done }, fn) {
    // console.log('updateTodo> ', { id, text, done })
    axios
      .patch(apiUrl + id, {
        text,
        done
      })
      .then(res => {
        console.log(res.data)
        this.getTodos(fn)
      })
      .catch(error => {
        console.log(error)
      })
  }
}
