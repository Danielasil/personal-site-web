import { useLayoutEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import FooterLogo from "../assets/FooterImg.svg"
import { contactEmail, mailTo, socialLinks } from "../data/site"

gsap.registerPlugin(ScrollTrigger)

const footerDots = [
  { id: 0, x: 68.97, y: 85 },
  { id: 1, x: 99.74, y: 51.67 },
  { id: 2, x: 0.26, y: 35 },
  { id: 3, x: 7.95, y: 68.33 },
  { id: 4, x: 48.46, y: 1.67 },
  { id: 5, x: 31.03, y: 76.67 },
]

function Footer() {
const footerRef = useRef(null)
const [hiddenFooterDots, setHiddenFooterDots] = useState([])

const shuffleFooterDots = () => {
  const nextHiddenDots = footerDots
    .filter(() => Math.random() > 0.45)
    .map((dot) => dot.id)

  setHiddenFooterDots(
    nextHiddenDots.length === footerDots.length
      ? nextHiddenDots.slice(0, -2)
      : nextHiddenDots
  )
}

const resetFooterDots = () => setHiddenFooterDots([])

const footerHoverProps = {
  onMouseEnter: shuffleFooterDots,
  onMouseLeave: resetFooterDots,
  onFocus: shuffleFooterDots,
  onBlur: resetFooterDots,
}

useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: -16 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    )
  }, footerRef)

  return () => ctx.revert()
}, [])

 return (
  <>
    

<div id="contact" ref={footerRef} className="opacity-0 bg-[#0F0F0F] flex flex-col items-center px-5 font-['Inter']">
  <div className=" w-full justify-start">   
    </div>    
    
  <div className="w-full grid grid-cols-2 mt-19.75 mb-37.5 gap-10 sm:flex sm:flex-col lg:flex-row lg:justify-between">
{/*Tag Aviable*/}
    <div className="cursor-default bg-black rounded-[5px] flex cursor-defaultflex items-center px-2 gap-2 h-8.5 w-fit border border-[#9B9B9B]">
        <div className="dot bg-green-400 h-2.5 w-2.5 rounded-full"></div>
        <h1 className="text-white text-[16px] max-[400px]:text-[10px]">
  Available to hire
</h1>
    </div>

{/*Footer links*/}
    
      <div className=" cursor-default flex flex-col w-57.5 text-[18px] max-[400px]:text-[16px]">
  <h1 className="text-white/80">Location</h1>

  <p className="text-white">
    Oviedo, Asturias.
    
    <br className="hidden max-[400px]:block" />

    <span className="max-[400px]:block">
      Spain
    </span>
  </p>
</div> 

    <div className="flex flex-col w-57.5">
    <h1 className="text-white/80">Contact</h1>
    <p className="text-white max-[400px]:w-[70%]">
  <a
  href={mailTo}
  {...footerHoverProps}
  className="max-[400px]:text-[16px] block max-w-[80%] break-all text-[18px] hover:underline sm:max-w-none sm:break-normal"
>
  {contactEmail}
</a></p>
    </div> 

    <div className="flex flex-col w-57.5">
    <h1 className=" text-white/80">Social</h1>
    <div className=" text-white">
        {socialLinks.map((link) => (
          <p key={link.href}>
            <a
              {...footerHoverProps}
              className="hover:underline max-[400px]:text-[16px]"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          </p>
        ))}
    </div>
    </div>
    
   
    </div>

{/*Footer img*/}
   <div className="w-[calc(100%+40px)] -mx-5 flex justify-center items-end mb-10">
  <div className="relative inline-block max-w-full">
    <img
      src={FooterLogo}
      alt="Logo of Letters"
      className="block h-auto max-w-full"
    />
    <div className="pointer-events-none absolute inset-0">
      {footerDots.map((dot) => (
        <span
          key={dot.id}
          className={`absolute h-1 w-1 rounded-full bg-white transition-opacity duration-500 ${
            hiddenFooterDots.includes(dot.id) ? "opacity-0" : "opacity-100"
          }`}
          style={{ left: `${dot.x}%`, top: `${dot.y}%` }}
        />
      ))}
    </div>
  </div>
</div>
    </div>


  </>
)
}

export default Footer
