import { createAppContainer, createStackNavigator } from 'react-navigation';

import Organization from './pages/Organization';
import Issues from './pages/Issues';
import { colors } from './styles';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Organization,
      Issues,
    },
    {
      defaultNavigationOptions: {
        headerTintColor: colors.darker,
        headerBackTitle: null,
      },
    },
  ),
);

export default Routes;
