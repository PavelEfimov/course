import React, { Component } from 'react';

import Sidemenu from './Sidemenu';
import Slidebox from './Slidebox';
import Title from './Title';
import Elements from './Elements';
import ElementsSideMenu from './ElementsSidemenu';
import Calendar from './Calendar';
import Link from './Link';
import News from './News';
import SocialLink from './SocialLinks';
import LastMaterials from './LastMaterials';

import '../../Styles/App.css';

const Home = () => (
    <div className="home">
      <Sidemenu /> 
      <Elements> 
          <Slidebox />
          <div className="title-news">
          <Title />
          <News />
          </div>
          <ElementsSideMenu >
          <div className="elements-some"> 
            <Calendar />
            <Link />
            <Link />
            <Link />
          </div>  
          <div className="elements-socialLinks">
            <SocialLink link="https://ok.ru/" place="OK"/>
            <SocialLink link="https://vk.com/" place="VK"/>
          </div>
          <LastMaterials title ="Последний фотоальбом" />
          <LastMaterials title ="Последнее видео" />
          </ ElementsSideMenu>
        </Elements>
         </div>
);

export default Home;