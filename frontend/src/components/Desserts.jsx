import React, {useState, useEffect} from 'react'

export const Desserts = () => {
    const [desserts, setDesserts] = useState([]);
    useEffect(() => {
        const fetchDesserts = async () => {
            const response = await fetch('https://restaurant-fullstack-api.vercel.app/desserts')
            const responseJson = await response.json()
            console.log(responseJson);
            setDesserts(responseJson);
        }
        fetchDesserts();
    },[]);
    const token = process.env.TOKEN;

    return (
        <div id="DessertsContainer" className='ml-8 mr-8'>
        <div className="text-4xl text-center mb-4">Desserts</div>
        <div className="grid 2xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 -xs:hidden">
        {Object.keys(desserts).map((dessert) => {
          return ( 
          <div id={dessert} key={dessert} className="flex relative bg-slate-300 mb-4 mt-4 mr-4">
            <div>
                <img src={desserts[dessert][2]+{token}} className="h-60 w-72 rounded-lg shadow-xl dark:shadow-gray-400" alt={dessert} />  
            </div>
            <div id="data" className="ml-4 mt-4">
                <h1 className="text-3xl">{dessert}</h1>
                <h1 className="text-lg mt-2 h-20 w-60">{desserts[dessert][1]}</h1>
                <h1 className="absolute text-xl right-4 bottom-4">{desserts[dessert][0]}</h1>
            </div>
          </div>
          );
        })}
        </div>
        <div id="forMobile" className="hidden -xs:flex -xs:flex-col">
        {Object.keys(desserts).map((dessert) => {
          return ( 
          <div id={dessert} key={dessert} className="relative bg-slate-300 mb-4 mt-4 mr-4">
            <div>
            <img src={desserts[dessert][2]+{token}} className="w-full rounded-lg shadow-xl dark:shadow-gray-400" alt={dessert}/>  
            </div>
            <div id="data" className="ml-4 mt-4">
                <h1 className="text-xl">{dessert}</h1>
                <h1 className="text-md mt-2 h-20 w-60">{desserts[dessert][1].slice(0,70).concat("...")}</h1>
                <h1 className="absolute text-xl right-2 bottom-2">{desserts[dessert][0]}</h1>
            </div>
          </div>
          );
        })}
        </div>
        </div>
    )
}
