import React, { Component } from 'react';

import Slidebox from './Slidebox/Slidebox';
import Title from './Content/Title';
import NewsBlock from './Content/NewsBlock';
import Content from './Content/Content';

import '../../Styles/App.css';

const Home = () => {
 return [
  <Slidebox key={0} />,
      <Content key={1} >        
          <Title />
          <NewsBlock />                
      </Content>
    ]
};
export default Home;