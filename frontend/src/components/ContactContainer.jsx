import React from 'react';
import { Contact } from './Contact';
import { SetParticles } from './SetParticles';
export const ContactContainer = () => {
  return (
    <div className='h-full'>
        <div className="fixed -z-30">
            <SetParticles />
        </div>
        <Contact />
    </div>
  )
}
