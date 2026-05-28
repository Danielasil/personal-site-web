import PortfolioButton from "./PortfolioButton"

function Skills() {

 return (
  <>
        <div id="skills" className="bg-black flex flex-col items-center px-5 text-white font-['Inter']">
          <div className=" flex flex-col items-center justify-between w-full mt-40 gap-6 md:flex-row">
{/*Header Skills*/}
  <div className="cursor-default flex w-full max-w-170 h-fit items-center justify-start text-left mb-10 md:mb-0">
    <h1 className="text-left text-[18px]">
      I am a designer and frontend developer, so my skills are varied, but they fall into this main categories.
    </h1>
  </div>

 <PortfolioButton/>

</div>
            
          
{/*Skills*/}
  <div className="cursor-default w-full flex flex-col gap-17.5 mt-19.75 mb-37.5 lg:flex-row text-[18px]">

    <div className="flex flex-col gap-8.75 w-full lg:w-137.5">
    <h1>Ux/Ui Design</h1>
<p className="text-white/80">Using Figma and Webflow to explore and create user flows, wireframes, and high-fidelity screens for web and apps.</p>
 
    </div> 

    <div className="flex flex-col gap-8.75 w-full lg:w-137.5">
    <h1>Graphic Design</h1>
<p className="text-white/80">Using Photoshop, Illustrator, and InDesign to design everything from Illustrations, editorial design,  packaging to full corporate brands.</p>
 
    </div> 

    <div className="flex flex-col gap-8.75 w-full lg:w-137.5">
    <h1>Front-End Development</h1>
<p className="text-white/80">Using React, Html, js, css, Next.js, and typescript to build interfaces and front-end systems depending on the needs of the project</p>
 
    </div>
    
    </div>
        </div>


  </>
)
}

export default Skills
