import InputLabel from "./InputLabel"

const Input = ({ label, error, ...rest }) => {
  return (
    <div className="flex flex-col space-y-1 text-left">
      <InputLabel htmlFor={rest.id}>{label}</InputLabel>
      <input
        className="boder-[#ECECEC] rounded-lg border border-solid px-4 py-3 text-[#949c9f] outline-teal-500 placeholder:text-sm"
        {...rest}
      />
      {error && (
        <p className="text-left text-xs text-red-500"> {error.message}</p>
      )}
    </div>
  )
}

export default Input
