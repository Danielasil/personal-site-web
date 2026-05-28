import { useLayoutEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import HighlightText from "./HighlightText"
import AboutBgImg from "../assets/AboutBgImg.svg"

gsap.registerPlugin(ScrollTrigger)

const aboutDots = [
  { id: 0, x: 63.2, y: 59 },
  { id: 1, x: 35.19, y: 55.25 },
  { id: 2, x: 62.38, y: 30.25 },
  { id: 3, x: 34.84, y: 27.75 },
  { id: 4, x: 76.27, y: 25.25 },
  { id: 5, x: 31.37, y: 22.75 },
  { id: 6, x: 47.34, y: 71.5 },
  { id: 7, x: 50.23, y: 82.75 },
  { id: 8, x: 49.31, y: 17.75 },
]

function About() {
const aboutRef = useRef(null)
const aboutTextRef = useRef(null)
const [hiddenDots, setHiddenDots] = useState([])

const shuffleDots = () => {
  const nextHiddenDots = aboutDots
    .filter(() => Math.random() > 0.45)
    .map((dot) => dot.id)

  setHiddenDots(nextHiddenDots.length === aboutDots.length ? nextHiddenDots.slice(0, -2) : nextHiddenDots)
}

const resetDots = () => setHiddenDots([])
const highlightProps = {
  onMouseEnter: shuffleDots,
  onMouseLeave: resetDots,
  onFocus: shuffleDots,
  onBlur: resetDots,
}

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
    <div id="about" ref={aboutRef} className="relative min-h-screen overflow-hidden px-5 bg-black">
      <img
        src={AboutBgImg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 z-0 h-full w-full object-cover brightness-0"
      />
      <div className="absolute inset-0 z-10 pointer-events-none">
        {aboutDots.map((dot) => (
          <span
            key={dot.id}
            className={`absolute h-1 w-1 rounded-full bg-white transition-opacity duration-500 ${
              hiddenDots.includes(dot.id) ? "opacity-0" : "opacity-100"
            }`}
            style={{ left: `${dot.x}%`, top: `${dot.y}%` }}
          />
        ))}
      </div>

      <div className="relative z-20 flex items-center justify-center text-white h-screen cursor-default">

        <div ref={aboutTextRef} className="opacity-0 flex flex-col items-center justify-center px-10 max-w-225">

       <h1 className="text-[38px] py-2 text-center font-['Dosis']">Ux/Ui Designer and<br />
  <HighlightText {...highlightProps}>Front-End Developer</HighlightText>

  {" "}with{" "}

  <HighlightText {...highlightProps}>over 3 years of</HighlightText>

  {" "}

  <HighlightText {...highlightProps}>experience</HighlightText>

  . Graduated in

  {" "}

  <HighlightText {...highlightProps}>graphic design</HighlightText>

  {" "}, with knowledge of{" "}

  <HighlightText {...highlightProps}>frontend development</HighlightText> and a passion for creating intuitive <HighlightText {...highlightProps}>digital</HighlightText> experiences.
</h1>
        </div>

      </div>

    </div>
  </>
)
}

export default About
