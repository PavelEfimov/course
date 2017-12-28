import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../Styles/Home.css';

const links = [
    {link: "/Home/History", title: "История храма"},
    {link: "/Home/Shrines", title: "Святыни храма"},
    {link: "/Home/Elders", title: "Оптинские старцы"},
    {link: "/Home/School", title: "Воскресная школа"},
    {link: "/Home/AudioGallery", title: "Аудиогалерея"},
    {link: "/Home/VideoGallery", title: "Видеогалерея"},
    {link: "/Home/PhotoGallery", title: "Фотогалерея"},
    {link: "/Home/Library", title: "Библиотека" },
    {link: "/Home/Help", title: "Помощь храму"},
    {link: "/Home/Location", title: "Как добраться...", special: true},
    {link: "/Home/Dugna", title: "Дугна православная", special: true},
    {link: "/Home/Cloister", title: "Обитель \"Отрада и Утешение\" ", special: true},
    {link: "/Home/Center", title: "Центр \"Русский берег\" ", special: true},
  ];

class SideMenu extends Component {
    //target="_blank" Для страниц, открывающихся в новом окне
    render() {
        return (
            <div className="home-sidemenu">
                <ul>
                    { links.map((item, index) => ( 
                        <li className={ item.special === true? "sidemenu-link link-special": "sidemenu-link" }   key={ index }>
                            <Link to={ item.link }  className="link-decoration" >{ item.title }</Link>
                        </li>)) }
                </ul>
            </div>
        );
    }
}

export default SideMenu;