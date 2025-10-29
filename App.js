import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import GestionnaireTaches from './composants/GestionnaireTaches';

export default function App() {
  return (
    <View style={styles.conteneur}>
      <Text style={styles.titre}>Ma To-Do List</Text>
      <GestionnaireTaches />
    </View>
  );
}

const styles = StyleSheet.create({
  conteneur: {
    flex: 1,
    padding: 30,
    backgroundColor: '#fff',
  },
  titre: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});




