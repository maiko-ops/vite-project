import { Toaster } from "sonner"
import Sidebar from "./01_componentes/Sidebar"
import Tasks from "./01_componentes/Tasks"

function App() {
  return (
    <div className="flex ">
      <Toaster/>
      <Sidebar />
      <Tasks />
    </div>
  )
}
export default App
