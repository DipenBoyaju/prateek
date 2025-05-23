const MissionVision = () => {
  return (
    <div className="grid md:grid-cols-2 md:gap-0 gap-8">
      <div className="md:border-r border-white/20 md:text-right">
        <div className="md:w-4/5 md:ml-auto md:pr-8">
          <p className="text-[12px] font-geist uppercase tracking-wider text-secondary md:mb-10 mb-5">Vision</p>
          <h3 className="font-geist text-lg md:text-2xl text-primary font-semibold tracking-wide leading-9">To create a future where inclusion is designed, and accessibility is the norm not the exception.</h3>
          <p className="mt-5 font-ubuntu text-white/60 tracking-wide leading-7">| We aim for a world where inclusion is intentional, and accessibility is standard—where every human, regardless of ability, is considered by default in how we build our technologies and societies. | </p></div>
      </div>
      <div className="md:pl-8">
        <div className="md:w-4/5">
          <p className="text-[12px] font-geist uppercase tracking-wider text-secondary md:mb-10 mb-5">Mission</p>
          <p className="mt-5 font-ubuntu text-primary/80 tracking-wider leading-10 text-xl md:text-3xl">To become a global AI R&D hub focused on empowering differently abled and underserved communities through deep research, thoughtful engineering, and real-world innovation.</p>
        </div>
      </div>
    </div>
  )
}
export default MissionVision