import { MoveRight } from "lucide-react"
import { Link } from "react-router-dom"

const Articles = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto">
        <h1 className="font-ubuntu tracking-wider text-5xl text-primary leading-14">Our Latest <br />Articles</h1>
        <div className="flex gap-20 items-center">
          <p className="text-white/60 pt-4">Explore the insights and trends shaping our industry</p>
          <Link to={'/blog'} className="flex items-center gap-2 text-lg text-secondary/80">See all articles <MoveRight /></Link>
        </div>
      </div>
    </div>
  )
}
export default Articles