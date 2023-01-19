import React, {useState, useEffect} from 'react'

export const Desserts = () => {
    const [desserts, setDesserts] = useState([]);
    useEffect(() => {
        const fetchDesserts = async () => {
            const response = await fetch('http://localhost:5050/desserts')
            const responseJson = await response.json()
            console.log(responseJson);
            setDesserts(responseJson);
        }
        fetchDesserts();
    },[]);
    const token = process.env.TOKEN;

    return (
        <div id="DessertsContainer" className='ml-8 mr-8'>
        <div className="text-4xl">Desserts</div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2">
        {Object.keys(desserts).map((dessert) => {
          return ( 
          <div id={dessert} key={dessert} className="flex relative bg-slate-300 mb-4 mt-4 mr-4">
            <div>
            <img src={desserts[dessert][2]+{token}} className="h-60 w-80 rounded-l" />  
            </div>
            <div id="data" className="ml-4 mt-4">
                <h1 className="text-3xl">{dessert}</h1>
                <h1 className="text-lg mt-2 h-20 w-sm ">{desserts[dessert][1]}</h1>
                <h1 className="absolute text-xl right-8 bottom-8">{desserts[dessert][0]}</h1>
            </div>
          </div>
          );
        })}
        </div>
        </div>
    )
}
