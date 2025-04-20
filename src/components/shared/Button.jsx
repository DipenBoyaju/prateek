import { TbArrowRightDashed } from "react-icons/tb"

const Button = () => {
  return (
    <div className="w-fit">
      <div className="bg-secondary p-4 rounded-full pl-12">
        <button className=" text-darkBlack font-normal uppercase text-base font-geist flex items-center gap-5 cursor-pointer group w-fit overflow-hidden relative pr-14">
          Get Started

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
  )
}
export default Button