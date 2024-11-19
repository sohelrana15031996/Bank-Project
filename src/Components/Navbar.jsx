import { useState } from 'react';
import { logo } from '../assets';
import { navLinks } from '../constants/constant';
import { RiMenu2Fill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {

  return (
    <>
      <nav className={`w-full flex justify-between items-center py-6`}>
        <img src={logo} alt="" className='h-8' />
        <ul className="list-none sm:flex hidden justify-end items-center flex-1 gap-4">
          {navLinks.map((navlink) => (<li
            key={navlink.id}
            className='font-poppins cursor-pointer text-white'
          >{navlink.title}</li>))}
        </ul>
        
        
      </nav>
    </>
  );
};

export default Navbar;