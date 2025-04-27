import { Newspaper } from "lucide-react"
import Title from "../../components/Title"

const News = () => {
  return (
    <div>
      <Title tag={"News"} title="Updated News" />
      <div className=""></div>
      <div className="py-10 container mx-auto px-4 md:px-0">
        <div className="border-b border-b-white/20 py-5 flex gap-8">
          <div className="bg-secondary rounded-sm p-2 text-darkBlack h-fit">
            <Newspaper strokeWidth={1} size={20} />
          </div>
          <div className="">
            <p className="font-geist text-sm tracking-wider">15 April, 2025</p>
          </div>
          <div className="font-ubuntu tracking-wider w-2/3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia maxime enim accusantium distinctio culpa rerum ut doloremque commodi! Incidunt voluptates ad ducimus quaerat, libero quae id quas consectetur alias sapiente!</div>
        </div>
        <div className="border-b border-b-white/20 py-5 flex gap-8">
          <div className="bg-secondary rounded-sm p-2 text-darkBlack h-fit">
            <Newspaper strokeWidth={1} size={20} />
          </div>
          <div className="">
            <p className="font-geist text-sm tracking-wider">15 April, 2025</p>
          </div>
          <div className="font-ubuntu tracking-wider w-2/3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia maxime enim accusantium distinctio culpa rerum ut doloremque commodi! Incidunt voluptates ad ducimus quaerat, libero quae id quas consectetur alias sapiente!</div>
        </div>
      </div>
    </div>
  )
}
export default News