import React from 'react';
import { FlatList } from 'react-native';
import Tache from './Tache';

export default function ListeTaches({ taches, onSupprimer }) {
  return (
    <FlatList
      data={taches}
      renderItem={({ item, index }) => (
        <Tache texte={item} index={index} onSupprimer={onSupprimer} />
      )}
      keyExtractor={(_, index) => index.toString()}
    />
  );
}
