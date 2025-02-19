import React from 'react';
import logo from './logo.svg';
import './App.css';
import { main } from './interviews/atlassian/technical_interview_1';

function App() {
  main();

  return (
    <div className="App">
      <h1>Components!</h1>
    </div>
  );
}

export default App;
