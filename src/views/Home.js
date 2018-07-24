import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

import ListagemDeProdutos from './ListagemDeProdutos';
import ListagemDeFavoritos from './ListagemDeFavoritos';

export default class Home extends Component {
  state = {
    index: 0,
    routes: [
      { key: '1', title: 'Produtos' },
      { key: '2', title: 'Favoritos' },
    ]
  };

  _onIndexChange = index => this.setState({ index });

  _renderScene = ({ route }) => {
    switch (route.key) {
      case '1':
        return <ListagemDeProdutos />;
      case '2':
        return <ListagemDeFavoritos />;
      default:
        return null;
    }
  }

  render() {
    return (
      <TabView
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        onIndexChange={this._onIndexChange}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});