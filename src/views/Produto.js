import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableHighlight, StyleSheet } from 'react-native';

export default class Produto extends Component{

    render(){
        return(
            <View>
                <ScrollView style={styles.container}>
                    <TouchableHighlight
                        style={styles.containerImg}
                        underlayColor="#eaeaea"
                        onPress={()=> console.log('ok')}>

                        <Image source={require('../imgs/sprite.jpg')} style={styles.imgProduto}></Image>
                    </TouchableHighlight>

                    <View style={styles.infoProduto} >
                        <View>
                            <Text style={styles.nome}>
                                Moto G 6
                            </Text>
                        </View>
                        
                        <Text style={styles.dataDePublicacao}>
                            Publicado em 07/08/2018
                        </Text>
                        
                        <View style={styles.descricao} >
                            <Text>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50
    },
    containerImg: {
        height: 280,
        flex: 1,
    },
    imgProduto: {
        flex: 1,
        justifyContent:'flex-end'
    },
    infoProduto: {
        padding: 20
    },
    nome: {
        fontSize: 18,
        color: '#F47920',
        paddingRight: 10
    },
    dataDePublicacao:{
        fontSize: 12,
        marginBottom: 10
    },
    descricao:{
        padding: 10,
        borderBottomWidth: 0.5,
        borderTopWidth: 0.5,
        borderColor: '#F47920',
    }
});