import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Gemini from '../../assets/gemini.png';
import "./style.css";

export default function WorkExperience() {
  return (
    <div className="bg-white" id='work'>
  <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
    <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
      <div className="space-y-5 sm:space-y-4">
        <h2 className="text-green-300 tracking-tight font-serif sm:text-4xl inline">Work Experience</h2>
        <div 
        onClick={() => {
          let hero = document.getElementById("the-top");
          hero && hero.scrollIntoView({ behavior: "smooth", block: "start" });
        }} className="cursor-pointer text-gray-300 hover:text-gray-400 text-sm inline relative left-14">back to top ↑</div>
        <p className="text-xl text-gray-500 block">With over a year of software development experience and 6 months of learning how a business starts from the ground up, I
            have developed my understanding of business and development. A further year of tutoring guided me to refine my communication and leadership abilities
        </p>
      </div>
      <div className="lg:col-span-2">
        <ul className="space-y-12 sm:grid sm:grid-cols-3 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8">
          <li>
            <div className="space-y-4">
              <Link to='#' onClick={() => window.location.replace("https://www.jamesanthonyconsulting.com.au/" )}  className="aspect-w-3 aspect-h-2 m-auto">
                <img className="object-cover shadow-lg rounded-lg inline" src="https://media-exp1.licdn.com/dms/image/C560BAQH9t8JQeeCMiQ/company-logo_200_200/0/1557368621783?e=2159024400&v=beta&t=Zldo3jKhCpCI60GMyNAV3MPiehCjYTLIb6qxTiJHaZk" alt=""/>
              </Link>
              <div className="text-lg leading-6 font-medium space-y-1">
                <h3>James Anthony Consulting</h3>
                <p className="text-indigo-600">Software Developer</p>
              </div>
              <div className="">
                <p className="text-gray-500">Building projects from the ground up, I worked with popular php tools such as Laravel and was the lead developer on a 7 month project. I worked with Java, C# and Javascript in my time at JAC as well</p>
              </div>

              <ul  className="flex space-x-5">
                <li>
                  <Link to='#' onClick={() => window.location.replace("https://au.linkedin.com/company/james-anthony-consulting")} className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <div className="space-y-4">
              <Link to='#' onClick={() => window.location.replace("https://vea-pc.myshopify.com/")}  className="aspect-w-3 aspect-h-2 m-auto">
                <img className="object-cover shadow-lg rounded-lg inline image_max" src={Gemini} alt=""/>
              </Link>
              <div className="text-lg leading-6 font-medium space-y-1">
                <h3>Vea Prints</h3>
                <p className="text-indigo-600">Founder</p>
              </div>
              <div className="">
                <p className="text-gray-500">From launching the website to organising the artist and the writer. My co-founder and I began selling the products to customers on the 28th of Feburary 2021</p>
              </div>

              {/* <ul  className="flex space-x-5">
                <li>
                  <Link to='#' onClick={() => window.location.replace("https://au.linkedin.com/company/james-anthony-consulting" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
                    </svg>
                  </Link>
                </li>
              </ul> */}
            </div>
          </li>

          <li>
            <div className="space-y-4">
              <Link to='#' onClick={() => window.location.replace("https://www.jamesanthonyconsulting.com.au/" )}  className="aspect-w-3 aspect-h-2 m-auto">
                <img className="object-cover shadow-lg rounded-lg inline" src="https://media.glassdoor.com/sqll/3246518/tutoring-for-excellence-squarelogo-1634289290750.png" alt=""/>
              </Link>
              <div className="text-lg leading-6 font-medium space-y-1">
                <h3>Tutoring for Excellence</h3>
                <p className="text-indigo-600">Tutor</p>
              </div>
              <div className="">
                <p className="text-gray-500">
                    Developed keen personal and social skills, requiring patience, critical thinking, understanding and effective communication within small groups. 
                    I maintained a 100% student retention rate within 6 months of the first lesson and thouroughly enjoyed chatting and learning with students 
                </p>
              </div>

              {/* <ul  className="flex space-x-5">
                <li>
                  <Link to='#' onClick={() => window.location.replace("https://au.linkedin.com/company/james-anthony-consulting" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
                    </svg>
                  </Link>
                </li>
              </ul> */}
            </div>
          </li>

        </ul>
      </div>
    </div>
  </div>
</div>
  )
}
