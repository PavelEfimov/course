import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../Styles/Home.css';

class SideMenu extends Component {
    constructor() {
        super();
        this.state = {
            links: []
        }
    }

    componentDidMount() {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', '/api/Home', false)
        xhr.send()
        const data = JSON.parse(xhr.responseText);   
        this.setState({ links: data });
    }
    
    render() {
        const { links } = this.state;
        return (
            <div className="home-sidemenu">
                <ul>
                    { links.map((item, index) => ( 
                        <li className={item.special === true? "sidemenu-link link-special": "sidemenu-link"}   key={index}>
                            <Link to={item.link}  className="link-decoration">{item.title}</Link>
                        </li>)) }
                </ul>
            </div>
        );
    }
}

export default SideMenu;