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
      // https://www.amazon.com/dp/B07L4BGL3D?tag=drawnacom-20&linkCode=osi&th=1&psc=1
      name: 'RGB Mousepad',
      imageName: 'images/rgb-mousepad.jpg',
      style: '1',
    },
    {
      // https://www.amazon.com/dp/B07X3M1P3Z?tag=drawnacom-20&linkCode=osi&th=1&psc=1
      name: 'Tortilla Blanket',
      imageName: 'images/tortilla-blanket.jpg',
      style: '3',
    },
    {
      // https://www.amazon.com/dp/B00HSR1DHM?tag=drawnacom-20&linkCode=osi&th=1&psc=1
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
      // https://www.amazon.com/dp/B08F666TBW?tag=drawnacom-20&linkCode=osi&th=1&psc=1
      name: 'The Child Plush',
      imageName: 'images/the-child.jpg',
      style: '2',
    },
    {
      // https://www.amazon.com/dp/B075JF5DTH?tag=drawnacom-20&linkCode=osi&th=1&psc=1
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
