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
      // https://www.amazon.com/dp/B07X3M1P3Z?tag=drawnacom-20&linkCode=osi&th=1&psc=1
      name: 'Tortilla Blanket',
      imageName: 'images/tortilla-blanket.jpg',
      style: '1',
    },
    {
      // https://www.amazon.com/dp/B07L4BGL3D?tag=drawnacom-20&linkCode=osi&th=1&psc=1
      name: 'RGB Mousepad',
      imageName: 'images/rgb-mousepad.jpg',
      style: '3',
    },
    {
      name: '$50 Amazon Giftcard',
      imageName: 'images/amazon-gc.jpg',
      style: '2',
    },
    {
      name: 'Spider-Man Miles Morales',
      imageName: 'images/spiderman-mm.jpg',
      style: '3',
    },
    {
      // https://www.amazon.com/dp/B07GXN1B7R?tag=drawnacom-20&linkCode=osi&th=1&psc=1
      name: 'Mini Portable 1080p Projector',
      imageName: 'images/projector.jpg',
      style: '2',
    },
    {
      // https://www.amazon.com/dp/B000I1WP7W?tag=drawnacom-20&linkCode=osi&th=1&psc=1
      name: 'Chemex Pour-Over',
      imageName: 'images/chemex.jpg',
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
