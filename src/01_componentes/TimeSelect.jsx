import InputLabel from "./InputLabel"
import { forwardRef } from "react"

const TimeSelect = forwardRef((props, ref) => {
  return (
    <div className="flex flex-col gap-1 text-left">
      <InputLabel htmlfor="time">Horario</InputLabel>
      <select
        className="boder-[#ECECEC] rounded-lg border border-solid px-4 py-3 text-[#949c9f] outline-teal-500 placeholder:text-sm"
        {...props}
        ref={ref}
      >
        <option value="morning">Manhã</option>
        <option value="afternoon">Tarde</option>
        <option value="evening">Noite</option>
      </select>

      {props.errorMessage && (
        <p className="text-left text-xs text-red-500">{error.errorMessage}</p>
      )}
    </div>
  )
})
export default TimeSelect
