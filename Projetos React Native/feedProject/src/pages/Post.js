import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontSize:18,
    fontWeight: 'bold',
    color:'#333',
  },

  box:{
    backgroundColor:'#FFF',
    borderWidth: 1,
    borderColor:'#DDD',
    borderRadius: 5,
    padding:20,
    marginBottom:20,

  },

  description:{
    fontSize:16,
    color:'#999',
    marginTop: 5,
    lineHeight: 24,
  },

  autor:{
    color:'#c9c9c9',
    marginBottom:10,
  },
  line:{
    borderBottomColor: '#c9c9c9',
    borderBottomWidth:1,
  },

});

export default class Post extends Component {
  render() {
    return(
      <View style={styles.box}>
        <Text style={styles.title}> { this.props.tit } </Text>
        <Text style={styles.autor}> {this.props.aut} </Text>
        <View style={styles.line} />
        <Text style={styles.description}> {this.props.desc} </Text>
      </View>
    );
  }
};
