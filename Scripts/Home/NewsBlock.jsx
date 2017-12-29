import React, { Component } from 'react';
import Some from './Some';
import News from './News';
const data = [
    {
        text: "News1", link: "/Home/:news1", fulltext:'bvcfgbhrghbgrfgbhtghygvth'
    },
    {
        text: "News2", link: "/Home/:news2", fulltext: 'rtyrtyhuhgtfrthoi99u9ur9rj3j'
}];

class NewsBlock extends Component {
    render() {
        return (
            <div className="home-newsBlock">
                {data.map( (item, index) => <Some key={index} text={item.text} link={item.link} />)}
            </div>
        )
    }
}
export default NewsBlock;