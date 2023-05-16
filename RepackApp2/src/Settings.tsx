import * as React from 'react';
import { Button, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Settings() {
  const navigation = useNavigation()

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>SettingsSettingsSettings</Text>
      <Button title="Voltar Home App2" onPress={() => navigation.navigate("Home")}/>
      <Button title="Home Host" onPress={() => navigation.navigate("Host")}/>
      <Button title="back" onPress={() => navigation.goBack()}/>
    </View>
  );
}
