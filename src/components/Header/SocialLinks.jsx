import React from 'react';

//import '../../css/Header.css';
//import youtube from '../../images/icons/youtube.png';
//import vkcom from '../../images/icons/vkcom.png';
//import instagram from '../../images/icons/instagram.png';

const links = [
  {href: "https://vk.com/feed", title: "vk.com"/*, img: vkcom*/},
  {href: "https://www.instagram.com/", title: "instagram.com"/*, img: instagram*/ },
  {href: "https://www.youtube.com/", title: "youtube.com"/*, img: youtube*/}
]

const SocialLinks = () => (
  <div className="navigation-social-links">
    {links.map((item, index) => (
      <a title={item.title} key={index} href={item.href} className="social-links__link ">
        <img  key={index} src={item.img} alt="link" />
      </a>
    ))}
  </div>
)

export default SocialLinks;
