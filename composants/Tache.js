import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Tache({ texte, index, onSupprimer }) {
  return (
    <View style={styles.tache}>
      <Text style={styles.texte}>{texte}</Text>
      <Button title="Supprimer" color="red" onPress={() => onSupprimer(index)} />
    </View>
  );
}

const styles = StyleSheet.create({
  tache: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginBottom: 8,
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
  },
  texte: {
    fontSize: 16,
  },
});
