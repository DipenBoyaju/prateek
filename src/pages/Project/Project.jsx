import { TbArrowRightDashed } from "react-icons/tb"
import Title from "../../components/Title"
import { useNavigate } from "react-router-dom"
import NewsLetter from "../../components/NewsLetter"

const Project = () => {
  const nav = useNavigate()
  return (
    <div>
      <Title tag={"Project"} title="Our Projects" />
      <div className="container mx-auto py-20">
        <div className="grid sm:grid-cols-10 gap-10">
          <div className="col-span-6 w-full h-[60vh] border border-white/10 p-4">
            <div className="bg-zinc-900 w-full h-full grid grid-cols-6">
              <div className="col-span-4 border-r border-white/10"></div>
              <div className="col-span-2"></div>
            </div>
          </div>
          <div className="col-span-4 h-full flex flex-col">
            <h2 className="text-3xl font-geist tracking-wider font-bold text-primary">Nepali Sign Language Detection</h2>
            <p className="font-ubuntu mt-5 text-white/50 text-lg">Use AI-powered sign language detection to translate Nepali sign gestures in real-time.</p>
            <div className="mt-auto">
              <div className="w-fit mt-12 cursor-pointer">
                <div className="bg-primary p-4 rounded-full pl-6">
                  <button className=" text-darkBlack font-medium uppercase text-base font-geist flex items-center cursor-pointer group w-fit overflow-hidden relative pr-10" onClick={() => nav('/about')}>
                    Try Our Demo

                    {/* First Arrow (Visible Initially) */}
                    <TbArrowRightDashed
                      size={20}
                      className="absolute right-2 transition-all duration-300 transform group-hover:translate-x-4 group-hover:opacity-0 opacity-100"
                    />

                    {/* Second Arrow (Hidden Initially) */}
                    <TbArrowRightDashed
                      size={20}
                      className="absolute right-2 transition-all duration-300 transform translate-x-[-12px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NewsLetter />
    </div>
  )
}
export default Project