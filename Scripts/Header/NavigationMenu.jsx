import React from 'react';
import { Link } from 'react-router-dom';

import '../../Styles/Header.css';

const menu = [
  {link : "/Home", title: " Главная / "},
  {link : "/Schedule", title: " Расписание богослужений / "},
  {link : "/Remembrance", title: " Поминовения / "},
  {link : "/Feedback", title: " Обратная связь / "},
  {link : "/Contacts", title: " Контакты "},
]

const NavigationMenu = () => (
  <div className="navigation-menu">
    {menu.map((item, index) => (
      <Link className="menu-link" key={index} to={item.link}>{item.title}</ Link>
    ))}
  </div>
)
export default NavigationMenu;
