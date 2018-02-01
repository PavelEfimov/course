import React, { Component } from 'react';

import Calendar from './Calendar';
import Link from './Link';
import SocialLink from './SocialLinks';
import LastMaterials from './LastMaterials';

import '../../Styles/RightMenu.css';

class RightMenu extends Component {
    render() {
        return (
            <div className="rightMenu">
            <Calendar />
            <Link />
            <Link />
            <Link />
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

export default RightMenu;

