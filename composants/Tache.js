import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function Tache({ texte, onSupprimer }) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        marginVertical: 5,
        padding: 10,
        borderRadius: 8,
      }}
    >
      <Text style={{ fontSize: 16 }}>{texte}</Text>
      <TouchableOpacity onPress={onSupprimer}>
        <Text style={{ color: 'red', fontWeight: 'bold' }}>Supprimer</Text>
      </TouchableOpacity>
    </View>
  );
}

