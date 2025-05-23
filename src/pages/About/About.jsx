import { BicepsFlexed, Blocks, Earth, LibraryBig, Sprout } from "lucide-react"
import NewsLetter from "../../components/NewsLetter"
import Title from "../../components/Title"
import MissionVision from "./MissionVision"

const About = () => {
  return (
    <div className="relative">
      <Title tag={"about"} title="About Us" />
      <div className="container mx-auto">
        <div className="py-20 px-4 md:px-0">
          <p className="font-ubuntu tracking-wider text-primary text-xl">Prateek AI is an AI R&D hub dedicated to empowering differently abled and underserved communities through inclusive, innovative and ethical AI solutions. With a focus on accessibility, inclusion, and real-world impact, we conduct deep interdisciplinary research and engineering in areas like sign language translation, cognitive support, and AI companionship, among many. Rooted in Nepal, we aim to create technologies that are accessible, affordable, and built with empathy, ensuring that every person, regardless of ability, has the tools to live with dignity and independence.</p>
        </div>
        <div className="py-10 md:py-20 px-2 md:px-0">
          <MissionVision />
        </div>
        <div className="py-20 px-4 md:px-0">
          <div className="grid md:grid-cols-2">
            <div className="border-b grid md:grid-cols-10 py-12 md:pr-5 border-white/10 gap-10">
              <div className="md:col-span-5 flex gap-3">
                <LibraryBig strokeWidth={1} className="text-secondary" size={30} />
                <h4 className="font-geist text-primary tracking-wide font-light">Research with Purpose</h4>
              </div>
              <p className="md:col-span-5 font-ubuntu text-base tracking-wider text-primary/80 font-light text-justify">We conduct deep, interdisciplinary research in AI and technology to explore new frontiers in physical, mental, and social support focusing on what truly matters to the people we serve.
              </p>
            </div>
            <div className="border-b border-white/10 grid md:grid-cols-10 py-12 md:pl-5 gap-10">
              <div className="md:col-span-5 flex gap-3">
                <Blocks strokeWidth={1} className="text-cyan-300" size={30} />
                <h4 className="font-geist text-primary tracking-wide font-light">Build for Impact</h4>
              </div>
              <p className="md:col-span-5 font-ubuntu text-base tracking-wider text-primary/80 font-light text-justify">We engineer accessible and affordable technologies that make a measurable difference in real lives not just in labs or papers.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2">
            <div className="border-b grid md:grid-cols-10 py-12 pr-5 border-white/10 gap-10">
              <div className="md:col-span-5 flex gap-3">
                <BicepsFlexed strokeWidth={1} className="text-purple-400" size={30} />
                <h4 className="font-geist text-primary tracking-wide font-light">Empower Through Inclusion</h4>
              </div>
              <p className="md:col-span-5 font-ubuntu text-base tracking-wider text-primary/80 font-light text-justify">We design with, not just for, differently abled individuals ensuring our tools restore dignity, independence, and opportunity.
              </p>
            </div>
            <div className="border-b border-white/10 grid md:grid-cols-10 py-12 md:pl-5 gap-10">
              <div className="md:col-span-5 flex gap-3">
                <Sprout strokeWidth={1} className="text-emerald-400" size={30} />
                <h4 className="font-geist text-primary tracking-wide font-light">Lead Ethically and Openly</h4>
              </div>
              <p className="md:col-span-5 font-ubuntu text-base tracking-wider text-primary/80 font-light text-justify">We champion transparency, ethics, and openness sharing knowledge to accelerate global progress and serve the greater good.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2">
            <div className="border-b grid md:grid-cols-10 py-12 md:pr-5 border-white/10 gap-10">
              <div className="md:col-span-5 flex gap-3">
                <Earth strokeWidth={1} className="text-yellow-300" size={30} />
                <h4 className="font-geist text-primary tracking-wide font-light">From Nepal to the World</h4>
              </div>
              <p className="md:col-span-5 font-ubuntu text-base tracking-wider text-primary/80 font-light text-justify">Rooted in Nepal, we aim to become a global force in inclusive innovation proving that powerful ideas can come from anywhere, for everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
      <NewsLetter />
    </div >
  )
}
export default About