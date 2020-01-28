import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Card from './components/Card';

function App() {
  return (
    <div className="container">
      <Navigation />
      <div className="row justify-content-center">
        <Card
          nombre="Mario"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum odio eros, accumsan at aliquam ac, lobortis ac enim."
        />
        <Card
          nombre="Luigi"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum odio eros, accumsan at aliquam ac, lobortis ac enim."
        />
        <Card
          nombre="Toad"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum odio eros, accumsan at aliquam ac, lobortis ac enim."
        />
      </div>
    </div>
  );
}

export default App;
