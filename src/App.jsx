import React from 'react';
import Demo from "./components/Demo";
import Hero from "./components/Hero";
import "./App.css";

const App = () => {
  return (
    <main>
      <div className='main'>
        <div className='gradient'/>
        <div className='App'>
          <Hero />
          <Demo />
        </div>
      </div>
    </main>
  )
}

export default App