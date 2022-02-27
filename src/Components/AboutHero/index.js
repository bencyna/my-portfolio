import React from 'react'
import { Link } from 'react-router-dom'

export default function AboutHero() {
  return (
    
  <main className="lg:relative border-b-2" id="the-top">
  <div className="mx-auto max-w-7xl w-full pt-16 pb-8 text-center lg:py-48 lg:text-left">
    <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
      <h1 className="text-xl tracking-tight font-serif text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
        <span className="block text-green-300">Ben Cyna</span>
      </h1>
      <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md: max-w-3xl">Welcome to my website, click around to get to know me :)</p>
      <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
        <div className="rounded-md shadow">
          <Link to="#" onClick={() => {
          let hero = document.getElementById("education");
          hero && hero.scrollIntoView({ behavior: "smooth", block: "start" });
        }} className="w-full flex items-center justify-center px-3 py-3 border border-transparent text-gray-400 text-base font-medium rounded-md hover:text-gray-600 md:py-4 md:text-lg md:px-10"> Education </Link>
        </div>
        <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
        <Link to="#" onClick={() => {
          let hero = document.getElementById("work");
          hero && hero.scrollIntoView({ behavior: "smooth", block: "start" });
        }} className="w-full flex items-center justify-center px-3 py-3 border border-transparent text-gray-400 text-base font-medium rounded-md hover:text-gray-600 md:py-4 md:text-lg md:px-10">Work Experience</Link>
        </div>
        <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
        <Link to="#" onClick={() => {
          let hero = document.getElementById("me");
          hero && hero.scrollIntoView({ behavior: "smooth", block: "start" });
        }} className="w-full flex items-center justify-center px-3 py-3 border border-transparent text-gray-400 text-base font-medium rounded-md hover:text-gray-600 md:py-4 md:text-lg md:px-10">Me</Link>
        </div>
      </div>
    </div>
  </div>
  <div className="justify-center relative h-56 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full w-full">
    <img className="border-green-300 border-4 absolute justify-center m-auto inset-0 h-full object-cover rounded-full" src="https://avatars.githubusercontent.com/u/73979422?v=4" alt=""/>
  </div>
</main>
  )
}
