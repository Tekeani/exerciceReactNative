import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function SaisieTache({ onAjouter }) {
  const [texteSaisi, setTexteSaisi] = useState('');

  const ajouter = () => {
    onAjouter(texteSaisi);
    setTexteSaisi('');
  };

  return (
    <View style={styles.zoneSaisie}>
      <TextInput
        placeholder="Entrez une tâche..."
        value={texteSaisi}
        onChangeText={setTexteSaisi}
        style={styles.champTexte}
      />
      <Button title="Ajouter" onPress={ajouter} />
    </View>
  );
}

const styles = StyleSheet.create({
  zoneSaisie: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  champTexte: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
    marginRight: 10,
  },
});

