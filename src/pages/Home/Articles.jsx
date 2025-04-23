import { MoveRight } from "lucide-react"
import { Link } from "react-router-dom"
import ArticleCard from "./ArticleCard"

const Articles = () => {
  return (
    <div className="py-20 px-4 md:px-0">
      <div className="container mx-auto">
        <h1 className="font-ubuntu tracking-wider text-4xl md:text-5xl text-primary leading-14">Our Latest <br className="hidden md:block" />Articles</h1>
        <div className="flex flex-col md:flex-row gap-5 md:gap-72 items-start md:items-center">
          <p className="text-white/60 pt-4">Explore the insights and trends shaping our industry</p>
          <Link to={'/blog'} className="flex items-center gap-2 text-lg text-secondary/80">See all articles <MoveRight /></Link>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-10 mt-8">
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </div>
      </div>
    </div>
  )
}
export default Articles