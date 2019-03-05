import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    flex: 1,
  },
  empty: {
    color: colors.dark,
    marginTop: metrics.baseMargin * 2,
    textAlign: 'center',
  },
  error: {
    color: colors.danger,
    marginTop: metrics.baseMargin,
    textAlign: 'center',
  },
  form: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: metrics.baseMargin,
  },
  icon: { marginLeft: 10 },
  input: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    flex: 0.8,
    height: 35,
    paddingHorizontal: metrics.basePadding,
  },
  line: {
    borderBottomColor: colors.darker,
    borderBottomWidth: 0.5,
    marginTop: metrics.baseMargin,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginHorizontal: metrics.baseMargin * 2,
  },
});

export default styles;
