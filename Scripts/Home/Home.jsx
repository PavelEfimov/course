import React, { Component } from 'react';

import Slidebox from './Slidebox';
import Title from './Title';
import News from './News';
import Elements from './Elements';

import '../../Styles/App.css';

const Home = () => {
 return [
  <Slidebox key={0} />,
      <Elements key={1} >        
          <Title />
          <News />                
      </Elements>
    ]
};
export default Home;