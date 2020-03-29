import React from 'react';
import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import logoImg from '../../assets/logo.png'
import styles from './styles'

export default function Incidents() {
  const navigation = useNavigation()

  function navigateToDetail() {
    navigation.navigate('Detail')
  }

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText} >
          Total de <Text style={styles.headerTextBold}> 0 casos </Text>.
        </Text>
      </View>

      <View>
        <Text style={styles.title}>Bem-vindo!</Text>
        <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia</Text>
      </View>


      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        style={styles.incidentsList}
        showsVerticalScrollIndicator={false}
        keyExtractor={incident => String(incident)}
        renderItem={() => (
          <View style={styles.incident}>

            <Text style={styles.incidentProperty}>ONG:</Text>
            <Text style={styles.incidentvalue}>APAD</Text>

            <Text style={styles.incidentProperty}>Caso:</Text>
            <Text style={styles.incidentvalue}>Cachorro atropelado</Text>

            <Text style={styles.incidentProperty}>Valor:</Text>
            <Text style={styles.incidentvalue}>R$ 120,00</Text>

            <TouchableOpacity
              style={styles.detailsButton}
              onPress={navigateToDetail}
            >
              <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
              <Feather name="arrow-right" size={20} color='#e02041' />
            </TouchableOpacity>
          </View>
        )}
      />

    </View>
  );
}
