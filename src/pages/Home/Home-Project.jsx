import { TbArrowRightDashed } from "react-icons/tb"

const HomeProject = () => {
  return (
    <div className="py-20 relative">
      <div className="dotted-bg absolute inset-0 z-[-1]" />
      <div className="container mx-auto">
        <div className="text-center">
          <p className="text-[12px] font-geist uppercase tracking-wider text-secondary">Projects</p>
          <h3 className="font-ubuntu text-5xl mt-4">Explore Our Projects</h3>
        </div>

        <div className="mt-16 grid grid-cols-3">
          <div className=""></div>
          <div className="w-full h-[500px] bg-zinc-800 p-2 rounded-xl">
            <div className="h-full border border-white/20 hover:border-white/50 cursor-pointer transition-colors ease-in-out duration-500 rounded-lg p-6 flex flex-col group">
              <div className="">
                <h3 className="text-2xl font-geist tracking-wider font-semibold text-secondary">Nepali Sign Language Detection</h3>
              </div>
              <div className="mt-auto">
                <button className="border rounded-full border-white/60 p-2 flex gap-2 items-center font-ubuntu tracking-wide text-white/70 transition-all ease-in-out duration-500 cursor-pointer">
                  <TbArrowRightDashed
                    size={24}
                    className="text-white/60 -rotate-45 group-hover:rotate-0 transition-all ease-in-out duration-500"
                  />
                  <span className="hidden group-hover:inline-block animate-slide-in transition-all ease-in-out duration-500">Learn More</span>
                </button>
              </div>
            </div>
          </div>
          <div className=""></div>
        </div>
      </div>
    </div>
  )
}
export default HomeProject