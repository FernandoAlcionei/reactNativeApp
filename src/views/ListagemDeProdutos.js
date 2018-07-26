import React, { Component } from 'react';
import { View, ListView, StyleSheet } from 'react-native';

import ModeloDeAnuncio from '../components/ModeloDeAnuncio';

export default class ListagemDeProdutos extends Component{
    constructor(props) {
        super(props);

        var ds = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2
        });

        this.state = {
            dataSource: ds.cloneWithRows([]),
            produtos: [
                {
                    'nome': 'Moto G 5',
                    'imagem': 'https://megamamute.vteximg.com.br/arquivos/ids/6750174-1000-1000/59651_Original.jpg?v=636282838156200000',
                    'descricao': 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.',
                    'dataDePublicacao': '22/07/2018'
                }, {
                    'nome': 'Moto G 5',
                    'imagem': 'https://megamamute.vteximg.com.br/arquivos/ids/6750174-1000-1000/59651_Original.jpg?v=636282838156200000',
                    'descricao': 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.',
                    'dataDePublicacao': '22/07/2018'
                }
            ]
        }
    }

    componentWillMount() {
        this.criaFonteDeDados(this.state.produtos);
    }

    criaFonteDeDados(produtos) {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(produtos)
        });
    }

    renderRow(produto) {
        return (
            <ModeloDeAnuncio produto={produto} />
        )
    }

    render(){
        return(
            <View style={{flex:1}}>
                <ListView 
                    enableEmptySections
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                />
            </View>
        )
    }
}