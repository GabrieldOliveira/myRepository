import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  activeFilter: {
    color: colors.dark,
    fontSize: 15,
    fontWeight: 'bold',
  },
  buttonContainer: {
    alignItems: 'center',
    flex: 1,
  },
  buttonText: {
    color: colors.regular,
    fontSize: 14,
  },

  tabIssues: {
    backgroundColor: colors.light,
    borderRadius: metrics.baseRadius,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: metrics.basePadding,
    marginTop: metrics.basePadding,
    padding: metrics.baseMargin / 2,
  },
});

export default styles;
