import React from 'react';
import { LoremIpsum } from 'react-lorem-ipsum';

const Home = () => (
  <section className="main container">
    <h2 className="headline">Welcome to our page!</h2>
    <div className="section-text">
      <LoremIpsum />
    </div>
    <div className="section-text">
      <LoremIpsum />
    </div>
  </section>
);

export default Home;
