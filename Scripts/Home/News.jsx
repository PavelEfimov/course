import React, { Component } from 'react';

const xhr = new XMLHttpRequest();

class News extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }
    
    componentDidMount() {
        xhr.open('GET', '/db/Home', false)
        xhr.send()
        const response = JSON.parse(xhr.responseText);   
        this.setState({ data: response });
    }

    componentWillUnmount() {
        xhr.abort();
    }

    render() {
        const { data } = this.state;
        return (
            <div className="home-news">
            { data.map( (item, index) => <h1 key={ index }>{ item.name }</h1> ) }
            </div>
        )
    }
}
export default News;