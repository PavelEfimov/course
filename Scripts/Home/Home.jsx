import React, { Component } from 'react';

import Sidemenu from './Sidemenu';
import Slidebox from './Slidebox';
import Title from './Title';
import News from './News';
import Elements from './Elements';

import '../../Styles/App.css';

const Home = () => {
 return [
  <Slidebox key={0} />,
  <Sidemenu key={1} />,
      <Elements key={2} >        
          <Title />
          <News />                
      </Elements>
    ]
};
export default Home;