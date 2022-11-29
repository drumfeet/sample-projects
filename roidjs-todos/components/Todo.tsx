import { inject } from "roidjs"
import { complete } from "/functions/todos"
import Todo from "/components/Todo"

export default inject(["todos"], ({ todo, fn }) => (
  <div
    style={{ display: "flex", padding: "5px" }}
    onClick={() => fn(complete)({ todo })}
  >
    {todo.done ? "o" : "x"} : {todo.task}
  </div>
))