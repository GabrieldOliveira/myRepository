import React, { Component } from 'react';

import PropTypes from 'prop-types';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  FlatList,
  AsyncStorage,
  ActivityIndicator,
  StatusBar,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

import api from '~/services/api';
import Repositorie from './Repositorie';

export default class Organization extends Component {
  static navigationOptions = {
    title: 'GitIssues',
  };

  state = {
    text: '',
    error: '',
    refreshing: false,
    repositories: [],
    loading: true,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  componentDidMount() {
    this.loadRepositories();
  }

  loadRepositories = async () => {
    this.setState({ refreshing: true });
    const repositories = JSON.parse(await AsyncStorage.getItem('@GitIssues:repositories'));

    this.setState({ repositories: repositories || [], refreshing: false, loading: false });
  };

  renderListItem = ({ item }) => <Repositorie organization={item} />;

  renderList = () => {
    const { repositories, refreshing } = this.state;
    return !repositories.length ? (
      <Text style={styles.empty}>Nenhum repositório adicionado</Text>
    ) : (
      <FlatList
        data={repositories}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        onRefresh={this.loadRepositories}
        refreshing={refreshing}
      />
    );
  };

  addRepositorie = async () => {
    const { text, repositories } = this.state;

    if (!text) {
      this.setState({ error: 'Preencha com um repositório válido' });
      return;
    }
    if (repositories.find(repository => repository.full_name === text)) {
      this.setState({ error: 'Repositório duplicado' });
      return;
    }

    try {
      const { data } = await api.get(`/repos/${text}`);
      this.setState({ text: '', repositories: [...repositories, data], error: '' });
      await AsyncStorage.setItem(
        '@GitIssues:repositories',
        JSON.stringify([...repositories, data]),
      );
    } catch (err) {
      this.setState({ text: '', error: 'Repositorio não existente' });
    }
  };

  render() {
    const { text, loading, error } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.form}>
          <View style={styles.left} />
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            value={text}
            onChangeText={texto => this.setState({ text: texto })}
            placeholder="Adicionar novo repositório"
            underlineColorAndroid="transparent"
          />
          <TouchableOpacity style={styles.icon} onPress={this.addRepositorie}>
            <Icon name="plus" size={16} />
          </TouchableOpacity>
          <View style={styles.right} />
        </View>
        {!!error && <Text style={styles.error}>{error}</Text>}
        <View style={styles.line} />
        {loading ? <ActivityIndicator size="large" style={styles.loading} /> : this.renderList()}
      </View>
    );
  }
}
