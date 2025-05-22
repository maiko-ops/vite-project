const TasksSeparator = ({ title, icon }) => {
  return (
    <div className="border-solidt flex gap-2 border-b border-[#F4F4F5] pb-1 text-sm">
      {icon}

      <p className="text-[#9A9C9F]">{title}</p>
    </div>
  )
}

export default TasksSeparator
