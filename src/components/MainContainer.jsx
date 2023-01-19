import React, { useState, useEffect } from 'react';
import { collection, getDocs, doc } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import { default as db } from "../firebase.config";

export const MainContainer = () => {
  const [desserts, setDesserts] = useState([]);
  const [mainDishes, setMainDishes] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const bucket = "fullstackrestaurant-32f85.appspot.com"
  const referenceLink = "gs://" + bucket + "images/";
  useEffect(() => {
    const fetchMenuItems = async () => {
      const snapshot = await getDocs(collection(db.db, "menu"));
      snapshot.forEach((doc) => {
        if (doc.id === "Desserts"){
          setDesserts(doc.data());
        }
        else if (doc.id === "Drinks"){
          setDrinks(doc.data());
        }
        else if (doc.id === "Main Dishes"){
          setMainDishes(doc.data());
        }
        console.log(doc.id, " => ", doc.data());
      });
    }
    fetchMenuItems()
    .catch(console.error);
  }, []);

  return (
    <div>
      <div><h1>MENU</h1></div>
      <h1>Desserts</h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-2">
        {Object.keys(desserts).map((dessert) => {
          const refLinkUpdate = referenceLink + dessert.toLowerCase() + ".jpg";
          const itemURL = "Images/"+dessert.toLowerCase()+".jpg";
          const storage = db.storage;
          const sourceURL = getDownloadURL(ref(storage, itemURL));
          console.log(sourceURL);
          return ( 
          <div id={dessert} className="bg-slate-200 mb-4 mt-4 mr-4">
            <h1>{dessert}</h1>
            <h1>{desserts[dessert][0]}</h1>
            <h1>{desserts[dessert][1]}</h1>
            <h1>{desserts[dessert][2]}</h1>
          </div>
          );
        })}
      </div>
      <h1>Main Dishes</h1>
      <div className=" grid md:grid-cols-3 sm:grid-cols-2">
        {Object.keys(mainDishes).map((mainDish) => {
          return ( 
          <div id={mainDish} className="bg-slate-200 mb-4 mt-4 mr-4">
            <h1>{mainDish}</h1>
            <h1>{mainDishes[mainDish][0]}</h1>
            <h1>{mainDishes[mainDish][1]}</h1>
            <h1>{mainDishes[mainDish][2]}</h1>
          </div>
          );
        })}
      </div>

    </div>
  )
}
