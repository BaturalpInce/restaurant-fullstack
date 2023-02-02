import React, {useState, useEffect} from 'react'

export const mainDishNames = [];
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
        <div id="MainDishesContainer" className="mr-8 ml-8">
        <div className="relative text-4xl mt-8 mb-4 text-center -xs:text-3xl">Main Dishes</div>
        <div className="grid 2xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 -xs:flex -xs:flex-col">
        {Object.keys(mainDishes).map((maindish) => {
          mainDishNames.push(maindish);
          let idCreator = maindish.replace(/\s+/g, '');
          idCreator = idCreator.replaceAll(/"|'/g, '');
          return ( 
          <div id={idCreator} key={maindish} className="flex -xs:flex-col relative bg-slate-300 mb-4 mt-4 mr-4">
            <div className="">
            <img src={mainDishes[maindish][2]+{token}} className="h-60 w-72 rounded-lg shadow-xl dark:shadow-gray-400 -xs:w-auto" alt={maindish}/>  
            </div>
            <div id="data" className="ml-4 mt-4">
                <h1 className="text-3xl -xs:text-lg">{maindish}</h1>
                <h1 className="text-lg mt-2 h-20 w-52 -xs:text-sm -xs:mt-1">{mainDishes[maindish][1].length > 65 ? mainDishes[maindish][1].slice(0,70).concat("...") : mainDishes[maindish][1]}</h1>
                <h1 className="absolute text-xl right-4 bottom-4 -xs:text-sm -xs:right-2 -xs:bottom-2">{mainDishes[maindish][0]}</h1>
            </div>
          </div>
          );
        })}
        </div>
        </div>
    )
}

