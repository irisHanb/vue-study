// todo data, api
const _list = [
  { text: 'your first todo', done: false, id: 1 },
  { text: 'read book', done: false, id: 2 },
  { text: 'cook for dinner', done: false, id: 3 }
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
