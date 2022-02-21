import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';

export default function Me() {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg w-3/4 m-auto mb-12">
  <div className="px-4 py-5 sm:px-6">
    <h3 className="text-green-300 tracking-tight font-serif sm:text-4xl">About me</h3>
  </div>
  <div className="sm:col-span-2 m-4 px-10">
        <dt className="text-sm font-medium text-gray-500">About</dt>
        <dd className="mt-1 text-sm text-gray-900">Outside of work, I love to go bouldering with friends. i love working out the problem set of a climb and inbetween chatting about anything with my friends. I am a very curious man so any information about anything really always fascinates me, especially if it is physics related. I chose my pscyhology degree because I thouhgt I was interested in "why people do the things that they do", which I am, but I am mainly just interested in why anything is the way anything is. My favourite TV shows are Dark, Breaking Bad and Lucifer. My favourite artists are Rainbow Kitten Surprise and Avicii. I yearn to travel once I finish my degree and would love to hear any location recoommendations</dd>
      </div>
  <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
    <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
      <div className="sm:col-span-1">
        <dt className="text-sm font-medium text-gray-500">Full name</dt>
        <dd className="mt-1 text-sm text-gray-900">Benjamin Cyna</dd>
      </div>
      <div className="sm:col-span-1">
        <dt className="text-sm font-medium text-gray-500">Desired roles</dt>
        <dd className="mt-1 text-sm text-gray-900">Software Engineer</dd>
      </div>
      <div className="sm:col-span-1">
        <dt className="text-sm font-medium text-gray-500">Email address</dt>
        <dd className="mt-1 text-sm text-gray-900">benjamincyna@gmail.com</dd>
      </div>
      <div className="sm:col-span-1">
        <dt className="text-sm font-medium text-gray-500">Interests</dt>
        <dd className="mt-1 text-sm text-gray-900">Bouldering, Basketball, Physics</dd>
      </div>
    </dl>
  </div>
</div>
  )
}
