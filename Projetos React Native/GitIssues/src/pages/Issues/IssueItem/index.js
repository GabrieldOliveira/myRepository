import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, Image, TouchableOpacity, Linking,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const IssueItem = ({ allIssue }) => (
  <TouchableOpacity style={styles.container} onPress={() => Linking.openURL(allIssue.html_url)}>
    <Image style={styles.avatar} source={{ uri: allIssue.user.avatar_url }} />
    <View style={styles.infoContainer}>
      <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
        {allIssue.title}
      </Text>
      <Text style={styles.description}>{allIssue.user.login}</Text>
    </View>
    <Icon name="chevron-right" size={16} style={styles.icon} />
  </TouchableOpacity>
);
IssueItem.propTypes = {
  allIssue: PropTypes.shape({
    title: PropTypes.string,
    user: PropTypes.shape({
      avatar_url: PropTypes.string,
      login: PropTypes.string,
    }),
    html_url: PropTypes.string,
  }).isRequired,
};

export default IssueItem;
