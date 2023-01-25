import React, {useState} from 'react';
import Logo from './img/logo.png';
import { SearchbarCustom } from './SearchbarCustom';
import { MdFacebook, MdEmail, MdFace, MdMenu } from "react-icons/md";
import "./Header.css"
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const history = useNavigate();
  const [toggle, setToggle] = useState(false); //for dropdown menu

  const handleClickDropdown = (toggle) => {
      console.log(toggle);
      setToggle(!toggle);
      const a = document.querySelector("#arrow");
      if(toggle){
        a.classList.add("rotate-180 duration-300")
      }
      else{
        a.classList.remove("rotate-180 duration-300")
      }

  }
  return (
    <header className="fixed z-50 w-screen">
        {/*desktop and table */}
        <div className="hidden md:flex w-full h-full items-center justify-between p-6 px-16 bg-slate-300">
            <div className="flex items-center gap-2" onClick={()=>{history("/home")}}>
                <img src={Logo} className="w-10 object-cover cursor-pointer" alt="logo"/>
                <p className="text-headingColor text-xl font-bold cursor-pointer">Mr. Burger</p>
            </div>
            <ul className="flex items-center gap-8">
                <li className="text-base text-textColor hover:text-blueSearch duration-100 transition-all ease-in-out cursor-pointer" onClick={()=>{history("/home")}}>Home</li>
                <li className="text-base text-textColor hover:text-blueSearch duration-100 transition-all ease-in-out cursor-pointer" onClick={()=>{history("/menu")}}>Menu</li>
                <li className="text-base text-textColor hover:text-blueSearch duration-100 transition-all ease-in-out cursor-pointer" onClick={()=>{history("/about")}}>About</li>
                <li className="text-base text-textColor hover:text-blueSearch duration-100 transition-all ease-in-out cursor-pointer" onClick={()=>{history("/contact")}}>Contact</li>
            </ul>
          <div>
            <SearchbarCustom />
          </div>
        </div>
        {/* mobile */}
        <div className="flex md:hidden w-full h-full p-6 px-8 bg-slate-300 justify-between">
          <img src={Logo} className="w-10 object-cover" alt="logo"/>
          <SearchbarCustom />

        { /* DROPDOWN MENU*/}
        <div className="relative inline-block mr-8 ml-4" x-data={toggle.toString()}>
          <MdMenu className="h-10 text-4xl text-blueSearch cursor-pointer" onClick={()=> {handleClickDropdown(toggle)}} />
          { toggle ? 
          <ul className="dropdown-content absolute flex flex-col bg-slate-300" >
              <li className="border-2 cursor-pointer" onClick={()=>{history("/home")}}>Home</li>
              <li className="border-2 cursor-pointer" onClick={()=>{history("/menu")}}>Menu</li>
              <li className="border-2 cursor-pointer" onClick={()=>{history("/about")}}>About</li>
              <li className="border-2 cursor-pointer" onClick={()=>{history("/contact")}}>Contact</li>
          </ul> 
          :
          <ul className="dropdown-content absolute hidden bg-slate-300" >
              <li className="border-2 cursor-pointer" onClick={()=>{history("/home")}}>Home</li>
              <li className="border-2 cursor-pointer" onClick={()=>{history("/menu")}}>Menu</li>
              <li className="border-2 cursor-pointer" onClick={()=>{history("/about")}}>About</li>
              <li className="border-2 cursor-pointer" onClick={()=>{history("/contact")}}>Contact</li>
          </ul> 
          }

        </div>



        </div>
    </header>
  )
}

