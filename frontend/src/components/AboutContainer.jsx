import React from 'react'
import imgmain from './img/imgmain.png';
export const AboutContainer = () => {
  return (
    <div className="flex w-screen mt-36 justify-center z-30 -xs:mt-8">
        <div className="flex flex-col justify-center items-center w-3/4 h-3/4 md:w-5/6 md:h-5/6 p-4">
            <h1 className="text-4xl p-4 -xs:p-0 -xs:text-3xl">Welcome to the Official Website of Alpine Heights Bistro</h1>
            <div className="flex flex-row w-full mt-4 -xs:flex-col">
              <p className="text-2xl pb-4 pt-2 w-1/2 -xs:w-full -xs:text-lg">We offer delicious meals at few different locations on Earth. The locations may change but we always stay at the top. Continue..  </p>
              <img src={imgmain} className="ml-auto rounded-lg shadow-xl dark:shadow-gray-400 -xs:w-64 -xs:h-1/3 -xs:ml-0 md:w-72 lg:w-2/5" />   
            </div>
        </div> 
    </div>
  )
}
