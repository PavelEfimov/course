import React, { Component } from 'react';

import '../../Styles/Element.css';

const xhrFirst = new XMLHttpRequest();
const xhrSecond = new XMLHttpRequest();

class News extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            inf: []
        }
    }



    componentDidMount() {
        const { newsID } = this.props.match.params;
        xhrFirst.open('POST', '/Home/News/:news', true);
        xhrFirst.send(newsID.slice(1));

        xhrSecond.open('GET', '/news', false);
        xhrSecond.send();
        const response = JSON.parse(xhrSecond.responseText);
        console.log(response);
       this.setState({ inf: response });
    }

    componentWillUnmount() {
        xhrFirst.abort();
        xhrSecond.abort();
    }

    render() {
        const { newsID } = this.props.match.params;
        return (
            <div className="element">
               <h1>Single news!</h1>
               <h2>news ID:{ newsID } !</h2>       
            </div>
        );
    }
}

export default News;