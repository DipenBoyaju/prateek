import { CiLinkedin } from "react-icons/ci";
import Navbar from "../components/Navbar"
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { SlSocialFacebook } from "react-icons/sl";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b py-5 border-white/10">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="">
            <p className="">Prateek</p>
          </div>
          <div className="">
            <Navbar />
          </div>
          <div className="">
            <ul className="flex items gap-3 items-center border-[1px] border-white/20 rounded-full px-6 py-1 text-white/70">
              <li><FaFacebookF size={16} /></li>
              <li><FaInstagram size={20} /></li>
              <li><CiLinkedin size={20} /></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header