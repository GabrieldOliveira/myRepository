import React from 'react';

import { View, TextInput, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import Header from '~/components/Header';


const GitIssues = () => (
  <View style={styles.container}>
    <Header title="GitIssues" />

    <View style={styles.form}>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Adicionar novo repositório"
        underlineColorAndroid="transparent"
      />
      <TouchableOpacity onPress={() => {}}>
        <Icon name="plus" size={20} />
      </TouchableOpacity>
    </View>
  </View>
);

export default GitIssues;
