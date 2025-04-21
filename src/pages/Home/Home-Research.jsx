import { TbArrowRightDashed } from "react-icons/tb"
import Button from "../../components/shared/Button"
import { Battery, Boxes, CircuitBoard, Cpu, Database, Gem, Link, Quote } from "lucide-react"

const HomeResearch = () => {
  return (
    <div className="border-t border-b border-white/20">
      <div className="container mx-auto">
        <div className="grid grid-cols-11">
          <div className="col-span-5 border-r border-white/20">
            <div className="py-10 border-b border-white/20">
              <p className="text-[12px] font-geist uppercase tracking-wider text-secondary mb-10">Research</p>
              <p className="text-2xl font-ubuntu w-2/3"><span className="uppercase font-bold text-primary text-3xl">Prateek</span> conduct deep, interdisciplinary research in AI and technology to explore new frontiers in physical, mental, and social support.</p>

              <div className="w-fit mt-8">
                <div className="bg-primary p-4 rounded-full pl-6">
                  <button className=" text-darkBlack font-medium uppercase text-base font-geist flex items-center cursor-pointer group w-fit overflow-hidden relative pr-10">
                    Case Study

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
            <div className="py-10">
              <Quote className="rotate-180 text-secondary" size={18} strokeWidth={1} />
              <p className="font-ubuntu text-2xl w-2/3 mt-8">To create a future where inclusion is designed, and accessibility is the norm not the exception.</p>
              <div className="flex gap-3 mt-14">
                <Cpu strokeWidth={1} className="text-cyan-400 animate-spin" />
                <Battery strokeWidth={1} className="text-secondary animate-bounce" />
                <CircuitBoard strokeWidth={1} className="text-yellow-300 animate-bounce" />
                <Boxes strokeWidth={1} className="text-white/40 animate-pulse" />
                <Database strokeWidth={1} className="text-orange-500 animate-bounce" />
                <Gem strokeWidth={1} className="text-red-500 animate-bounce" />
                <Link strokeWidth={1} className="text-pink-500 animate-spin" />
              </div>
            </div>
          </div>
          <div className="col-span-6 py-6 pl-6">
            <div className=" w-full h-full">
              <img src="/flow-bg.webp" alt="" />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
export default HomeResearch