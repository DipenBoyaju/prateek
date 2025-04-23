import { GoDotFill } from "react-icons/go"

const BlogCard = () => {
  return (
    <div className="hover:bg-zinc-800/20 px-8 py-10 transition-all ease-in-out duration-300 cursor-pointer">
      <div className="flex gap-2 items-center font-geist text-[12px] tracking-wider font-medium uppercase ">
        <p className="text-primary/80">Author Name</p>
        <GoDotFill size={10} className="text-white/40" />
        <p className="text-white/40">Apr 18, 2025</p>
      </div>
      <div className="w-full h-[200px] bg-zinc-800 my-10"></div>
      <h2 className="text-2xl md:text-4xl">Why Consistent Brand Identity is Key to Business Success</h2>
      <div className="mt-8 uppercase text-[12px] font-medium gap-10 tracking-wider text-white/80">
        <div className="grid grid-cols-4">
          <div className="col-span-3">
            <ul className="flex gap-1 text-secondary">
              <li>Business,</li>
              <li>Technology</li>
            </ul>
          </div>
          <div className="col-span-1">
            Read More
          </div>
        </div>
      </div>
    </div>
  )
}
export default BlogCard