import React, {useState, useEffect} from 'react'

export const dessertNames = [];
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
        <div className="relative text-4xl mt-8 mb-4 text-center -xs:text-3xl">Desserts</div>
        <div className="grid 2xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 -xs:flex -xs:flex-col">
        {Object.keys(desserts).map((dessert) => {
          dessertNames.push(dessert);
          let idCreator = dessert.replace(/\s+/g, '');
          idCreator = idCreator.replaceAll(/"|'/g, '');
          return ( 
          <div id={idCreator} key={dessert} className="flex -xs:flex-col relative bg-slate-300 mb-4 mt-4 mr-4">
            <div>
                <img src={desserts[dessert][2]+{token}} className="h-60 w-72 rounded-lg shadow-xl dark:shadow-gray-400 -xs:w-auto" alt={dessert} />  
            </div>
            <div id="data" className="ml-4 mt-4">
                <h1 className="text-3xl -xs:text-lg">{dessert}</h1>
                <h1 className="text-lg mt-2 h-20 w-52 -xs:text-sm -xs:mt-1">{desserts[dessert][1].length > 65 ? desserts[dessert][1].slice(0,70).concat("...") : desserts[dessert][1]}</h1>                
                <h1 className="absolute text-xl right-4 bottom-4 -xs:text-sm -xs:right-2 -xs:bottom-2">{desserts[dessert][0]}</h1>
            </div>
          </div>
          );
        })}
        </div>
        </div>
    )
}
