import { Link } from "react-router-dom"

const Navbar = () => {
  const linkStyle = `relative after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-[-27px] after:h-[1px] after:bg-primary/30 after:opacity-0 after:transition-opacity after:duration-500 hover:after:opacity-100 hover:text-primary transition-colors duration-300 ease-in-out`
  return (
    <nav className="font-geist text-[12px] text-white/80 uppercase font-semibold gap-20 flex tracking-widest h-full">
      <Link to={'/'} className={`${linkStyle}`}
      >Home</Link>
      <Link to={'/about'} className={`${linkStyle}`}>About</Link>
      <Link to={'/'} className={`${linkStyle}`}>Research</Link>
      <Link to={'/team'} className={`${linkStyle}`}>Team</Link>
      <Link to={'/'} className={`${linkStyle}`}>Project</Link>
      <Link to={'/blog'} className={`${linkStyle}`}>Blog</Link>
      <Link to={'/contact'} className={`${linkStyle}`}>Contact</Link>
    </nav>
  )
}
export default Navbar
