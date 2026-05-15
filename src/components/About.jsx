import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import HighlightText from "./HighlightText"

gsap.registerPlugin(ScrollTrigger)

function About() {
const aboutRef = useRef(null)
const aboutTextRef = useRef(null)

useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    gsap.fromTo(
      aboutTextRef.current,
      { opacity: 0, y: -16 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    )
  }, aboutRef)

  return () => ctx.revert()
}, [])

 return (
  <>
    <div id="about" ref={aboutRef} className="relative min-h-screen px-5 bg-black">

      <div className="flex items-center justify-center text-white h-screen cursor-default">

        <div ref={aboutTextRef} className="opacity-0 flex flex-col items-center justify-center px-10 max-w-225">

       <h1 className="text-[38px] py-2 text-center font-['Dosis']">Ux/Ui Designer and<br />
  <HighlightText>Front-End Developer</HighlightText>

  {" "}with{" "}

  <HighlightText>over 3 years of</HighlightText>

  {" "}

  <HighlightText>experience</HighlightText>

  . Graduated in

  {" "}

  <HighlightText>graphic design</HighlightText>

  {" "}, with knowledge of{" "}

  <HighlightText>frontend development</HighlightText> and a passion for creating intuitive <HighlightText>digital</HighlightText> experiences.
</h1>
        </div>

      </div>

    </div>
  </>
)
}

export default About
