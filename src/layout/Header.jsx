import { CiLinkedin } from "react-icons/ci";
import Navbar from "../components/Navbar"
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { SlSocialFacebook } from "react-icons/sl";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b py-3 md:py-5 border-white/10 px-4 md:px-0">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="">
            <p className="uppercase font-ubuntu font-semibold tracking-wider text-secondary text-lg">Prateek</p>
          </div>

          <div className={`bg-darkBlack/90 fixed md:relative md:bg-transparent inset-x-0 top-14 md:top-0 transition-all duration-500 ease-in-out  ${showMenu
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 md:opacity-100 md:translate-y-0 -translate-y-5 pointer-events-none md:pointer-events-auto'}`}>
            <Navbar onLinkClick={() => setShowMenu(false)} />
          </div>
          <div className="hidden md:inline-block">
            <ul className="flex items gap-3 items-center border-[1px] border-white/20 rounded-full px-6 py-1 text-white/70">
              <li><FaFacebookF size={16} /></li>
              <li><FaInstagram size={20} /></li>
              <li><CiLinkedin size={20} /></li>
            </ul>
          </div>
          <button className="md:hidden bg-zinc-950 border border-white/30 p-2 rounded-3xl" onClick={() => setShowMenu(prev => !prev)}>
            <HiOutlineMenuAlt3 className="text-white text-xl" />
          </button>
        </div>
      </div>
    </header>
  )
}
export default Header