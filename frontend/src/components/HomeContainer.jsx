import React from 'react'
import { SetParticles } from './SetParticles'
import { AboutContainer } from './AboutContainer'
import { Gallery } from './Gallery'
import { Reviews } from './Reviews'

export const HomeContainer = () => {
  return (
    <>
    <SetParticles />
    <div className='w-full flex flex-col'>
    <AboutContainer />
    <Gallery />
    <Reviews />
    </div>
    </>
  )
}
