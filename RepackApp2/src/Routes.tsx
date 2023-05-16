import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListScreen from './List';
import SettingsScreen from "./Settings";
import HomeScreen from "./Home";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="List" component={ListScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}
