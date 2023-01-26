import React from 'react'
import { SetParticles } from './SetParticles'
import { AboutContainer } from './AboutContainer'

export const HomeContainer = () => {
  return (
    <div className='relative'>
    <AboutContainer />
    <SetParticles />
    </div>
  )
}
