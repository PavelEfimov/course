import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Some extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { text, link , fulltext } = this.props
        return (
            <div>
                <p>{text}</p>
                <Link className="menu-link" to={link}>подробнее</ Link>
            </div>
        )
    }
}

export default Some;