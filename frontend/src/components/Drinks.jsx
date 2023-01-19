import React, {useState, useEffect} from 'react'

export const Drinks = () => {
    const [drinks, setDrinks] = useState([]);

    useEffect(() => {
        const fetchDrinks = async () => {
            const response = await fetch('http://localhost:5050/drinks')
            const responseJson = await response.json()
            console.log(responseJson);
            setDrinks(responseJson);
        }
        fetchDrinks();
    },[]);
    
    const token = process.env.TOKEN;

    return (
        <div id="DrinksContainer" className='ml-8 mr-8'>
        <div className="text-4xl">Drinks</div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2">
        {Object.keys(drinks).map((drink) => {
          return ( 
          <div id={drink} key={drink} className="flex relative bg-slate-300 mb-4 mt-4 mr-4">
            <div>
            <img src={drinks[drink][2]+{token}} className="h-60 w-80 rounded-l" />  
            </div>
            <div id="data" className="ml-4 mt-4">
                <h1 className="text-3xl">{drink}</h1>
                <h1 className="text-lg mt-2 h-20 w-sm ">{drinks[drink][1]}</h1>
                <h1 className="absolute text-xl right-8 bottom-8">{drinks[drink][0]}</h1>
            </div>
          </div>
          );
        })}
        </div>
        </div>
    )
}