import React from 'react';
import { MainDishes } from './MainDishes.jsx';
import { Desserts } from './Desserts.jsx';
import { Drinks } from './Drinks.jsx';
import { SetParticles } from './SetParticles'

export const MenuContainer = () => {
  return (
    <>
    <SetParticles />
    <div className="w-screen z-50">
      <div className="text-6xl text-center pt-16">Menu</div>
      <MainDishes />
      <Desserts />
      <Drinks />
    </div>
    </>
  )
}
