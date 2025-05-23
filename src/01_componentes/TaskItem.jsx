import {
  CheckIcon,
  DetailsIcon,
  LoaderIcon,
  TrashIcon,
} from "../assets/Icons/index"

const TaskItem = ({ task, handleCheckbox, handleDelete }) => {
  const StatusClassses = () => {
    if (task.status == "done") {
      return "bg-[#00ABD5]  text-[#00ABD5]"
    }
    if (task.status == "in_progress") {
      return "bg-[#FACC15]  text-[#FACC15] "
    }
    if (task.status == "no_started") {
      return "bg-[#808080] bg-opacity-1 text-[#35383E]]"
    }
  }

  return (
    <div
      className={`flex items-center justify-between gap-2 rounded-lg bg-opacity-10 px-4 py-3 text-sm transition ${StatusClassses()}`}
    >
      <div className="flex items-center gap-2">
        <label
          className={`relative flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg ${StatusClassses()}`}
        >
          <input
            type="checkbox"
            checked={task.status == "done"}
            className="absolute h-full w-full cursor-pointer opacity-0"
            onClick={() => handleCheckbox(task.id)}
          />
          
          {task.status == "done" && <CheckIcon />}
          {task.status == "in_progress" && (
            <LoaderIcon className="animate-spin" />
          )}
        </label>
        {task.title}
      </div>

      <div className="flex items-center gap-2">
        <button variant="ghost" onClick={() => handleDelete(task.id)}>
          <TrashIcon className="text-gray-400 transition hover:opacity-65" />
        </button>
        <a href="#" className="transition hover:opacity-65">
          <DetailsIcon />
        </a>
      </div>
    </div>
  )
}

export default TaskItem
