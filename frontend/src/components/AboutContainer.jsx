import React from 'react'
import imgmain from './img/imgmain.png';
export const AboutContainer = () => {
  return (
    <div className="flex w-screen mt-36 justify-center z-30 -xs:mt-8">
        <div className="flex flex-col justify-center items-center w-3/4 h-3/4 md:w-5/6 md:h-5/6 p-4">
            <h1 className="text-4xl p-4 -xs:p-0 -xs:text-3xl">Welcome to the Official Website of Alpine Heights Bistro</h1>
            <div className="flex flex-row w-full mt-4 -xs:flex-col">
              <p className="text-2xl pb-4 pt-2 w-1/2 -xs:w-full -xs:text-lg">Alpine Heights Bistro is a futuristic restaurant located at the top of a snowy mountain, offering stunning views and exceptional dining experiences since 2160. Our menu features delicious and beautifully crafted dishes, using the freshest ingredients and cutting-edge cooking techniques to deliver a taste of the future. Our commitment to sustainability is evident in every aspect of the restaurant, from our eco-friendly design to our locally sourced menu items. With its unique setting and innovative cuisine, Alpine Heights Bistro is the perfect destination for those seeking a one-of-a-kind dining experience. Whether you're looking for a romantic dinner for two or a special celebration with friends and family, our dedicated team of chefs and servers will ensure that your time at Alpine Heights Bistro is unforgettable.</p>
              <img src={imgmain} className="ml-auto rounded-lg shadow-xl dark:shadow-gray-400 -xs:w-64 -xs:h-1/3 -xs:ml-0 md:w-72 lg:w-2/5" />   
            </div>
        </div> 
    </div>
  )
}
