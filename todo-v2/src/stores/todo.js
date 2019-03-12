export const todo = {
  state: {
    id: 1,
    listCurrent: null,
    listInit: [
      { text: 'study: vue', id: 1, status: 'on' },
      { text: 'study: js', id: 2, status: 'on' },
      { text: 'study: react', id: 3, status: 'on' }
    ]
  },
  getters: {
    list(state, getters) {
      const todos = localStorage.todos
      if (!todos || todos.length === 0) {
        return state.listInit
      } else {
        return []
      }
    }
  },
  mutations: {
    addTodo(state, payload) {
      console.log('addTodo', payload.text)
    }
  },
  actions: {}
}
