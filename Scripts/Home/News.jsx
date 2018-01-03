import React, { Component } from 'react';

import '../../Styles/Element.css';

const xhr = new XMLHttpRequest();

class News extends Component {
    constructor(props) {
        super(props); 
    }

    componentDidMount() {
        const { newsID } = this.props.match.params;
        xhr.open('POST', '/Home/News/:news', true);
        xhr.send(newsID);

        xhr.open('GET', `/Home/News/:${newsID}`, true);
        xhr.send()
        alert(xhr.responseText);
    }

    componentWillUnmount() {
        xhr.abort();
    }


    render() {
        const { newsID } = this.props.match.params;
        return (
            <div className="element">
               <h1>Single news!</h1>
               <h2>{ newsID }</h2>               
            </div>
        );
    }
}

export default News;