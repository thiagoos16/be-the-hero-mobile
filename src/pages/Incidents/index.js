import React from 'react';
import { View, Image, Text } from 'react-native';

import logoImg from '../../assets/logo.png'

import styles from './styles';

export default function Incidents() {
  return (
    <View styles={styles.container}> 
        <View styles={styles.header}>
            <Image source={logoImg} />
            <Text style={styles.headerText}> 
                Total de <Text style={styles.headerTextBold}> 30 casos </Text>
            </Text>
        </View>

        <Text style={styles.title}> Welcome </Text>
        <Text style={styles.description}> Escolha um dos casos abaixo e salve o dia!! </Text>
    </View>
  );
}
