import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  avatar: {
    height: 45,
    width: 45,
  },
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius * 2,
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: metrics.baseMargin * 2,
    marginTop: metrics.baseMargin,
    padding: metrics.baseMargin * 2,
  },
  icon: {
    color: colors.light,
    marginLeft: metrics.baseMargin * 2,
  },
  infoContainer: {
    flex: 1,
    marginLeft: metrics.baseMargin,
  },
  repositorie: {
    color: colors.darker,
    marginTop: metrics.baseMargin / 2,
  },
  title: {
    color: colors.black,
    fontSize: 17,
    fontWeight: 'bold',
  },
});

export default styles;
