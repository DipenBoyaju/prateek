import { Link } from "react-router-dom"

const Navbar = ({ onLinkClick }) => {
  const linkStyle = `relative after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-[-27px] after:h-[1px] after:bg-primary/30 after:opacity-0 after:transition-opacity after:duration-500 hover:after:opacity-100 hover:text-primary transition-colors duration-300 ease-in-out uppercase cursor-pointer`

  const handleClick = () => {
    if (window.innerWidth < 768 && onLinkClick) {
      onLinkClick();
    }
  };

  return (
    <nav className="font-geist text-[12px] text-white/80 uppercase font-semibold gap-10 md:gap-20 flex flex-col md:flex-row tracking-widest py-5 md:py-0 px-4 md:px-0">
      <Link to={'/'} onClick={handleClick} className={`${linkStyle}`}
      >Home</Link>
      <Link to={'/about'} onClick={handleClick} className={`${linkStyle}`}>About</Link>
      <Link to={'/research'} onClick={handleClick} className={`${linkStyle}`}>Research</Link>
      <Link to={'/team'} onClick={handleClick} className={`${linkStyle}`}>Team</Link>
      <Link to={'/project'} onClick={handleClick} className={`${linkStyle}`}>Project</Link>
      <Link to={'/contact'} onClick={handleClick} className={`${linkStyle}`}>Contact</Link>
      {/* <Link to={''} className={`${linkStyle}`}>Updates</Link> */}

      <div className="relative group uppercase">
        <button className={`${linkStyle}`}>Updates</button>
        <div className="relative md:absolute top-4 left-0 hidden group-hover:flex flex-col bg-darkBlack rounded-md shadow-lg p-2 text-white/90 z-50 min-w-[150px] transition-all ease-in-out duration-500 ">
          <Link to="/blog" onClick={handleClick} className="px-3 py-2 text-xs hover:text-primary transition-colors duration-200 hover:bg-zinc-800">Blog</Link>
          <Link to="/news" onClick={handleClick} className="px-3 py-2 text-xs hover:text-primary transition-colors duration-200 hover:bg-zinc-800">News</Link>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
