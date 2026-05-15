import { useLayoutEffect, useRef, useState } from "react"
import gsap from "gsap"
import ProfileImg from "../assets/ProfileImg.png"
import HeroBackground from "../assets/HeroImg.png"
import HireButton from "./HireButton"
import { mailTo, navItems } from "../data/site"

function Hero() {
  const [heroImageReady, setHeroImageReady] = useState(false)
  const heroRef = useRef(null)
  const heroBackgroundRef = useRef(null)
  const navbarRef = useRef(null)
  const centralTextRef = useRef(null)
  const locationTagRef = useRef(null)
  const hireButtonRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        navbarRef.current,
        { opacity: 0, y: -16 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", delay: 0.2 }
      )

      gsap.fromTo(
        [centralTextRef.current, locationTagRef.current, hireButtonRef.current],
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.1,
          delay: 0.2,
        }
      )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  useLayoutEffect(() => {
    if (!heroImageReady) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroBackgroundRef.current,
        { opacity: 0, scale: 1.04 },
        { opacity: 1, scale: 1, duration: 1.8, ease: "power3.out" }
      )
    }, heroRef)

    return () => ctx.revert()
  }, [heroImageReady])

  return (
    <>

<div id="home" ref={heroRef} className="relative min-h-screen w-full overflow-hidden">
{/*Bg Hero*/}
  <img
  ref={heroBackgroundRef}
  src={HeroBackground}
  alt=""
  aria-hidden="true"
  onLoad={() => setHeroImageReady(true)}
  className="opacity-0 absolute inset-0 h-full w-full object-cover"
  />

<div className="absolute top-5 bottom-0 left-5 right-5 flex flex-col md:items-center md:justify-end max-[400px]:justify-center  min-[400px]:max-[770px]:justify-end min-[400px]:max-[770px]:items-center ">

{/*Central text*/}
  <div ref={centralTextRef} className="opacity-0 text-white text-center cursor-default max-[500px]:pt-[40%] flex flex-col items-center justify-end px-10 h-fit mb-[30%] md:mb-[20%] lg:absolute lg:mb-25 min-[1010px]:max-[1280px]:bottom-47.5">
  <h1 className="md:text-[96px] font-light italic font-['Cormorant_Garamond'] text-[72px] leading-none mb-12.5 md:mb-0">
    Daniela Silva
  </h1>

  <h2 className="md:text-[42px] text-[42px] font-['Dosis'] leading-none">
    <span className="font-bold">Ux/Ui Designer</span> and <span className="font-bold">Front-End Developer</span>
  </h2>
</div>

{/*Tag location*/}
  <div className=" relative h-fit md:h-12 flex flex-col items-center sm:flex-row justify-between w-full max-[400px]:mt-[10%] max-[376px]:mt-[0%] mb-20">
  <div ref={locationTagRef} className="opacity-0 font-['inter'] text-white min-w-fit flex h-14.5 md:mb-0 mb-5 items-center justify-center text-left rounded-[100px] px-6 cursor-default bg-[#D9D9D9]/8 backdrop-blur-[100px] hover:bg-white/20 transition-all duration-200">
    Based in Oviedo, Spain
  </div>

  <HireButton ref={hireButtonRef} className="opacity-0" />

</div>
</div>


{/* Navbar*/}
  <div ref={navbarRef} className="opacity-0 fixed top-12 left-5 right-5 z-50 h-12 flex flex-row items-center justify-between overflow-hidden text-white">

    <a 
    href="#home"
    className="font-['inter'] flex h-full shrink-0 items-center justify-center text-center rounded-[100px] px-1 gap-2 bg-[#D9D9D9]/8 backdrop-blur-[100px] hover:bg-white/20 transition-all duration-200">
       <div className="rounded-full h-10 w-10 overflow-hidden">
    <img
      src={ProfileImg}
      alt="Profile Img"
      className="h-10 w-10 object-cover"
    />
  </div>
      <h1 className="w-37.35 mr-4 hidden md:block">Daniela Silva</h1>
    </a>


    <div className="font-['inter'] flex h-full min-w-0 items-center justify-center text-center rounded-[100px] px-2 text-[12px] sm:px-6 sm:text-base bg-[#D9D9D9]/8 backdrop-blur-[100px] hover:bg-white/20 transition-all duration-200">
      {navItems.map((item) => (
        <div
          key={item.href}
          className="h-[80%] hover:bg-white/10 transition-all duration-200 rounded-full"
        >
          <a href={item.href} className="flex h-full w-20 items-center justify-center ">
            {item.label}
          </a>
        </div>
      ))}
      
    </div>


    <a 
    className="h-full"
    href={mailTo}>
      <div className="font-['inter'] h-full shrink-0 items-center justify-center text-center rounded-[100px] px-6 text-[12px] sm:text-base flex bg-[#D9D9D9]/8 backdrop-blur-[100px] hover:bg-white/20 transition-all duration-200">
      Contact
    </div></a>
  </div>

</div>
  </>
  )
}

export default Hero
