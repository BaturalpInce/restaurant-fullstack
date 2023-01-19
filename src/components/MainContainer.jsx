import React, { useState, useEffect } from 'react';
import { collection, getDoc, doc } from "firebase/firestore";

import db from "../firebase.config";

export const MainContainer = () => {
  const [desserts, setDesserts] = useState([]);

  useEffect(() => {
    const fetchDesserts = async () => {
      const docRef = doc(db.db, "menu", "Desserts");
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
      setDesserts(docSnap.data());
    }
    fetchDesserts()
    .catch(console.error);
  }, []);


  return (
    <div>
      <div><h1>MENU</h1></div>
      <div><h1>Desserts</h1>
        {Object.keys(desserts).map((dessert) => {
          console.log(dessert);
          console.log(desserts[dessert]);
          return ( 
          <div id={dessert}>
            <h1>{dessert}</h1>
            <h1>{desserts[dessert][0]}</h1>
            <h1>{desserts[dessert][1]}</h1>
            <h1>{desserts[dessert][2]}</h1>
          </div>
          );
        })}
      </div>

    </div>
  )
}
