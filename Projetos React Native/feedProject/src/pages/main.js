import '~/config/ReactotronConfig';
import '~/config/DevToolsConfig';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text, View,
  ScrollView,
} from 'react-native';

import '~/config/StatusBarConfig';

import Post from './Post';

const bgColor = '#f24b4b';

const styles = StyleSheet.create({
  container: {
    backgroundColor: bgColor,
    flex: 1,
  },
  list: {
    padding: 20,
  },
});

export default class App extends Component {
  static navigationOptions = {
    title: 'GoNative App',
  };

  state ={
    mystate: [
      {
        id: 1,
        titulo: 'Aprendendo React Native',
        autor: 'Gabriel de Oliveira Gonçalves',
        descricao: 'dsngjangangngnçdskgndsklagndsangsdnglhanhnrtnbrhrgakaopd,bopa,o,pog,ao,g',
      },

      {
        id: 2,
        titulo: 'Aprendendo React Native',
        autor: 'Gabriel de Oliveira Gonçalves',
        descricao: 'dsngjangangngnçdskgndsklagndsangsdnglhreahaerhrerh',
      },

      {
        id: 3,
        titulo: 'Aprendendo React Native',
        autor: 'Gabriel de Oliveira Gonçalves',
        descricao: 'dsngjangangngnçdskgndsklagndsangsdnglgaergreherahaerharehre',
      },

      {
        id: 4,
        titulo: 'Aprendendo React Native',
        autor: 'Gabriel de Oliveira Gonçalves',
        descricao: 'dsngjangangngnçdskgndsklagndsangsdnglahadhafdhdahabregag',
      },
    ],
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.list}>
          {this.state.mystate.map(data => <Post key={data.id} tit={data.titulo} aut={data.autor} desc={data.descricao} />)}

        </ScrollView>
      </View>
    );
  }
}
