import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight, StyleSheet } from 'react-native';

export default class Produto extends Component {
    acessarProduto() {
        
    }

    render() {
        return (
            <TouchableHighlight
                onPress={() => this.acessarProduto()} 
                underlayColor="#e3edf6"> 
            
                <View style={styles.container}>
                    <Image source={require('../imgs/sprite.jpg')} style={styles.imgProduto}>
                    </Image>

                    <View style={styles.infoProduto}>
                        <Text style={styles.nome}>
                            Moto G5
                        </Text>
                        
                        <View style={styles.displayInline} >
                            <Text>R$ 600,00</Text>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderColor: '#CCC',
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 10
    },
    imgProduto: {
        width: 125,
        height: 120
    },
    infoProduto: {
        flex: 1,
        marginLeft: 20
    },
    nome: {
        fontSize: 18,
        marginBottom: 5,
        color: '#000'
    },
    displayInline: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})