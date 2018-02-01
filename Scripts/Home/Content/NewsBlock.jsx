import React, { Component } from 'react';
import Some from './Some';
import News from './News';
/*const data = [
    {
        text: "News1", link: "/Home/News/:newsFirst", fulltext:'bvcfgbhrghbgrfgbhtghygvth'
    },
    {
        text: "News2", link: "/Home/News/:newsSecond", fulltext: 'rtyrtyhuhgtfrthoi99u9ur9rj3j'
}];*/

const xhr = new XMLHttpRequest();

class NewsBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: []
        }
    }

    componentDidMount() {
        xhr.open('GET','/main');
        xhr.onload = e => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                const response = JSON.parse(xhr.responseText);
                this.setState({ news: response});
            }
            else {
                console.error(xhr.statusText);
            }
        };
        xhr.send();
    }

    componentWillUnmount() {
        xhr.abort();
    }

    render() {
        const { news } = this.state;
        return (
            <div className="home-newsBlock">
                {news.map( (item, index) => <Some key={index} inf={item.inf} newsid={item.newsid} />)}
            </div>
        )
    }
}
export default NewsBlock;