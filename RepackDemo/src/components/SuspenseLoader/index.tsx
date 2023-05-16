import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

export default function SuspenseLoader() {
  return (
    <View style={styles.conteiner}>
        <ActivityIndicator />
    </View>
  );
};

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
