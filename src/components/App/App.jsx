import React, { Component } from 'react';
import { render } from 'react-dom';

import Routes from '../Routes/Routes';

class App extends Component {
    render() {
        return (
            <div>
                <h1>Hello world</h1>
                {Routes.map((route, index)=>(
                <Route path={route.path} 
                    exact={route.exact} 
                    component={route.component} key={index} />))}
                <Redirect to="/Home" from="/" />      
            </div>
        )
    }
}

export default App;