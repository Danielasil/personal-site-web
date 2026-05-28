import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import artWorkMockup from "../assets/ArtWorkImg.png"
import urbanLeafMockup from "../assets/UrbanLeafImg.png"
import weatherlyMockup from "../assets/WeatherlyImg.png"
import ticTacToeMockup from "../assets/Tic-Tac-ToeImg.svg"

gsap.registerPlugin(ScrollTrigger)

function Work() {
  const workRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".work-card").forEach((card) => {
        const copy = card.querySelector(".work-copy")

        gsap.fromTo(
          card,
          { opacity: 0, y: -16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        )

        gsap.fromTo(
          copy,
          { opacity: 0, y: -16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 55%",
              toggleActions: "play none none none",
            },
          }
        )
      })
    }, workRef)

    return () => ctx.revert()
  }, [])

  const projects = [
    {
      title: "ArtWork-Social Network",
      text: "A place to connect with your creativity, your ingenuity and share your creations. The project is inspired by LinkedIn, specifically focused on the field of visual arts.",
      link: "https://www.behance.net/gallery/237954543/Artwork-I-UXUI-Design-Web-Design?platform=direct",
      image: artWorkMockup,
    },
    {
      title: "UrbanLeaf -Landing Page",
      text: "This website is designed for an e-commerce site dedicated to selling plants. This project features a design that highlights the details and beauty of each item.",
      link: "https://www.behance.net/gallery/240411223/UrbanLeaf-I-UXUI-Web-Design?platform=direct",
      image: urbanLeafMockup,
    },
    {
      title: "Weatherly-A Weather App",
      text: "This application was created using the Vue framework. It works in conjunction with a minimalist and responsive design.",
      link: "https://www.behance.net/gallery/239611577/Weatherly-I-UXUI-Design-Web-Design?platform=direct",
      image: weatherlyMockup,
    },
    {
      title: "TicTacToe-Puzzle Game",
      text: "This project presents a UX/UI design and graphic development using the React framework to create a simple and playful digital product. It is a digital version of the famous tic tac toe game.",
      link: "https://www.behance.net/gallery/233494451/Tic-Tac-Toe-I-UXUI-Game-Design?platform=direct",
      image: ticTacToeMockup,
    },
  ]

 return (
  <>
    <div id="work" ref={workRef} className="min-h-screen">

    {projects.map((project) => (
      <a
        key={project.title}
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group block cursor-pointer"
      >
        <section className="work-card opacity-0 bg-[#625655] h-[90vh] relative overflow-hidden border-b-8 border-black transition-shadow duration-500 group-hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.45),inset_0_0_80px_rgba(255,255,255,0.18)]">
      <img
        src={project.image}
        alt={`${project.title} mockup`}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      <div className="work-copy opacity-0 absolute sm:w-[80%] bottom-1 left-5 right-5 px-1 py-2 w-112.5 lg:w-175">

      <h1 className="text-[42px] font-['Cormorant_Garamond'] leading-none md:text-[64px] text-white mb-2 wrap-break-words">
       {project.title}
      </h1>

      <p className="text-[14px] font-['inter'] leading-tight md:text-[18px] text-white">
       {project.text}
      </p>

    </div>

  </section>
      </a>
    ))}

</div>
  </>
)
}

export default Work
