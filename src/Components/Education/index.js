import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';

export default function Education() {
  return (
    <div class="pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8 border-b-2" id="education">
      <div class="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
        <div>
          <h2 class="text-green-300 tracking-tight font-serif sm:text-4xl inline" >Education</h2>
          <div onClick={() => {
            let hero = document.getElementById("the-top");
            hero && hero.scrollIntoView({ behavior: "smooth", block: "start" });
          }} className="cursor-pointer text-gray-200 hover:text-gray-400 text-sm inline relative left-24">back to top ↑</div>
          <p class="mt-3 text-xl text-gray-100 block sm:mt-4">A diverse background in psychology allows me to approach tech issues from a unique view</p>
        </div>

        <div class="mt-12 grid gap-16 pt-12 lg:grid-cols-2 lg:gap-x-20 lg:gap-y-12">
            <div>
              <div>
                <Link to="#" class="inline-block">
                  <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"> Bachelors Degree </span>
                </Link>
              </div>
              <Link to="#" class="block mt-4">
                <p class="text-xl text-indigo-100">Bachelor of Psychological Sceince</p>
                <p class="mt-3 text-base">
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
              <div class="mt-6 items-center w-3/6 m-auto ">
                <div class="w-1/2 m-auto">
                  <Link to="#mytrasncript" className="m-auto">
                    <span class="sr-only">Bachelor of psychological science</span>
                    <img class="h-10 w-10 rounded-full m-auto" src="https://www.adelaide.edu.au/brand/sites/default/files/styles/ua_landscape/public/media/images/2021-09/uoalogonavybg.png?h=c4dd2c7b&itok=836Wuw_K" alt="adelaide university" />
                  </Link>
                </div>
                <div class="">
                  <p class="text-sm font-medium">
                    <Link  to="https://www.adelaide.edu.au/" arget="_blank" rel="noreferrer" > University of Adelaide </Link>
                  </p>
                  <div class="space-x-1 text-sm text-gray-100">
                    <time datetime="2020-03-16"> Feb, 2019 </time>
                    <span aria-hidden="true"> &middot; </span>
                    <span> Nov, 2022 </span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div>
                <Link to="#." class="inline-block">
                  <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-pink-100 text-pink-800"> Bootcamp </span>
                </Link>
              </div>
              <Link to="#." class="block mt-4">
                <p class="text-xl text-pink-100">Full-Stack Web Development Certificate</p>
                <p class="mt-3 text-base m-auto w-5/6">A deep introduction into coding through the lens of web development, develped skills to create applications from the backend server to the user interface</p>
              </Link>
              <div class="mt-6 items-center w-4/6 m-auto">
                <div class="w-1/2 m-auto">
                  <Link to="#.">
                    <span class="sr-only">Bootcamp</span>
                    <img class="h-10 w-10 rounded-full m-auto" src="https://miro.medium.com/max/3150/1*ro9U4HRwF5xwEbDdryAQFw.png" alt="" />
                  </Link>
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium">
                    <Link to="#."> Trilogy partnered with University of Adelaide </Link>
                  </p>
                  <div class="space-x-1 text-sm text-gray-100">
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
