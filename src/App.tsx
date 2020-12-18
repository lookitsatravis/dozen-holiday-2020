import React from 'react';
import './App.css';
import Gifts, { Gift } from './components/Gifts';
import Ground from './components/Ground';
import Header from './components/Header';
import Lights from './components/Lights';
import Snow from './components/Snow';
import Tree from './components/Tree';

function App() {
  const gifts: Gift[] = [
    {
      name: 'RGB Mousepad',
      imageName: 'images/rgb-mousepad.jpg',
      style: '1',
    },
    {
      name: '$50 Amazon Gift Card',
      imageName: 'images/amazon-gc.jpg',
      style: '3',
    },
    {
      name: 'Portable Squatty Potty',
      imageName: 'images/squatty-potty.jpg',
      style: '2',
    },
    {
      name: 'Spider-Man Miles Morales',
      imageName: 'images/spiderman-mm.jpg',
      style: '3',
    },
    {
      name: 'The Child Plush',
      imageName: 'images/the-child.jpg',
      style: '2',
    },
    {
      name: 'Mini Projector',
      imageName: 'images/projector.jpg',
      style: '1',
    },
  ];

  return (
    <div className="App">
      <Snow />
      <Lights />
      <Header />
      <Gifts gifts={gifts} />
      <Tree />
      <Ground />
    </div>
  );
}

export default App;
