import React from 'react';
import { View } from 'react-native';
import Tache from './Tache';

export default function ListeTaches({ taches, onSupprimer }) {
  return (
    <View>
      {taches.map((tache) => (
        <Tache
          key={tache.id}
          texte={tache.texte}
          onSupprimer={() => onSupprimer(tache.id)}
        />
      ))}
    </View>
  );
}

