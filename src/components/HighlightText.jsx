const HighlightText = ({ children, onMouseEnter, onMouseLeave, onFocus, onBlur }) => {
  return (
    <span
      tabIndex={0}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocus={onFocus}
      onBlur={onBlur}
      className="cursor-pointer italic font-['Cormorant_Garamond'] border border-white rounded-full px-4 whitespace-nowrap hover:bg-white hover:text-black focus:bg-white focus:text-black focus:outline-none transition-colors duration-300"
    >
      {children}
    </span>
  )
}

export default HighlightText
