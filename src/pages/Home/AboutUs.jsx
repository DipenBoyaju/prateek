const AboutUs = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-5"></div>
          <div className="col-span-7">
            <div className="border border-white/40 rounded-full w-fit text-sm py-1 px-5 flex items-center gap-2 uppercase font-geist tracking-wider text-white/60"><img src="/dots.png" alt="" />About Us</div>
            <p className="font-ubuntu text-2xl font-light leading-8 mt-6">Prateek AI is an AI R&D hub dedicated to empowering differently abled and underserved communities through inclusive, innovative and ethical AI solutions. With a focus on accessibility, inclusion, and real-world impact, we conduct deep interdisciplinary research and engineering in areas like sign language translation, cognitive support, and AI companionship, among many.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AboutUs