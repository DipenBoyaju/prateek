const Title = ({ title, tag }) => {
  return (
    <div className="relative h-full pt-38 pb-20 border-b-[0.01rem] border-white/10 px-4 md:px-0">
      <div className="dotted-bg absolute inset-0 z-[-1]" />
      <div className="container mx-auto">
        <p className="text-[12px] font-geist uppercase tracking-wider text-secondary">{tag}</p>
        <h1 className="font-ubuntu text-4xl md:text-6xl mt-8">{title}</h1>
      </div>
    </div>
  )
}
export default Title