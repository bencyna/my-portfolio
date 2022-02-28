import React from 'react'
import FeaturedProjects from "../../Components/Projects"
import Details from "../../Components/Details"


export default function Portfolio() {
  return (
    <div>
       <h1 className="text-xl tracking-tight font-serif text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
        <span className="inline text-green-300">Portfolio</span><span className="inline text-gray-500 text-sm ml-5">Software Engineer</span>
      </h1>
        <Details/>
        <FeaturedProjects/>
    </div>

  )
}
