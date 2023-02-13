import React from "react";
import { Link } from "react-router-dom";
import resume from "../../assets/Resume.pdf";
import { GitHub, Linkedin } from 'react-feather';
import "./style.css"



function Details() {
  return (
    <div className="p-8 lg:mx-96 rounded-md shadow text-white">
      <div className="w-full sm:flex sm:justify-center m-auto">
        <div className="w-1/3 md:inline-block m-auto">
          <address className="">
            Benjamin Cyna
          </address>
        </div>
        <div className="w-5/6 md:inline-block m-auto py-2">
          <address>
            benjamincyna@gmail.com
          </address>
        </div>
        <div className="w-1/3 md:inline-block m-auto">
          <address>
            <i className="fas fa-phone"></i> 0430653816
          </address>
        </div>
      </div>  
      <div className="sm:flex sm:justify-center lg:justify-start p-5">
        <div className="sm:flex sm:justify-center lg:justify-start">
          <span title="Veiw Resume" className="columns colourDisplay is-mobile">
            <button id="resume">
              <Link
                to={{
                  pathname: resume
                    // "https://docs.google.com/document/d/1D8BpELWO2wDjZwn11Bb6IZDXPsnFj4eDMavnGDE7F3E/",
                }}
                target="_blank"
              >
                <i className="far fa-file"></i>
              </Link>
            </button>
          </span>
        </div>
        <div className="md:w-1/2 hover:underline py-1">
          <a href="https://www.linkedin.com/in/bencyna567/" target="_blank" rel="noreferrer" className="hover:bg-gray-300 p-2 rounded">
          <Linkedin color="#0e76a8 " className="inline-block"/> 
          </a>
        </div>
        <div className="md:w-1/2 hover:underline py-1">
          <a href="https://github.com/bencyna/" target="_blank" rel="noreferrer" className="hover:bg-gray-300 p-2 rounded">
           <GitHub className="inline-block  "/>
          </a>
        </div>
      </div>  
    </div>
  );
}

export default Details;
