import React from 'react';
import '../styles/Home.css';

const Home = () => (
  <div className="home-body">
    <h1>
      Welcome to My Calculator!
      {' '}
      <span role="img" aria-label="calc">🧮</span>
    </h1>
    <p>
      Hi! I am
      {' '}
      <a href="https://stevenchung.me" target="_blank" rel="noreferrer">Steven</a>
      {' '}
      . I created a calculator as a project to learn more about how React.js works. It is very confusing but very pretty cool so far. You can go and head to
      {' '}
      <a href="/calculator">Calculator</a>
      {' '}
      to try it out!
    </p>
    <p>
      Here is the source code:
      {' '}
      <a href="https://github.com/jcy2704/calculator" target="_blank" rel="noreferrer">Github Calculator</a>
    </p>
  </div>
);

export default Home;