import React from 'react'
import { Link } from 'react-router-dom'

export default function AboutHero() {
  return (
    
  <main class="lg:relative border-b-2">
  <div class="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
    <div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
      <h1 class="text-xl tracking-tight font-serif text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
        <span class="block text-green-300">Ben Cyna</span>
      </h1>
      <p class="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md: max-w-3xl">Welcome to my website, click around to get to know me :)</p>
      <div class="mt-10 sm:flex sm:justify-center lg:justify-start">
        <div class="rounded-md shadow">
          <Link to="#education" class="w-full flex items-center justify-center px-3 py-3 border border-transparent text-gray-400 text-base font-medium rounded-md hover:text-gray-600 md:py-4 md:text-lg md:px-10"> Education </Link>
        </div>
        <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
          <Link to="#" class="w-full flex items-center justify-center px-3 py-3 border border-transparent text-gray-400 text-base font-medium rounded-md hover:text-gray-600 md:py-4 md:text-lg md:px-10">Work Experience</Link>
        </div>
        <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
          <Link to="#" class="w-full flex items-center justify-center px-3 py-3 border border-transparent text-gray-400 text-base font-medium rounded-md hover:text-gray-600 md:py-4 md:text-lg md:px-10">Me</Link>
        </div>
      </div>
    </div>
  </div>
  <div class="relative w-full h-56 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
    <img class="absolute inset-0 w-full h-full object-cover" src="https://avatars.githubusercontent.com/u/73979422?v=4" alt=""/>
  </div>
</main>
  )
}
