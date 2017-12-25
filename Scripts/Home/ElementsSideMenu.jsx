import React, { Component } from 'react';

import Calendar from './Calendar';
import Link from './Link';
import News from './News';
import SocialLink from './SocialLinks';
import LastMaterials from './LastMaterials';

import '../../Styles/Home.css';

class ElementsSideMenu extends Component {
    render() {
        return (
            <div className="elements-sidemenu">
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
            </div>   
        )
    }
}

export default ElementsSideMenu;

