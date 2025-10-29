import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import SaisieTache from './SaisieTache';
import ListeTaches from './ListeTaches';

export default function GestionnaireTaches() {
  const [listeTaches, setListeTaches] = useState([]);

  const ajouterTache = (nouvelleTache) => {
    if (nouvelleTache.trim() === '') return;
    setListeTaches([...listeTaches, nouvelleTache]);
  };

  const supprimerTache = (indexTache) => {
    const nouvelleListe = listeTaches.filter((_, i) => i !== indexTache);
    setListeTaches(nouvelleListe);
  };

  return (
    <View style={styles.zone}>
      <SaisieTache onAjouter={ajouterTache} />
      <ListeTaches taches={listeTaches} onSupprimer={supprimerTache} />
    </View>
  );
}

const styles = StyleSheet.create({
  zone: {
    flex: 1,
  },
});


