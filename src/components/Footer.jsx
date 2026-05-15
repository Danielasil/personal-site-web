import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import FooterLogo from "../assets/FooterLogo.svg"
import { contactEmail, mailTo, socialLinks } from "../data/site"

gsap.registerPlugin(ScrollTrigger)

function Footer() {
const footerRef = useRef(null)

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
    <div className="bg-black rounded-[5px] cursor-default text-white text-[16px] flex items-center px-2 gap-2 h-8.5 w-fit border border-[#9B9B9B]">
        <div className="dot bg-green-400 h-2.5 w-2.5 rounded-full"></div>
        <h1>Available to hire</h1>
    </div>

{/*Footer links*/}
    
      <div className="flex flex-col w-57.5 text-[18px]">
    <h1 className="text-white/80">Location</h1>
    <p className=" text-white">Oviedo, Asturias. Spain</p>
 
    </div> 

    <div className="flex flex-col w-57.5">
    <h1 className="text-white/80">Contact</h1>
    <p className="text-white"><a
  href={mailTo}
  className="block max-w-[80%] break-all text-[18px] hover:underline sm:max-w-none sm:break-normal"
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
              className="hover:underline"
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
   <div className="w-[calc(100%+40px)] -mx-5 flex justify-center items-end">
  <img
    src={FooterLogo}
    alt="Logo of Letters"
    className="block h-auto"
  />
</div>
    </div>


  </>
)
}

export default Footer
