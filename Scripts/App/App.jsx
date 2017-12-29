import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { render } from 'react-dom';

import Sidemenu from '../Home/Sidemenu';
import Routes from '../Routes/Routes';
import Header from '../Header/Header';
import ElementsSideMenu from '../Home/ElementsSideMenu';

import '../../Styles/App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Sidemenu />
                <Switch>
                { Routes.map( (route, index) => <Route path={ route.path }  exact={ route.exact } component={ route.component } key={ index } /> ) }
                <Redirect to="/Home" from="/" />  
                </Switch>  
                <ElementsSideMenu />
            </div>
        )
    }
}

export default App;