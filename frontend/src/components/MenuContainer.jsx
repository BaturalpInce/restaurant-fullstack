import React from 'react';
import { MainDishes } from './MainDishes.jsx';
import { Desserts } from './Desserts.jsx';
import { Drinks } from './Drinks.jsx';
import { SetParticles } from './SetParticles'

export const MenuContainer = () => {
  return (
    <>
    <SetParticles />
    <div className="mt-32 w-screen z-30">
      <div className="relative mt-12 text-6xl text-center -xs:text-4xl">Menu</div>
      <MainDishes />
      <Desserts />
      <Drinks />
    </div>
    </>
  )
}
