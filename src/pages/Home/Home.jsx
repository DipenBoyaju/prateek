import AboutUs from "./AboutUs"
import Articles from "./Articles"
import FAQSection from "./FaqSection"
import Hero from "./Hero"
import HomeProject from "./Home-Project"
import HomeResearch from "./Home-Research"
import NewsLetter from "../../components/NewsLetter"
import CoreValues from "./CoreValue"

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <CoreValues />
      <HomeResearch />
      <HomeProject />
      <Articles />
      <FAQSection />
      <NewsLetter />
    </div>
  )
}
export default Home