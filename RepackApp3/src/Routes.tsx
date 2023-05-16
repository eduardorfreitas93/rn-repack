import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AppScreen from './App';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={AppScreen} />
    </Stack.Navigator>
  );
}
