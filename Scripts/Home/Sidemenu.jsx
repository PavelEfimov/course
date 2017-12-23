import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../Styles/Home.css';

const xhr = new XMLHttpRequest();

class SideMenu extends Component {
    constructor() {
        super();
        this.state = {
            links: []
        }
    }

    componentDidMount() {
        xhr.open('GET', '/api/Home', false)
        xhr.send()
        const response = JSON.parse(xhr.responseText);   
        this.setState({ links: response });
    }
    
    componentWillUnmount() {
        xhr.abort();
    }

    render() {
        const { links } = this.state;
        return (
            <div className="home-sidemenu">
                <ul>
                    { links.map((item, index) => ( 
                        <li className={ item.special === true? "sidemenu-link link-special": "sidemenu-link" }   key={ index }>
                            <Link to={ item.link }  className="link-decoration">{ item.title }</Link>
                        </li>)) }
                </ul>
            </div>
        );
    }
}

export default SideMenu;