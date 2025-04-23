const TeamCard = ({ member }) => {
  return (
    <div className="bg-black/30 rounded-lg overflow-hidden cursor-pointer hover:bg-primary transition-colors ease-in-out duration-500 group flex flex-col justify-between h-full">
      <div className="pt-5 pl-5">
        <h2 className="font-geist tracking-wider font-medium text-primary text-lg group-hover:text-darkBlack">
          {member.name}
        </h2>
        <p className="font-ubuntu pl-3 pt-2 text-secondary">{member.role}</p>
      </div>
      <div className="mt-4">
        <img src={`${member.image}`} alt="" className="w-full object-cover" />
      </div>
    </div>
  );
};

export default TeamCard