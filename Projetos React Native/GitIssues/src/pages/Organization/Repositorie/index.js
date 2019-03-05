import React from 'react';
import PropTypes from 'prop-types';

import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import { withNavigation } from 'react-navigation';
import styles from './styles';

const Repositorie = ({ organization, navigation: { navigate } }) => (
  <TouchableOpacity
    onPress={() => navigate('Issues', { title: organization.name, full_name: organization.full_name })
    }
  >
    <View style={styles.container}>
      <Image style={styles.avatar} source={{ uri: organization.owner.avatar_url }} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{organization.name}</Text>
        <Text style={styles.repositorie}>{organization.owner.login}</Text>
      </View>

      <Icon size={16} style={styles.icon} name="chevron-right" />
    </View>
  </TouchableOpacity>
);

Repositorie.propTypes = {
  organization: PropTypes.shape({
    name: PropTypes.string,
    owner: PropTypes.shape({
      login: PropTypes.string,
      avatar_url: PropTypes.string,
    }),
  }).isRequired,
  navigation: PropTypes.shape({ navigate: PropTypes.func }).isRequired,
};

export default withNavigation(Repositorie);
