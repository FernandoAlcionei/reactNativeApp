import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableHighlight, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class Produto extends Component{

    visualizarImagens() {
        Actions.galeria({'images': this.props.produto.imagens})
    }

    render(){
        return(
            <View>
                <ScrollView style={styles.container}>
                    <TouchableHighlight
                        style={styles.containerImg}
                        underlayColor="#eaeaea"
                        onPress={()=> this.visualizarImagens() }>

                        <Image source={require('../imgs/sprite.jpg')} style={styles.imgProduto}></Image>
                    </TouchableHighlight>

                    <View style={styles.infoProduto} >
                        <View>
                            <Text style={styles.nome}>
                                {this.props.produto.nome}
                            </Text>
                        </View>
                        
                        <Text style={styles.dataDePublicacao}>
                            Publicado em: {this.props.produto.dataDePublicacao}
                        </Text>
                        
                        <View style={styles.descricao} >
                            <Text>{this.props.produto.descricao}</Text>
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