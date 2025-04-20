import BlogCard from "../../components/BlogCard"
import Title from "../../components/Title"

const Blog = () => {
  return (
    <div>
      <Title tag={"Blog"} title="Latest Blogs" />
      <div className="py-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-3">
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Blog