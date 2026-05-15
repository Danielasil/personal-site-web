import React from "react"
import { mailTo } from "../data/site"

const buttonClass =
  "font-['inter'] bg-white hover:bg-white/20 transition-all duration-200 flex text-black hover:text-white h-10 items-center justify-center text-center rounded-[9px] px-4"

const HireButton = React.forwardRef(function HireButton(
  { className = "" },
  ref
) {
  return (
    <a href={mailTo} ref={ref} className={`${buttonClass} ${className}`.trim()}>
      Hire me
    </a>
  )
})

export default HireButton
