import React, { Component } from 'react';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            response: []
        }
    }
    
    componentDidMount() {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', '/api/Home', false)
        xhr.send()
        const data = JSON.parse(xhr.responseText);
        console.log(xhr.response);        
        this.setState({ response: data });
    }

    render() {
           const { response } = this.state; 
        return (
            <div>
                <ul>{ response.map( (item, index) => <li key={index}>{item.name}</li> ) }</ul>
            </div>
        )
    }
}

//const Home = () => <div><h1>HOME</h1></div>

export default Home;