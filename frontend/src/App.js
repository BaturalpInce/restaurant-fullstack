import React from 'react';
import { Header, MenuContainer, HomeContainer, ContactContainer } from './components';
import { Routes, Route } from 'react-router-dom'; 
const App = () => {
  return (
    <div className="w-screen h-auto flex flex-col">
      <Header />
      <main className="w-full h-screen">
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/home" element={<HomeContainer />} />
          <Route path="/menu" element={<MenuContainer />} />
          <Route path="/contact" element={<ContactContainer />} />
        </Routes>
      </main>
    </div>
  )
}

export default App