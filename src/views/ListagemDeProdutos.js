import React, { Component } from 'react';
import { View,StyleSheet } from 'react-native';

import Produto from '../components/Produto';

export default class ListagemDeProdutos extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <Produto />
            </View>
        )
    }
}