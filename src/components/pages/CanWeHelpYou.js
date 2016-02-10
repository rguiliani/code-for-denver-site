import React from 'react';

import Hero from '../segments/Hero';
import Interested from '../segments/Interested';

const MainText = () => (
    <section className="standard primary">
      <h1>Can We Help You?</h1>
      <p>Nullam rhoncus dui id bibendum venenatis. Proin non egestas lorem, sed ornare nulla. Aliquam erat volutpat. Aenean tristique urna risus, ut pellentesque erat fringilla quis. Etiam mattis ligula sit amet condimentum ultricies. Donec et accumsan velit, nec tempus neque. Morbi lorem turpis, pulvinar porta lectus eu, accumsan accumsan elit. Praesent nibh magna, pretium vitae est nec, porttitor viverra arcu.</p>
    </section>
);

const HeroBackground="hero.png";
const HeroTitle= "Can We Help You hero.";
const HeroContent = <p>Can We Help You hero content</p>;


const CanWeHelpYou = () => (
  <main>
    <Hero background={HeroBackground} title={HeroTitle} content={HeroContent} />
    <Interested />
    <MainText />
  </main>
);

export default CanWeHelpYou;
