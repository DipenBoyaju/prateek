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
          <div className="w-full h-[500px] bg-zinc-800"></div>
          <div className=""></div>
        </div>
      </div>
    </div>
  )
}
export default HomeProject