import React, { Component } from 'react';
class News extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }
    
    componentDidMount() {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', '/db/Home', false)
        xhr.send()
        const d = JSON.parse(xhr.responseText);   
        this.setState({ data: d });
    }

    render() {
        const { data } = this.state;
        return (
            <div className="home-news">
            { data.map( (item, index) => <h1 key={index}>{item.name}</h1> ) }
            </div>
        )
    }
}
export default News;