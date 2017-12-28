import React, { Component } from 'react';

import Slidebox from './Slidebox';
import Title from './Title';
import NewsBlock from './NewsBlock';
import Elements from './Elements';

import '../../Styles/App.css';

const Home = () => {
 return [
  <Slidebox key={0} />,
      <Elements key={1} >        
          <Title />
          <NewsBlock />                
      </Elements>
    ]
};
export default Home;