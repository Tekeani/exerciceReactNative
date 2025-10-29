import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SaisieTache from './SaisieTache';
import ListeTaches from './ListeTaches';

export default function GestionnaireTaches() {
  const [taches, setTaches] = useState([]);

  useEffect(() => {
    const chargerTaches = async () => {
      try {
        const tachesSauvegardees = await AsyncStorage.getItem('taches');
        if (tachesSauvegardees !== null) {
          setTaches(JSON.parse(tachesSauvegardees));
        }
      } catch (erreur) {
        console.log('Erreur de chargement :', erreur);
      }
    };
    chargerTaches();
  }, []);

  useEffect(() => {
    const sauvegarderTaches = async () => {
      try {
        await AsyncStorage.setItem('taches', JSON.stringify(taches));
      } catch (erreur) {
        console.log('Erreur de sauvegarde :', erreur);
      }
    };
    sauvegarderTaches();
  }, [taches]);



  const ajouterTache = (nouvelleTache) => {
    if (nouvelleTache.trim() === '') return;

    const nouvelle = {
      id: Date.now().toString(),
      texte: nouvelleTache
    };

    setTaches([...taches, nouvelle]);
  };

  const supprimerTache = (idTache) => {
    setTaches(taches.filter((tache) => tache.id !== idTache));
  };

  return (
    <View style={{ padding: 20 }}>
      <SaisieTache onAjouter={ajouterTache} />
      <ListeTaches taches={taches} onSupprimer={supprimerTache} />
    </View>
  );
}




