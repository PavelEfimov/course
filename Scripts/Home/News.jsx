import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    
    render() {
        const { text, link } = this.props
        console.log(text, link);
        return (
            <div>
                <p>{text}</p>
                <Link className="menu-link" to={link}>подробнее</ Link>
            </div>
        );
    }
}

export default News;