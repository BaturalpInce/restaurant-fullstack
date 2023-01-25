import React, {useState, useEffect} from 'react'

export const MainDishes = () => {
    const [mainDishes, setMainDishes] = useState([]);

    useEffect(() => {
        const fetchMainDishes = async () => {
            const response = await fetch('https://restaurant-fullstack-api.vercel.app/maindishes')
            const responseJson = await response.json()
            console.log(responseJson);
            setMainDishes(responseJson);
        }
        fetchMainDishes();
    },[]);
    
    const token = process.env.TOKEN;

    return (
        <div id="MainDishesContainer" className="m-8">
        <div className="text-4xl text-center mb-4">Main Dishes</div>
        <div className="grid 2xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 -xs:hidden">
        {Object.keys(mainDishes).map((maindish) => {
          return ( 
          <div id={maindish} key={maindish} className="flex relative bg-slate-300 mb-4 mt-4 mr-4">
            <div>
            <img src={mainDishes[maindish][2]+{token}} className="h-60 w-72 rounded-lg shadow-xl dark:shadow-gray-400" alt={maindish}/>  
            </div>
            <div id="data" className="ml-4 mt-4">
                <h1 className="text-3xl">{maindish}</h1>
                <h1 className="text-lg mt-2 h-20 w-60">{mainDishes[maindish][1]}</h1>
                <h1 className="absolute text-xl right-4 bottom-4">{mainDishes[maindish][0]}</h1>
            </div>
          </div>
          );
        })}
        </div>
        <div id="forMobile" className="hidden -xs:flex -xs:flex-col">
        {Object.keys(mainDishes).map((maindish) => {
          return ( 
          <div id={maindish} key={maindish} className="relative bg-slate-300 mb-4 mt-4 mr-4">
            <div>
            <img src={mainDishes[maindish][2]+{token}} className="w-full shadow-xl dark:shadow-gray-500" alt={maindish}/>  
            </div>
            <div id="data" className="ml-4 mt-4">
                <h1 className="text-xl">{maindish}</h1>
                <h1 className="text-md mt-2 h-20 w-60">{mainDishes[maindish][1].slice(0,70).concat("...")}</h1>
                <h1 className="absolute text-xl right-2 bottom-2">{mainDishes[maindish][0]}</h1>
            </div>
          </div>
          );
        })}
        </div>
        </div>
    )
}

