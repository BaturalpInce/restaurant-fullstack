import React from 'react';
import Logo from './img/logo.png';
import { SearchbarCustom } from './SearchbarCustom';
import { MdFacebook, MdEmail, MdFace } from "react-icons/md";

export const Header = () => {
  return (
    <header className="fixed z-50 w-screen">
        {/*desktop and table */}
        <div className="hidden md:flex w-full h-full items-center justify-between p-6 px-16 bg-slate-300">
            <div className="flex items-center gap-2">
                <img src={Logo} className="w-10 object-cover" alt="logo"/>
                <p className="text-headingColor text-xl font-bold">Mr. Burger</p>
            </div>
            <ul className="flex items-center gap-8">
                <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Home</li>
                <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Menu</li>
                <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">About</li>
                <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Contact</li>
            </ul>
          <div>
            <SearchbarCustom />
          </div>
        </div>
        {/* mobile */}
        <div className="flex md:hidden w-full h-full p-6 px-8 bg-slate-300 justify-between">
          <img src={Logo} className="w-10 object-cover" alt="logo"/>
          <SearchbarCustom />
          <h1>dropdown menu</h1>


        </div>
    </header>
  )
}

