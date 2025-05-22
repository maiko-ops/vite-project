import SidebarButton from "./SidebarButton"
import { HomeIcon, TasksIcon } from "../assets/Icons/index"

// import {homeIcon,TasksIcon}
const Sidebar = () => {
  return (
    <div className="h-screen w-72 bg-white">
      <div className="space-y-4 px-8 py-6">
        <h1 className="text-xl font-semibold text-[#00ABD5]">Task Manager</h1>
        <p>
          {" "}
          Um simples{" "}
          <span className="text-[#00ABD5]">organizador de tarefas.</span>
        </p>
      </div>
      <div className="flex flex-col gap-2 p-2">
        <SidebarButton variant="selected">
          <img src={HomeIcon} /> inicio
        </SidebarButton>

        <SidebarButton variant="selected">
          <img src={TasksIcon} /> MinhasTarefas
        </SidebarButton>
      </div>
    </div>
  )
}

export default Sidebar
