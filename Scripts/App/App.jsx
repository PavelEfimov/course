import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { render } from 'react-dom';

import LeftMenu from '../LeftMenu/LeftMenu';
import Routes from '../Routes/Routes';
import Header from '../Header/Header';
import RightMenu from '../RightMenu/RightMenu';

import '../../Styles/App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <LeftMenu />
                <Switch>
                { Routes.map( (route, index) => <Route path={ route.path }  exact={ route.exact } component={ route.component } key={ index } /> ) }
                <Redirect to="/Home" from="/" />  
                </Switch>  
                <RightMenu />
            </div>
        )
    }
}

export default App;