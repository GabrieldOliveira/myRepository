import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    flex: 1,
    alignItems: 'stretch',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  form: {
    marginTop: metrics.baseMargin * 2,
  },
  icon: {},
  input: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius * 2,
    height: 35,
    paddingHorizontal: metrics.basePadding,
  },
});

export default styles;
