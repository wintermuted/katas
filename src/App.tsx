import React from 'react';
import logo from './logo.svg';
import './App.css';
import { RestaurantMenu } from './interviews/atlassian/component/RestaurantMenu.component';

function App() {
  return (
    <div className="App">
      <h1>Components!</h1>
      <RestaurantMenu />
    </div>
  );
}

export default App;
