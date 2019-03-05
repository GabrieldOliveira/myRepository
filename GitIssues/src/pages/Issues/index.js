import React, { Component } from 'react';

import {
  View, Text, FlatList, StatusBar, ActivityIndicator,
} from 'react-native';
import Proptypes from 'prop-types';
import styles from './styles';

import IssueItem from './IssueItem';
import Filter from './Filter';
import api from '~/services/api';

export default class Issues extends Component {
  static propTypes = {
    navigation: Proptypes.shape({ getParam: Proptypes.func }).isRequired,
  };

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title'),
  });

  state = {
    error: '',
    issue: [],
    loading: true,
    refreshing: false,
    activeFilter: 'all',
  };

  componentDidMount() {
    this.loadIssues();
  }

  loadIssues = async () => {
    this.setState({ refreshing: true });

    const { navigation } = this.props;
    const { activeFilter } = this.state;
    try {
      const { data } = await api.get(
        `/repos/${navigation.getParam('full_name')}/issues?state=${activeFilter}`,
      );
      this.setState({ issue: data });
    } catch (err) {
      this.setState({ error: 'Erro ao recuperar as Issues' });
    } finally {
      this.setState({ loading: false, refreshing: false });
    }
  };

  renderListItem = ({ item }) => <IssueItem allIssue={item} />;

  renderList = () => {
    const { issue, refreshing } = this.state;
    return !issue.length ? (
      <Text style={styles.empty}>Nenhuma issue encontrada</Text>
    ) : (
      <FlatList
        data={issue}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        onRefresh={this.loadIssue}
        style={styles.listContainer}
        refreshing={refreshing}
      />
    );
  };

  changeFilter = async (value) => {
    this.setState({ activeFilter: value });

    const { navigation } = this.props;

    try {
      const { data } = await api.get(
        `/repos/${navigation.getParam('full_name')}/issues?state=${value}`,
      );

      this.setState({ issue: data });
    } catch (err) {
      this.setState({ error: 'Erro ao recuperar as Issues' });
    }
  };

  render() {
    const { loading, activeFilter, error } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        {!!error && <Text style={styles.error}>{error}</Text>}
        <Filter activeFilter={activeFilter} changeFilter={this.changeFilter} />
        {loading ? <ActivityIndicator size="large" style={styles.loading} /> : this.renderList()}
      </View>
    );
  }
}
