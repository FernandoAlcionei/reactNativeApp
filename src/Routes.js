import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Home from './views/Home';
import Produto from './views/Produto';

export default class Routes extends Component {
    render(){
        return(
            <Router>
                <Scene initial key="home" component={Home} hideNavBar={true} />
                <Scene key="produto" component={Produto} hideNavBar={false} title="Produto" />
            </Router>
        );
    }
}