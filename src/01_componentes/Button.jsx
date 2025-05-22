const Button = ({
  children,
  variant = "primary",
  size = "small",
  className,
  ...rest
}) => {
  const getVariantClasses = () => {
    if (variant == "primary") {
      return "bg-[#00ADB5] text-white"
    }

    if (variant == "second") {
      return "bg-[#818181] text-[#35383E]"
    }

    if (variant == "ghost") {
      return "bg-[#F0FFF0] text-[#818181]"
    }
  }

  const SizeClasses = () => {
    if (size == "small") {
      return "py-1 text-xs "
    }
    if (size == "large") {
      return "py-2 txt-sm"
    }
  }
  return (
    <button
      className={`${getVariantClasses()} font-semibol flex items-center gap-1 rounded-md px-3 py-1 transition hover:opacity-40 ${SizeClasses()} ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
