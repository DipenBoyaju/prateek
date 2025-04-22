import { TbArrowRightDashed } from "react-icons/tb"
import { useNavigate } from "react-router-dom"

const AboutUs = () => {
  const nav = useNavigate()
  return (
    <div className="py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-5">
            <div className="bg-darkBlack w-full overflow-hidden relative h-[500px]">
              <div className="">
                <div className="absolute bg-secondary h-full w-full rounded-tl-[50%] rounded-br-[50%] left-0"></div>
                {/* leftsife */}
                <div className="absolute bg-gradient-to-b from-secondary via-secondary to-darkBlack h-full w-1"></div>
                <div className="absolute bg-gradient-to-b from-secondary via-secondary to-darkBlack h-full w-1 left-2"></div>
                <div className="absolute bg-gradient-to-b from-secondary via-secondary to-darkBlack h-full w-1 left-4"></div>
                <div className="absolute bg-gradient-to-b from-secondary via-secondary to-darkBlack h-full w-1 left-6"></div>
                <div className="absolute bg-gradient-to-b from-secondary via-secondary to-darkBlack h-full w-1 left-8"></div>
                <div className="absolute bg-gradient-to-b from-secondary via-secondary to-darkBlack h-full w-1 left-10"></div>

                {/* topside */}
                {/* <div className="absolute bg-gradient-to-r from-secondary via-secondary to-darkBlack h-1 w-full left-0 top-0"></div>
                <div className="absolute bg-gradient-to-r from-secondary via-secondary to-darkBlack h-1 w-full left-0 top-2"></div>
                <div className="absolute bg-gradient-to-r from-secondary via-secondary to-darkBlack h-1 w-full left-0 top-4"></div>
                <div className="absolute bg-gradient-to-r from-secondary via-secondary to-darkBlack h-1 w-full left-0 top-6"></div>
                <div className="absolute bg-gradient-to-r from-secondary via-secondary to-darkBlack h-1 w-full left-0 top-8"></div> */}

                {/* rightside */}
                <div className="absolute bg-gradient-to-b from-darkBlack via-secondary to-secondary h-full w-1 right-0"></div>
                <div className="absolute bg-gradient-to-b from-darkBlack via-secondary to-secondary h-full w-1 right-2"></div>
                <div className="absolute bg-gradient-to-b from-darkBlack via-secondary to-secondary h-full w-1 right-4"></div>
                <div className="absolute bg-gradient-to-b from-darkBlack via-secondary to-secondary h-full w-1 right-6"></div>
                <div className="absolute bg-gradient-to-b from-darkBlack via-secondary to-secondary h-full w-1 right-8"></div>
                <div className="absolute bg-gradient-to-b from-darkBlack via-secondary to-secondary h-full w-1 right-10"></div>
              </div>
              <img src="/flow-bg.webp" alt="" className="min-w-[700px] scale-150 object-top-left h-full" />
            </div>
          </div>
          <div className="col-span-7">
            <p className="text-[12px] font-geist uppercase tracking-wider text-secondary mb-10">About</p>
            <p className="font-ubuntu text-3xl font-light leading-10 mt-6">Prateek AI is an AI R&D hub dedicated to empowering differently abled and underserved communities through inclusive, innovative and ethical AI solutions. With a focus on accessibility, inclusion, and real-world impact, we conduct deep interdisciplinary research and engineering in areas like sign language translation, cognitive support, and AI companionship, among many.</p>
            <div className="w-fit mt-12">
              <div className="bg-primary p-4 rounded-full pl-6">
                <button className=" text-darkBlack font-medium uppercase text-base font-geist flex items-center cursor-pointer group w-fit overflow-hidden relative pr-10" onClick={() => nav('/about')}>
                  More About Us

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
  )
}
export default AboutUs