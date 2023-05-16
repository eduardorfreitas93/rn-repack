import * as React from 'react';
import { Button, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import useStore from "./stores/useStore";

export default function List() {
  const name = useStore(state => state.nome);
  const setNumberApp1 = useStore(state => state.setName);
  const navigation = useNavigation()

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>List</Text>
      <Text>{name}</Text>
      <Button title="Add number" onPress={() => setNumberApp1("dudu")} />
      <Button title="Voltar Home App2" onPress={() => navigation.navigate("Home")}/>
      <Button title="Home Host" onPress={() => navigation.navigate("Host")}/>
      <Button title="SettingsScreen app1" onPress={() => navigation.navigate("Settings")}/>
      <Button title="Open App3" onPress={() => navigation.navigate('App2S', { screen: 'Home' })}/>
    </View>
  );
}
