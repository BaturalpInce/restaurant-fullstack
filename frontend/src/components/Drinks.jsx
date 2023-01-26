import React, {useState, useEffect} from 'react'

export const drinkNames = [];
export const Drinks = () => {
    const [drinks, setDrinks] = useState([]);

    useEffect(() => {
        const fetchDrinks = async () => {
            const response = await fetch('https://restaurant-fullstack-api.vercel.app/drinks')
            const responseJson = await response.json()
            console.log(responseJson);
            setDrinks(responseJson);
        }
        fetchDrinks();
    },[]);
    
    const token = process.env.TOKEN;

    return (
        <div id="DrinksContainer" className='m-8'>
        <div className="relative text-4xl mt-8 mb-4 text-center">Drinks</div>
        <div className="grid 2xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 -xs:hidden">
        {Object.keys(drinks).map((drink) => {
          drinkNames.push(drink);
          const idCreator = drink.replace(/\s+/g, '');
          return ( 
          <div id={idCreator} key={drink} className="flex relative bg-slate-300 mb-4 mt-4 mr-4">
            <div>
            <img src={drinks[drink][2]+{token}} className="h-60 w-72 rounded-lg shadow-xl dark:shadow-gray-400" alt={drink} />  
            </div>
            <div id="data" className="ml-4 mt-4">
                <h1 className="text-3xl">{drink}</h1>
                <h1 className="text-lg mt-2 h-20 w-60">{drinks[drink][1]}</h1>
                <h1 className="absolute text-xl right-4 bottom-4">{drinks[drink][0]}</h1>
            </div>
          </div>
          );
        })}
        </div>
        <div id="forMobile" className="hidden -xs:flex -xs:flex-col">
        {Object.keys(drinks).map((drink) => {
          return ( 
          <div id={drink} key={drink} className="relative bg-slate-300 mb-4 mt-4 mr-4">
            <div>
            <img src={drinks[drink][2]+{token}} className="w-full shadow-xl dark:shadow-gray-500" alt={drink}/>  
            </div>
            <div id="data" className="ml-4 mt-4">
                <h1 className="text-xl">{drink}</h1>
                <h1 className="text-md mt-2 h-20 w-60">{drinks[drink][1].slice(0,70).concat("...")}</h1>
                <h1 className="absolute text-xl right-2 bottom-2">{drinks[drink][0]}</h1>
            </div>
          </div>
          );
        })}
        </div>
        </div>
    )
}