import React, {useState} from 'react'
import {Minimize2}  from 'react-feather';
import ContactForm from "../../Components/ContactForm/index";

export default function Contact({contact_display, setContactDisplay}) {
  function hideDisplay() {
    setContactDisplay("hidden")
  }


  return (
  <div className={`z-50 md:w-2/3 lg:w-1/3 w-full md:h-4/6 lg:h-4/6 h-5/6 fixed bottom-0 right-0 border-x ${contact_display}`}>
      <div className="bg-gray-100 w-full h-1/12 border border-gray-200">
        <div className="w-1/2 float-right background-third "> 
         <Minimize2 className="p-1 float-right mr-8 cursor-pointer" onClick={hideDisplay}/>
        </div>
        <div className="w-1/2 bg-gray-100 float background-third">Contact</div>
      </div>
      <ContactForm/>
    </div>

  )
}
