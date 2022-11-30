import { Roid } from "roidjs"
import todos_defaults from "/states/todos"
import Todos from "/components/Todos"

export default () => (
  <Roid defaults={todos_defaults}>
    <Todos />
  </Roid>
)