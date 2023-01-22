import React from 'react';
import { MainDishes } from './MainDishes.jsx';
import { Desserts } from './Desserts.jsx';
import { Drinks } from './Drinks.jsx';

export const MenuContainer = () => {
  return (
    <div className="w-screen bg-slate-50">
      <div className="text-6xl text-center pt-16">Menu</div>
      <MainDishes />
      <Desserts />
      <Drinks />
    </div>
  )
}
