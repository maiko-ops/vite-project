import Button from "./Button"
import TasksSeparator from "./TasksSeparator"
import { useState } from "react"
import TASKS from "../constants/tasks"
import TaskItem from "./TaskItem"
import { toast } from "sonner"
import {
  AddIcon,
  CloudSunIcon,
  MoonIcon,
  SunIcon,
  TrashIcon,
} from "../assets/Icons/index"
import AddTaskDialog from "./AddTaskDialog"

const Tasks = () => {
  const [tasks, setTasks] = useState(TASKS)
  const [AddTaskDialogIsOpen, setAddTaskDialogIsOpen] = useState(false)

  const morningTasks = tasks.filter((task) => task.time == "morning")
  const afternoonTasks = tasks.filter((task) => task.time == "afternoon")
  const eveningTasks = tasks.filter((task) => task.time == "evening")

  const handleTaskDelete = (taskId) => {
    const newTask = tasks.filter((task) => task.id !== taskId)
    setTasks(newTask)
    toast.success("Tarefa deletada com sucesso!")
  }

  const handleTaskCheckbox = (taskId) => {
    const newTask = tasks.map((task) => {
      if (task.id !== taskId) {
        return task
      }

      if (task.status == "no_started") {
        toast.success("Tarefa INICIADA!")
        return { ...task, status: "in_progress" }
      }

      if (task.status == "in_progress") {
        toast.success("Tarefa CONCLUIDA!")
        return { ...task, status: "done" }
      }

      if (task.status == "done") {
        return { ...task, status: "no_started" }
      }

      return Tasks
    })

    setTasks(newTask)
  }
  const handleAddTaskSumbmit = (task) => {
    setTasks([...tasks, task])
    toast.success("Tarefa adicionada com sucess")
  }

  return (
    <div className="w-full space-y-6 px-8 py-16">
      <div className="flex w-full justify-between">
        <div>
          <span className="text-xs font-semibold text-[#00ABD5]">
            {" "}
            Minhas Tarefas
          </span>
          <h2 className="text-xl font-semibold">Minhas Tarefas</h2>
        </div>

        <div className="flex items-center gap-3">
          <Button onClick={() => setAddTaskDialogIsOpen(true)}>
            Nova tarefa
            <AddIcon />
          </Button>
          <Button>
            <TrashIcon />
            Limpar tarefa
          </Button>
          <AddTaskDialog
            isOpen={AddTaskDialogIsOpen}
            handleClose={() => setAddTaskDialogIsOpen(false)}
            handleSubmit={handleAddTaskSumbmit}
          />
        </div>
      </div>
      {/* lista de tarefas */}
      <div className="bg-bl rounded-xl bg-white p-6">
        {/* MANHA */}
        <div className="space-y-3">
          <TasksSeparator title="manha" icon={<SunIcon />} />
          {morningTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleCheckbox={handleTaskCheckbox}
              handleDelete={handleTaskDelete}
            />
          ))}
        </div>
        {/* tarde */}
        <div className="my-6 space-y-3">
          <TasksSeparator title="tarde" icon={<CloudSunIcon />} />
          {afternoonTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleCheckbox={handleTaskCheckbox}
              handleDelete={handleTaskDelete}
            />
          ))}
        </div>
        {/* note */}
        <div className="my-6 space-y-3">
          <TasksSeparator title="noite" icon={<MoonIcon />} />
          {eveningTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleCheckbox={handleTaskCheckbox}
              handleDelete={handleTaskDelete}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
export default Tasks
