/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import React, { Fragment } from 'react'
import { Tab } from '@headlessui/react'

const tabs = [
  {
    name: 'Outline',
    features: [
      {
        name: 'CodeNoob',
        description:
          'CodeNoob is a CRUD application that allows people to be intorduced into software. It has a focus on novices as starting out in tech can be quite overwhelming',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-01.jpg',
        imageAlt: 'Maple organizer base with slots, supporting white polycarbonate trays of various sizes.',
      },
    ],
  },
  {
    name: 'Design',
    features: [
      {
        name: 'Creative Process',
        description:
          'This was the mid term group project in the Adelaide Univeristy Coding bootcamp. Our group decided we wanted to make something that is relevant to us and that we would find useful. As we were all developers starting out, we thought it would be useful for a place where people could ask \"dumb\" questions easily.',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-02.jpg',
        imageAlt:
          'Walnut organizer base with pen, sticky note, phone, and bin trays, next to modular drink coaster attachment.',
      },
    ],
  },
  {
    name: 'Collaborations',
    features: [
      {
        name: 'Group Members',
        description: `<a href="https://www.linkedin.com/in/bellasantiago?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAbNcA0BP4P-wrnc4aXbN2Xt4zJYUdM3cE4&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_people_load_more%3BXM8A3KTbS8uDjlDflAVbLg%3D%3D"> Bella Santiago</a> and 
        <a href="https://www.linkedin.com/in/alex-stewart-3a2937a9?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAABcY4GoBfjqK6ivnOGHXfdnNn1unZ73IirU&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_people_load_more%3BXM8A3KTbS8uDjlDflAVbLg%3D%3D">Alex Stewart</a>`,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-03.jpg',
        imageAlt: 'Walnut organizer base with white polycarbonate trays in the kitchen with various kitchen utensils.',
      },
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function CodeNoob() {
  return (
    <div className="bg-white">
      <section aria-labelledby="features-heading" className="max-w-7xl mx-auto py-32 sm:px-2 lg:px-32">
        <div className="max-w-2xl mx-auto px-4 lg:px-0 lg:max-w-none">
          <div className="max-w-3xl">
            <h2 id="features-heading" className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Code Noob
            </h2>
            <p className="mt-4 text-gray-500">
            Code noob utilises MySQL to store user data along with handlebars and express. It is a forum for people wanting to get into coding but are unsure how to begin. You can ask simple questions, make replies and find links to recourses
            </p>
          </div>

          <Tab.Group as="div" className="mt-4">
            <div className="-mx-4 flex overflow-x-auto sm:mx-0">
              <div className="flex-auto px-4 border-b border-gray-200 sm:px-0">
                <Tab.List className="-mb-px flex space-x-10">
                  {tabs.map((tab) => (
                    <Tab
                      key={tab.name}
                      className={({ selected }) =>
                        classNames(
                          selected
                            ? 'border-indigo-500 text-indigo-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                          'whitespace-nowrap py-6 border-b-2 font-medium text-sm'
                        )
                      }
                    >
                      {tab.name}
                    </Tab>
                  ))}
                </Tab.List>
              </div>
            </div>

            <Tab.Panels as={Fragment}>
              {tabs.map((tab) => (
                <Tab.Panel key={tab.name} className="space-y-16 pt-10 lg:pt-16">
                  {tab.features.map((feature) => (
                    <div key={feature.name} className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8">
                      <div className="mt-6 lg:mt-0 lg:col-span-5">
                        <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                        {feature.name == "Group Members" ? (
                        <p className="mt-2 text-sm text-gray-500"><a className="cursor-pointer hover:text-gray-300" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/bellasantiago?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAbNcA0BP4P-wrnc4aXbN2Xt4zJYUdM3cE4&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_people_load_more%3BXM8A3KTbS8uDjlDflAVbLg%3D%3D"> Bella Santiago</a> and 
                        <a className="cursor-pointer hover:text-gray-300" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/alex-stewart-3a2937a9?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAABcY4GoBfjqK6ivnOGHXfdnNn1unZ73IirU&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_people_load_more%3BXM8A3KTbS8uDjlDflAVbLg%3D%3D"> Alex Stewart</a>
                   </p>
                        ) : (
                        <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
                        )}
                      </div>
                      <div className="lg:col-span-7">
                        <div className="aspect-w-2 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden sm:aspect-w-5 sm:aspect-h-2">
                          <img src={feature.imageSrc} alt={feature.imageAlt} className="object-center object-cover" />
                        </div>
                      </div>
                    </div>
                  ))}
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
    </div>
  )
}
