import React from 'react';

import '../../Styles/Header.css';

import youtube from '../../Images/Icons/youtube.png';
import vkcom from '../../Images/Icons/vkcom.png';
import instagram from '../../Images/Icons/instagram.png';

const links = [
  {href: "https://vk.com/feed", title: "vk.com", img: vkcom},
  {href: "https://www.instagram.com/", title: "instagram.com", img: instagram },
  {href: "https://www.youtube.com/", title: "youtube.com", img: youtube }
]

const SocialLinks = () => (
  <div className="navigation-social-links">
    { links.map( (item, index) => (
      <a title={item.title} key={index} href={item.href} className="social-links__link ">
        <img  key={index} src={item.img} alt="link" />
      </a>
    ) ) }
  </div>
)

export default SocialLinks;
