import { GitHub } from 'react-feather';
import breakout from "../../../assets/atariBreakout.png";
import mvcImg from "../../../assets/mvc-tech.png";
import writingApp from "../../../assets/writingApp.png";


const projects = [
    {
      name: 'Most dangerous writing app',
      role: 'Python',
      imageUrl:
      writingApp,
      repoUrl: 'https://github.com/bencyna/Most-Dangerous-Writing-App',
    },
    {
      name: 'MVC tech blog',
      role: 'React',
      imageUrl: mvcImg,
      repoUrl: 'https://github.com/bencyna/MVC-techBlog',
    },
    {
      name: 'Atari breakout',
      role: 'Python',
      imageUrl:
        breakout,
      repoUrl: 'https://github.com/bencyna/atari-breakout',
    },
    // More projects...
  ]
  
  export default function OtherPojects() {
    return (
      <div className="">
        <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
              <h2 className="text-3xl italic text-white tracking-tight sm:text-4xl">Other noteworthy projects</h2>
              <p className="text-xl text-gray-100">
                If you'd like to see more of the cool stuff I've done, feel free to get in touch <>here</>              </p>
            </div>
            <ul
             className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
            >
              {projects.map((project) => (
                <li key={project.name}>
                  <div className="space-y-4">
                    <div className="aspect-w-3 aspect-h-2">
                      <img className="object-cover shadow-lg rounded-lg" src={project.imageUrl} alt="" />
                    </div>
  
                    <div className="space-y-2">
                      <div className="text-lg leading-6 font-medium space-y-1">
                        <h3>{project.name}</h3>
                        <p className="text-green-300">{project.role}</p>
                      </div>
                      <ul className="flex space-x-5">
                        <li>
                          <a href={project.repoUrl}  target="_blank" rel="noreferrer" className="text-gray-200 hover:text-gray-400 cursor-pointer">
                            <span className="sr-only">Github</span>
                            <GitHub className=" "/>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
  