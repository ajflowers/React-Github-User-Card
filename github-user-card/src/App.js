import React from 'react'
import CardsList from './components/CardsList'
import './App.css'

function App() {
  return (
    <div className="container">
      <div className="header">
        <img src="./assets/lambdalogo.png" alt="Lambda Logo"/>
        <span role="img" aria-label="heart">❤️'s</span>
        <img src="./assets/githublogo.png" alt="GitHub Logo" />
      </div>
      <CardsList />
    </div>
  );
}

export default App;
