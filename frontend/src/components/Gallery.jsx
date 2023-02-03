import React from 'react'
import gallery1 from './img/gallery1.png';
import gallery2 from './img/gallery2.png';
import gallery3 from './img/gallery3.png';

export const Gallery = () => {
  return (
    <div className="z-30 m-6">
    <h1 className="text-4xl text-center m-8 -xs:text-3xl">Gallery</h1>
    <div className="flex flex-row justify-center space-x-12 mb-12 -xs:flex-col -xs:space-y-12 -xs:space-x-0">
        <img src={gallery1} className="max-w-md rounded-lg shadow-xl dark:shadow-gray-400" />
        <img src={gallery2} className="max-w-md rounded-lg shadow-xl dark:shadow-gray-400" />
        <img src={gallery3} className="max-w-md rounded-lg shadow-xl dark:shadow-gray-400" />
    </div>
    </div>
  )
}
