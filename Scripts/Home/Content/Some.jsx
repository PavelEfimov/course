import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Some extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { newsid, inf } = this.props;
        const link =  `/Home/News/:${newsid}`;
        return (
            <div>
                <p>{inf}</p>
                <Link className="menu-link" to={link} params={{newsid: newsid}}>подробнее</ Link>
            </div>
        )
    }
}

export default Some;