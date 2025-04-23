import Title from "../../components/Title"
import Contributors from "./Contributors"
import TeamCard from "./TeamCard"

const teamList = [
  {
    id: 1,
    name: 'Sarah Brown',
    role: 'Co-Founder',
    image: '/img1.png'
  },
  {
    id: 2,
    name: 'Michael Anderson',
    role: 'Software Engineer',
    image: '/img2.png'
  },
  {
    id: 3,
    name: 'William Foster',
    role: 'Marketing Specialist',
    image: '/img3.png'
  },
  {
    id: 4,
    name: 'Emily Adams',
    role: 'Data Analyst',
    image: '/img4.png'
  }
]

const Team = () => {
  return (
    <div>
      <Title tag="Team Members" title="Meet Our Team" />
      <div className="container mx-auto py-20 px-4 md:px-0">
        <div className="md:w-3/5 mx-auto">
          <p className="text-center text-darkBlack text-2xl md:text-3xl font-ubuntu leading-8 md:leading-10">
            <span className="bg-secondary px-2 rounded">
              Meet the talented and passionate team members who drive our company forward every day.
            </span>
          </p>
        </div>
        <div className="py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {
            teamList.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))
          }
        </div>
      </div>
      <Contributors />
    </div>
  )
}
export default Team