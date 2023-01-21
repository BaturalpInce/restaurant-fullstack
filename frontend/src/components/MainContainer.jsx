import React, { useState, useEffect } from 'react';
import { MainDishes } from './MainDishes.jsx';
import { Desserts } from './Desserts.jsx';
import { Drinks } from './Drinks.jsx';

export const MainContainer = () => {
  const [mainDishes, setMainDishes] = useState([]);
  const [drinks, setDrinks] = useState([]);

  return (
    <div className="w-screen bg-slate-50">
      <div className="text-6xl text-center pt-16">Menu</div>
      <MainDishes />
      <Desserts />
      <Drinks />
    </div>
  )
}
