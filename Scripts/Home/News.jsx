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
      //  xhrFirst.open('POST', '/Home/News/:news', true);
        /*xhrFirst.send(newsID.slice(1));

        xhrSecond.open('GET', '/news', false);
        xhrSecond.send();
        const response = JSON.parse(xhrSecond.responseText);
        console.log(response);
       this.setState({ inf: response });*/

        xhrFirst.open('POST', '/Home/News/:news');
        xhrFirst.send(newsID.slice(1));

        xhrSecond.open('GET', '/news');
        xhrSecond.onload = e => {
            if (xhrSecond.readyState == 4 && xhrSecond.status == 200) {
                const response = JSON.parse(xhrSecond.responseText);
                console.log(response);
                this.setState({ inf: response }); 
            }
            else {
                console.error(xhrSecond.statusText);
            }
            };
        xhrSecond.send();
    }

    componentWillUnmount() {
        xhrFirst.abort();
        xhrSecond.abort();
    }

    render() {
        const { newsID } = this.props.match.params;
        const { inf } = this.state;
        return (
            <div className="element">
               <h1>Single news!</h1>
               <h2>news ID:{ newsID } !</h2>
               <h3>{inf.map( (item, index) => <p key={index}>{item.fullinf}</p>) }</h3>      
            </div>
        );
    }
}

export default News;