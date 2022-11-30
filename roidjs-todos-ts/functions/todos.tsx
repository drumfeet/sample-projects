export const addTask = ({ get, set, val: { task } }) =>
  set([...get("todos"), { id: Date.now(), task, done: false }], "todos")

export const complete = ({ get, set, val: { todo } }) =>
  set(
    get("todos").map(v => (v.id !== todo.id ? v : { ...v, done: !v.done })),
    "todos"
  )