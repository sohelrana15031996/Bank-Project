import { useState } from 'react';
import { logo } from '../assets';
import { navLinks } from '../constants/constant';
import { RiMenu2Fill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <nav className={`w-full flex justify-between items-center py-6`}>
        <img src={logo} alt="" className='h-8' />
        <ul className="list-none sm:flex hidden justify-end items-center flex-1 gap-4">
          {navLinks.map((navlink) => (<li
            key={navlink.id}
            className='font-poppins cursor-pointer text-white'
          >
            <a href={`#${navlink.id}`}>
              {navlink.title}
            </a>
          </li>))}
        </ul>
        <button

          className='sm:hidden block text-white'
          onClick={() => setToggle((prev) => !prev)}
        >
          {
            toggle ? <RiMenu2Fill /> : <RxCross1 />
          }
        </button>

        <div className={`sm:hidden ${toggle ? 'hidden' : 'flex'} bg-black-gradient p-6 min-w-[140px] absolute top-20 right-0 mx-4 my-2 rounded-xl sidebar`}>
          <div className="">
            <ul className="list-none flex flex-col justify-start  flex-1 gap-4">
              {navLinks.map((navlink) => (<li
                key={navlink.id}
                className='font-poppins cursor-pointer text-white'
              >
                <a href={`#${navlink.id}`}>
                  {navlink.title}
                </a>
              </li>))}
            </ul>
          </div>
        </div>

      </nav>
    </>
  );
};

export default Navbar;