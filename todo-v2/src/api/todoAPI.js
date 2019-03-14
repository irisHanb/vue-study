import store from '../store/'

// todo data, api
const _list = [
  { id: 1, text: 'your first todo', done: false },
  { id: 2, text: 'read book', done: false },
  { id: 3, text: 'cook for dinner', done: false }
]
const _id = 4

export default {
  getInfo(fn) {
    setTimeout(() => {
      let info = null
      if (
        !localStorage.todos ||
        JSON.parse(localStorage.todos).list.length === 0
      ) {
        info = { id: _id, list: _list }
      } else {
        const localInfo = JSON.parse(localStorage.todos)
        info = { id: localInfo.id, list: localInfo.list }
      }
      fn(info)
    }, 1000)
  },
  setList(info) {
    localStorage.todos = JSON.stringify(info)
  }
}
