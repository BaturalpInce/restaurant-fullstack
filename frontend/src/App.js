import React from 'react';
import { Header, MenuContainer, HomeContainer } from './components';
import { Routes, Route } from 'react-router-dom'; 
const App = () => {
  return (
    <div className="w-screen h-auto flex flex-col">
      <Header />
      <main className="mt-20 w-full">
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/home" element={<HomeContainer />} />
          <Route path="/menu" element={<MenuContainer />} />
        </Routes>
      </main>
    </div>
  )
}

export default App