import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { render } from 'react-dom';

import Routes from '../Routes/Routes';
import Header from '../Header/Header';

import '../../css/App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                {Routes.map((route, index)=> <Route path={route.path}  exact={route.exact} component={route.component} key={index} />)}
                <Redirect to="/Home" from="/" />      
            </div>
        )
    }
}

export default App;