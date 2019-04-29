import axios from 'axios'
import { getDiffieHellman } from 'crypto'

// todo data, api
const _list = [
  { text: 'your first todo', done: false, id: 1 },
  { text: 'read book', done: false, id: 2 },
  { text: 'cook for dinner', done: false, id: 3 }
]
const _id = 4

export default {
  getTodos(fn) {
    axios
      .get('http://localhost:3000/todos')
      .then(function(res) {
        fn(res.data)
      })
      .catch(function(error) {
        console.log(error)
      })
  },
  addTodo({ id, text, done }, fn) {
    axios
      .post('http://localhost:3000/todos', {
        id,
        text,
        done
      })
      .then(res => {
        this.getTodos(fn)
      })
      .catch(error => {
        console.log(error)
      })
  },
  delTodo({ id, text, done }, fn) {
    console.log('delTodo> ', { id, text, done })
    axios
      .delete('http://localhost:3000/todos/' + id)
      .then(res => {
        this.getTodos(fn)
      })
      .catch(error => {
        console.log(error)
      })
  },
  updateTodo({ id, text, done }, fn) {
    // console.log('updateTodo> ', { id, text, done })
    axios
      .patch('http://localhost:3000/todos/' + id, {
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
