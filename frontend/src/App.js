import React from 'react';
import { Header } from './components';
import { MainContainer } from './components';
import { Routes, Route } from 'react-router-dom'; 
const App = () => {
  return (
    <div className="w-screen h-auto flex flex-col">
      <Header />
      <main className="mt-24 p-8 w-full">
        <Routes>
          <Route path="/*" element={<MainContainer />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
