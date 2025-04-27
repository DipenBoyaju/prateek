import NewsLetter from "../../components/NewsLetter"
import Title from "../../components/Title"
import ResearchCard from "./ResearchCard"

const researchList = [
  {
    id: 1,
    title: "Center for Human Mobility and Communication.",
    description: "Researches on innovating and pushing the boundaries of physical aids and systems like Sign Language Translation, Blind aids, advanced prosthetics among many."
  },
  {
    id: 2,
    title: "Center for Cognitive and Emotional Intelligence.",
    description: "Focuses on AI for cognitive support, mental health, and emotional well-being. The team works on emotional intelligence and support aids, exploring mental health use cases like therapy bots or cognitive assistants while Psychologists and behavioral scientists to ensure AI solutions are psychologically sound."
  },
  {
    id: 3,
    title: "Center for Companion and Care Technologies.",
    description: "Focuses on AI companions for elderly care, social interaction, and assistance for those with limited mobility, social interaction, empathy, and companionship among others. The team will also collaborate with healthcare professionals to guide development based on real needs."
  }
]
const Research = () => {
  return (
    <div className="relative">
      <Title tag={"Research"} title="Research Wing" />
      <div className="container mx-auto py-20">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 border border-white/10">
          {
            researchList.map((item, index) => (
              <div className={index === 1 ? "border-x border-white/10" : ""} key={item.id}>
                <ResearchCard item={item} />
              </div>
            ))
          }
        </div>
      </div>
      <NewsLetter />
    </div>
  )
}
export default Research