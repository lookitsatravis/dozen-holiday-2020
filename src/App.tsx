import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Snow from './components/Snow';
import Tree from './components/Tree';
import Ground from './components/Ground';
import Lights from './components/Lights';
import Gifts from './components/Gifts';

interface AppProps {}

function App({}: AppProps) {
  // Create the count state.
  const [count, setCount] = useState(0);
  // Create the counter (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  // Return the App component.
  return (
    <div className="App">
      <Snow />
      <Lights />
      <Header />
      <Gifts />
      <Tree />
      <Ground />
    </div>
  );
}

export default App;
