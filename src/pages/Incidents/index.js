import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import logoImg from '../../assets/logo.jpg'

import styles from './styles';

export default function Incidents() {
    const navigation = useNavigation();

    function navigationToDetail() {
        navigation.navigate('Detail');
    }
    
  return (
    <View style={styles.container}> 
        <View style={styles.header}>
            <Image source={logoImg} />
            <Text style={styles.headerText}> 
                Total de <Text style={styles.headerTextBold}> 10 casos </Text>
            </Text>
        </View>

        <Text style={styles.title}> Welcome </Text>
        <Text style={styles.description}> Escolha um dos casos abaixo e salve o dia!! </Text>

        <FlatList
            data={[1, 2, 3]}
            style={styles.incidentList}
            keyExtractor={incident => String(incident)}
            renderItem={() => (
                <View style={styles.incident}>
                    <Text style={styles.incidentProperty}>ONG:</Text>
                    <Text style={styles.incidentValue}>LAPADA</Text>

                    <Text style={styles.incidentProperty}>CASO:</Text>
                    <Text style={styles.incidentValue}>Complicado de se entender</Text>

                    <Text style={styles.incidentProperty}>VALORs:</Text>
                    <Text style={styles.incidentValue}>R$ 120,00</Text>

                    <TouchableOpacity 
                        style={styles.detailsButton}
                        onPress={navigationToDetail}
                    >
                        <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                        <Feather name="arrow-right" size={16} color="#e02041" />
                    </TouchableOpacity>
                </View>
            )}
        />
    </View>
  );
}
