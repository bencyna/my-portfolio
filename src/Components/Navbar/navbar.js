import React, { useState } from 'react';
import { Link } from "react-router-dom"
import Contact from '../../Pages/Contact';
import Logo from '../../assets/b.png';
import resume from '../../assets/Resume.pdf';
import { File } from 'react-feather';

export default function Navbar() {
  const [mobile_menu, setMobileMenu] = useState(true);
  const [hidden, setHidden] = useState("hidden");
  const [contact_display, setContactDisplay] = useState("hidden")

  function toggleMobileMenu() {
    setMobileMenu(!mobile_menu)
    if (mobile_menu) {
      setHidden("")
    }
    else {
      setHidden("hidden")
    }
  }

  function toggleContact() {
    if (contact_display == "hidden") {
      setContactDisplay("show")
    }
    else {
      setContactDisplay("hidden")
    }
  }

  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/" className="flex hover:text-green-300 font-wei">
          <img className="mr-3 h-20" src={Logo} alt="Ben Cyna Logo"></img>
          <span className="self-center text-lg font-semibold whitespace-nowrap text-primary hover:text-third">Ben Cyna</span>
        </Link>
        <button data-collapse-toggle="mobile-menu" onClick={toggleMobileMenu} type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
          <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </button>
        <div className={` ${hidden} w-full md:block md:w-auto`} id="mobile-menu">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li className="place-self-center">
              <Link to="/about" className="font-normal block py-2 pr-4 pl-3 text-primary hover:text-third md:p-0">About</Link>
            </li>
            <li className="place-self-center">
              <button type='button' onClick={toggleContact} className="text-center cursor-pointer font-normal block py-2 pr-4 pl-3 text-primary hover:text-third md:p-0">Contact</button>
            </li>
            <li className="place-self-center">
              <Link to="/" className="font-normal block py-2 pr-4 pl-3 text-primary hover:text-third md:p-0">Projects</Link>
            </li>
            <li className="place-self-center">
              <a href={resume} target="_blank" rel="noreferrer" className="font-normal block py-2 pr-4 pl-3 text-primary hover:text-third md:p-0">
                <span title="Resumé" className="columns colourDisplay is-mobile">
                  <File className=" " />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div><Contact contact_display={contact_display} setContactDisplay={setContactDisplay} /></div>
    </nav>);
}
