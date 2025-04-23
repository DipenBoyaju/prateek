import { CiLinkedin } from "react-icons/ci";
import Navbar from "../components/Navbar"
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { SlSocialFacebook } from "react-icons/sl";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b py-3 md:py-5 border-white/10 px-4 md:px-0">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="">
            <p className="uppercase font-ubuntu font-semibold tracking-wider text-secondary text-lg">Prateek</p>
          </div>
          <div className="absolute md:relative top-16 md:top-0 backdrop-blur-2xl pt-5 px-4 md:px-0 md:pt-0 w-full md:w-auto left-0">
            <Navbar />
          </div>
          <div className="hidden md:inline-block">
            <ul className="flex items gap-3 items-center border-[1px] border-white/20 rounded-full px-6 py-1 text-white/70">
              <li><FaFacebookF size={16} /></li>
              <li><FaInstagram size={20} /></li>
              <li><CiLinkedin size={20} /></li>
            </ul>
          </div>
          <div className="md:hidden bg-zinc-950 border border-white/30 p-2 rounded-3xl">
            <HiOutlineMenuAlt3 className="text-white text-xl" />
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header