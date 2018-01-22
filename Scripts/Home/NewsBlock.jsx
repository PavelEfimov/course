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
        xhr.open('GET','/main', false);
        xhr.send();
        const response = JSON.parse(xhr.responseText);
        this.setState({ news: response});
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