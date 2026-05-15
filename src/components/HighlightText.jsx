const HighlightText = ({ children }) => {
  return (
    <span className="cursor-pointer italic font-['Cormorant_Garamond'] border border-white rounded-full px-4 whitespace-nowrap hover:bg-white hover:text-black transition-colors duration-300">
      {children}
    </span>
  )
}

export default HighlightText
