import React, {useState, useEffect} from 'react'

export const MainDishes = () => {
    const [mainDishes, setMainDishes] = useState([]);

    useEffect(() => {
        const fetchMainDishes = async () => {
            const response = await fetch('http://localhost:5050/maindishes')
            const responseJson = await response.json()
            console.log(responseJson);
            setMainDishes(responseJson);
        }
        fetchMainDishes();
    },[]);
    
    const token = process.env.TOKEN;

    return (
        <div id="MainDishesContainer" className="ml-8 mr-8">
        <div className="text-4xl">Main Dishes</div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2">
        {Object.keys(mainDishes).map((maindish) => {
          return ( 
          <div id={maindish} key={maindish} className="flex relative bg-slate-300 mb-4 mt-4 mr-4">
            <div>
            <img src={mainDishes[maindish][2]+{token}} className="h-60 w-80 rounded-l" />  
            </div>
            <div id="data" className="ml-4 mt-4">
                <h1 className="text-3xl">{maindish}</h1>
                <h1 className="text-lg mt-2 h-20 w-sm ">{mainDishes[maindish][1]}</h1>
                <h1 className="absolute text-xl right-8 bottom-8">{mainDishes[maindish][0]}</h1>
            </div>
          </div>
          );
        })}
        </div>
        </div>
    )
}

