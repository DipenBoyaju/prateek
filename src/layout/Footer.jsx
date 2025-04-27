import { TiArrowRight } from "react-icons/ti"
import { Link } from "react-router-dom"

const Footer = () => {

  const arrowStyle = 'size-5 -translate-x-3 absolute group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-500';

  const linkStyle = 'hover:text-primary transition-all ease-in-out duration-500 group-hover:translate-x-5';

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div style={{ backgroundImage: 'url("./line-bg.png")', backgroundRepeat: 'no-repeat', backgroundPosition: 'top center', }}>
      <div className="container mx-auto px-4 md:px-0">
        <div className="md:grid md:grid-cols-12 border-b border-white/10 py-14 md:py-24">
          <div className="col-span-12 md:col-span-7">
            <p className="uppercase text-2xl font-bold font-ubuntu text-secondary">Prateek</p>
            <p className="text-white/30 md:w-2/3 mt-8">Prateek AI is an AI R&D hub dedicated to empowering differently abled and underserved communities through inclusive, innovative and ethical AI solutions. </p>
          </div>
          <div className="md:col-span-5 mt-8 md:mt-0">
            <div className="grid grid-cols-3">
              <div className="">
                <h3 className=" text-white/40 font-geist tracking-wider text-sm uppercase font-medium">Projects</h3>
                <ul className="mt-3 uppercase font-[400] font-ubuntu text-primary/70 text-sm space-y-3">
                  <li className="flex gap-1 items-center group">
                    <TiArrowRight className={`${arrowStyle}`} />
                    <Link to={'/signlanguage'} className={`${linkStyle}`}>Sign Language</Link>
                  </li>
                </ul>
              </div>
              <div className="">
                <h3 className=" text-white/40 font-geist tracking-wider text-sm uppercase font-medium">Company</h3>
                <ul className="mt-3 uppercase font-[400] font-ubuntu text-primary/70 text-sm space-y-3">
                  <li className="flex gap-1 items-center group">
                    <TiArrowRight className={`${arrowStyle}`} />
                    <Link to={'/about'} className={`${linkStyle}`}>About Us</Link>
                  </li>
                  <li className="flex gap-1 items-center group">
                    <TiArrowRight className={`${arrowStyle}`} />
                    <Link to={'/research'} className={`${linkStyle}`}>Research</Link>
                  </li>
                  <li className="flex gap-1 items-center group">
                    <TiArrowRight className={`${arrowStyle}`} />
                    <Link to={'/team'} className={`${linkStyle}`}>Team</Link>
                  </li>
                  <li className="flex gap-1 items-center group">
                    <TiArrowRight className={`${arrowStyle}`} />
                    <Link to={'/project'} className={`${linkStyle}`}>Project</Link>
                  </li>
                  <li className="flex gap-1 items-center group">
                    <TiArrowRight className={`${arrowStyle}`} />
                    <Link to={'/blog'} className={`${linkStyle}`}>Blog</Link>
                  </li>
                  <li className="flex gap-1 items-center group">
                    <TiArrowRight className={`${arrowStyle}`} />
                    <Link to={'/contact'} className={`${linkStyle}`}>Contact</Link>
                  </li>
                </ul>
              </div>
              <div className="">
                <h3 className=" text-white/40 font-geist tracking-wider text-sm uppercase font-medium">Legal</h3>
                <ul className="mt-3 uppercase font-[400] font-ubuntu text-primary/70 text-sm space-y-3">
                  <li className="flex gap-1 items-center group">
                    <TiArrowRight className={`${arrowStyle}`} />
                    <Link to={'/'} className={`${linkStyle}`}>Privacy Policy</Link>
                  </li>
                  <li className="flex gap-1 items-center group">
                    <TiArrowRight className={`${arrowStyle}`} />
                    <Link to={'/'} className={`${linkStyle}`}>Terms</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="py-4 md:py-8 flex flex-col md:flex md:flex-row justify-between items-center">
          <p className="uppercase text-[12px] text-white/40 font-ubuntu tracking-wider">© 2025 <span className="text-secondary">Prateek</span>. All rights reserved.</p>
          <p className="text-white/30 font-geist text-sm cursor-pointer hover:text-secondary transition-colors ease-in-out duration-300" onClick={scrollTop}>Back to Top</p>
        </div>
      </div>
    </div>
  )
}
export default Footer