import { MoveUpRight } from "lucide-react"

const ResearchCard = ({ item }) => {
  return (
    <div className="p-5 md:p-10 flex flex-col gap-8 md:gap-20 hover:bg-zinc-900/40 h-full group cursor-pointer">
      <div className="flex items-center justify-between">
        <div className="border border-white/30 py-1 px-4 w-fit rounded-full">
          <p className="text-sm font-geist text-primary/30 tracking-wider">00{item.id}</p>
        </div>
        <div className=" group-hover:inline-block bg-primary text-darkBlack px-4 py-1 rounded-full hidden">
          <MoveUpRight strokeWidth={1} className="" size={20} />
        </div>
      </div>
      <div className="w-full bg-zinc-800 h-[35vh] md:h-[50vh]"></div>
      <div className="">
        <h2 className="text-2xl font-geist font-semibold text-primary tracking-wide leading-8">{item.title}</h2>
        <p className="font-ubuntu text-base text-primary/40 pt-3">{item.description}</p>
      </div>
    </div>
  )
}
export default ResearchCard