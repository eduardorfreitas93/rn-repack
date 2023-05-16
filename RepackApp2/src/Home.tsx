import * as React from 'react';
import { Button, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation()

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>home App 2 jjjjjj</Text>
      <Button title="Vai list" onPress={() => navigation.navigate('App1S', { screen: 'List' })} />
      <Button title="Home Host" onPress={() => navigation.navigate("Host")} />
      <Button title="SettingsSettings" onPress={() => navigation.navigate('App1S', { screen: 'Settings' })} />
    </View>
  );
}
