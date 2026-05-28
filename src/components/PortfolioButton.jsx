import React from "react"

const buttonClass =
  "font-['inter'] bg-white hover:bg-white/20 transition-all duration-200 flex text-black hover:text-white h-10 items-center justify-center text-center rounded-[9px] px-4"

const PortfolioButton = React.forwardRef(function HireButton(
  { className = "", ...props },
  ref
) {
  return (
    <a href="https://www.behance.net/danielasil01a0" 
    target="_blank"
    rel="noopener noreferrer"
    ref={ref}
    className={`${buttonClass} ${className}`.trim()}
    {...props}>
      Portfolio
    </a>
  )
})

export default PortfolioButton
