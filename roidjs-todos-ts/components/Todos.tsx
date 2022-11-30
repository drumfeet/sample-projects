import { inject } from "roidjs"
import AddTask from "/components/AddTask"
import Todo from "/components/Todo"

export default inject(["todos"], ({ $ }) => (
  <div style={{ padding: "20px" }}>
    <AddTask />
    {$.todos.map(todo => (
      <Todo todo={todo} />
    ))}
  </div>
))