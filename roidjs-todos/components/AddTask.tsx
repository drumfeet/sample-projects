import { useState } from "react"
import { inject } from "roidjs"
import { addTask } from "/functions/todos"

export default inject(["todos"], ({ fn }) => {
  const [task, setTask] = useState("")
  return (
    <div style={{ display: "flex" }}>
      <input value={task} onChange={e => setTask(e.target.value)} />
      <button onClick={() => fn(addTask)({ task })} style={{ marginLeft: "10px" }}>
        add task
      </button>
    </div>
  )
})