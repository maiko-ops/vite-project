const SidebarButton = ({ children, variant, icon }) => {
  const VariantClasses = () => {
    if (variant == "unselected") {
      return "text-[#35383E]"
    }
    if (variant == "selected") {
      return "bg-[#E6F7F8] text-[#00ABD5]"
    }
  }
  return (
    <a
      href="#"
      className={
        "${VariantClasses()} flex items-center gap-2 rounded-lg px-6 py-3"
      }
    >
      {icon}
      {children}
    </a>
  )
}
export default SidebarButton
