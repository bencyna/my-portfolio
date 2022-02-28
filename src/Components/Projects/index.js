import React from "react";

const features1 = [
  {
    name: 'Add to calendar',
    description:
      'Easily add events to your own scheudle, calendule also lets you find others to request a meeting for, once approved, the event will appear on both calendars',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-07-detail-01.jpg',
    imageAlt: 'White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.',
  },
  {
    name: 'Features to come',
    description:
      'Features such as email notifcations, blocking out booked times and an imrovement to the UI means that with continuous development, this already useful application will become greater',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-07-detail-02.jpg',
    imageAlt: 'Detail of zipper pull with tan leather and silver rivet.',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function FeaturedProjects() {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-6 px-4 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Calendule</h2>
          <p className="mt-4 text-gray-500">
            A one stop shop for your scheduling needs. 
            Calendule lets you schedule your life while also enabling 
            interactions with friends, colleagues and services.
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {features1.map((feature, featureIdx) => (
            <div
              key={feature.name}
              className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8 lg:items-center"
            >
              <div
                className={classNames(
                  featureIdx % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-8 xl:col-start-9',
                  'mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4'
                )}
              >
                <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
              </div>
              <div
                className={classNames(
                  featureIdx % 2 === 0 ? 'lg:col-start-6 xl:col-start-5' : 'lg:col-start-1',
                  'flex-auto lg:row-start-1 lg:col-span-7 xl:col-span-8'
                )}
              >
                <div className="aspect-w-5 aspect-h-2 rounded-lg bg-gray-100 overflow-hidden">
                  <img src={feature.imageSrc} alt={feature.imageAlt} className="object-center object-cover" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
