import React from 'react';

import Banner from './Banner';
import SocialLinks from './SocialLinks';
import NavigationMenu from './NavigationMenu';

//import '../../css/Header.css';

const Header = () => {
  return (
    <div className="header">
      <Banner />
      <div className="header-navigation">
        <SocialLinks />
        <NavigationMenu />
      </div>
    </div>
  )
}

export default Header;
