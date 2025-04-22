import NewsLetter from "../../components/NewsLetter"
import Title from "../../components/Title"
import MissionVision from "./MissionVision"

const About = () => {
  return (
    <div className="relative">
      <Title tag={"about"} title="About Us" />
      <div className="container mx-auto">
        <div className="py-20">
          <p className="font-ubuntu tracking-wider text-primary text-xl">Prateek AI is an AI R&D hub dedicated to empowering differently abled and underserved communities through inclusive, innovative and ethical AI solutions. With a focus on accessibility, inclusion, and real-world impact, we conduct deep interdisciplinary research and engineering in areas like sign language translation, cognitive support, and AI companionship, among many. Rooted in Nepal, we aim to create technologies that are accessible, affordable, and built with empathy, ensuring that every person, regardless of ability, has the tools to live with dignity and independence.</p>
        </div>
        <div className="py-20">
          <MissionVision />
        </div>
      </div>
      <NewsLetter />
    </div >
  )
}
export default About