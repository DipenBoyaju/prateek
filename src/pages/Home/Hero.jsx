import { FaRegHandPaper } from "react-icons/fa"
import { TbArrowRightDashed } from "react-icons/tb"
import { useNavigate } from "react-router-dom"


const Hero = () => {
  const nav = useNavigate()
  return (
    <div className="relative h-full pt-36 pb-20">
      <div className="dotted-bg absolute inset-0 z-[-1]" />
      <div className="w-4/5 mx-auto">
        <h1 className="text-center font-[400] text-5xl leading-16 md:text-8xl md:leading-28">Inclusive by Designed, and Accessibility by Research</h1>
      </div>

      <div className="flex justify-center items-center text-center mt-14 ">
        <div className="bg-secondary p-4 rounded-full pl-12">
          <button onClick={() => nav('/project')} className=" text-darkBlack font-medium uppercase text-base font-geist flex items-center gap-5 cursor-pointer group w-fit overflow-hidden relative pr-14">
            Explore

            {/* First Arrow (Visible Initially) */}
            <TbArrowRightDashed
              size={20}
              className="absolute right-5 transition-all duration-300 transform group-hover:translate-x-4 group-hover:opacity-0 opacity-100"
            />

            {/* Second Arrow (Hidden Initially) */}
            <TbArrowRightDashed
              size={20}
              className="absolute right-5 transition-all duration-300 transform translate-x-[-12px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
            />
          </button>
        </div>
      </div>


      <div className="flex justify-center mt-14">
        <div className=" w-fit border p-3 rounded-full">
          <button onClick={() => nav('/signlanguage')} className="bg-primary text-darkBlack rounded-full py-8 px-14 uppercase font-normal text-xl font-ubuntu flex items-center gap-3 border border-primary hover:bg-transparent cursor-pointer hover:text-primary transition-colors ease-in-out duration-500 group">Try Our Sign Language Demo<FaRegHandPaper className="group-hover:animate-bounce" /></button>
        </div>
      </div>
    </div>
  )
}
export default Hero
