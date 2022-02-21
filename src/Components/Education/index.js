import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';

export default function Education() {
  return (
<div class="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8" id="education">
  <div class="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
    <div>
      <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Education</h2>
      <p class="mt-3 text-xl text-gray-500 sm:mt-4">A diverse background in psychology allows me to approach tech issues with a unique approach</p>
    </div>
    <div class="mt-12 grid gap-16 pt-12 lg:grid-cols-2 lg:gap-x-20 lg:gap-y-12">
      <div>
        <div>
          <Link to="#" class="inline-block">
            <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"> Bachelors Degree </span>
          </Link>
        </div>
        <Link to="#" class="block mt-4">
          <p class="text-xl font-semibold text-gray-900">Bachelor of Psychological Sceince</p>
          <p class="mt-3 text-base text-gray-500">
              <ul>
                  <li>
                      GPA: 6.8/7
                  </li>
                  <li>
                      50% of major in Neuroscience 
                  </li>
                  <li>
                      50% of major in Computer Science 
                  </li>
              </ul>
          </p>
        </Link>
        <div class="mt-6 flex items-center">
          <div class="flex-shrink-0">
            <Link to="#">
              <span class="sr-only">Bachelor of psychological science</span>
              <img class="h-10 w-10 rounded-full" src="https://www.adelaide.edu.au/brand/sites/default/files/styles/ua_landscape/public/media/images/2021-09/uoalogonavybg.png?h=c4dd2c7b&itok=836Wuw_K" alt="adelaide university"/>
            </Link>
          </div>
          <div class="ml-3">
            <p class="text-sm font-medium text-gray-900">
              <Link to="#"> University of Adelaide </Link>
            </p>
            <div class="flex space-x-1 text-sm text-gray-500">
              <time datetime="2020-03-16"> Feb, 2019 </time>
              <span aria-hidden="true"> &middot; </span>
              <span> November 2022 </span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <Link to="#" class="inline-block">
            <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-pink-100 text-pink-800"> Bootcamp </span>
          </Link>
        </div>
        <Link to="#" class="block mt-4">
          <p class="text-xl font-semibold text-gray-900">Full-Stack Web Development Certificate</p>
          <p class="mt-3 text-base text-gray-500">A deep dive into coding through the lens of web development set me up to create applications from the backend server to the user experience</p>
        </Link>
        <div class="mt-6 flex items-center">
          <div class="flex-shrink-0">
            <Link to="#">
              <span class="sr-only">Dessie Ryan</span>
              <img class="h-10 w-10 rounded-full" src="https://miro.medium.com/max/3150/1*ro9U4HRwF5xwEbDdryAQFw.png" alt=""/>
            </Link>
          </div>
          <div class="ml-3">
            <p class="text-sm font-medium text-gray-900">
              <Link to="#"> Trilogy partnered with University of Adelaide </Link>
            </p>
            <div class="flex space-x-1 text-sm text-gray-500">
              <time datetime="2020-03-10"> Nov, 2020 </time>
              <span aria-hidden="true"> &middot; </span>
              <span> July, 2021 </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}
