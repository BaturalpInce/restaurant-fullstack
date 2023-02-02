import React from 'react'
import imgmain from './img/imgmain.png';
export const AboutContainer = () => {
  return (
    <div className="flex w-screen mt-36 justify-center z-30">
        <div className="flex flex-col justify-center items-center w-3/4 h-3/4 p-4">
            <h1 className="text-4xl p-4">Welcome to the Official Website of Mr. Burger</h1>
            <div className="flex flex-row w-full mt-4">
              <p className="text-2xl pb-4 pt-2 w-1/2">We offer delicious meals at few different locations on Earth. The locations may change but we always stay at the top. Continue..  </p>
              <img src={imgmain} className="max-w-lg ml-auto rounded-lg shadow-xl dark:shadow-gray-400" />   
            </div>
        </div> 
    </div>
  )
}
