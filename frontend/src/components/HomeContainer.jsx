import React from 'react'
import { SetParticles } from './SetParticles'
import { AboutContainer } from './AboutContainer'
import { Gallery } from './Gallery'
import { Reviews } from './Reviews'
import { FAQ } from './FAQ'

export const HomeContainer = () => {
  return (
    <>
    <SetParticles />
    <div className='w-full flex flex-col'>
    <AboutContainer />
    <Gallery />
    <Reviews />
    <FAQ />
    </div>
    </>
  )
}
