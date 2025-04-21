const NewsLetter = () => {
  return (
    <div className="pt-12 pb-20">
      <div className="container mx-auto text-center">
        <div className="bg-zinc-900/30 w-fit mx-auto p-10 px-20 border border-zinc-950/50 rounded-md">
          <p className="text-[12px] font-geist uppercase tracking-wider text-secondary">Stay Updated</p>
          <h2 className="text-5xl text-primary font-ubuntu tracking-wider mt-2">Subscribe to our Newsletter!</h2>
          <div className="bg-zinc-900 w-fit mx-auto mt-8 rounded-full">
            <form action="" className="p-3 gap-2 flex items-center ">
              <input type="email" className="w-[40vw] h-[50px] rounded-full focus:outline-none pl-4 font-ubuntu text-white/60 text-xl" placeholder="Enter your mail..." required />
              <button className="bg-secondary text-darkBlack text-base font-geist py-4 px-8 rounded-full hover:bg-secondary/80 cursor-pointer transition-colors ease-in-out duration-300">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default NewsLetter