import React, {useState} from 'react'
import {Minimize2}  from 'react-feather';

export default function Contact({contact_display, setContactDisplay}) {
  function hideDisplay() {
    setContactDisplay("hidden")
  }


  return (
    <div className={`z-50 bg-white w-1/3 h-4/6 fixed bottom-0 right-0 border-x ${contact_display}`}>
      <div className="bg-gray-100 w-full h-1/12 border border-gray-200">
        <div className="w-1/2 float-right bg-gray-100 "> 
         <Minimize2 className="p-1 float-right mr-8 cursor-pointer" onClick={hideDisplay}/>
        </div>
        <div className="w-1/2 bg-gray-100 float">Contact</div>
      </div>
    </div>

  )
}
