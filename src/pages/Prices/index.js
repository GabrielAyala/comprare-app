import * as React from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

function Prices() {

    const navigation = useNavigation();

    function navigateToMarkets() {
        navigation.goBack('Markets');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <Text style={styles.headerText}>
                    Preço da Cesta Básica
                </Text>
                <TouchableOpacity
                    onPress={navigateToMarkets}>
                    <Feather name='arrow-left' size={28} color='#E02041' />
                </TouchableOpacity>
            </View>

            <View style={styles.price}>
                <Text style={styles.priceProperty}>
                    Estabelecimento:
                </Text>
                <Text style={styles.priceValue}>
                    Angeloni
                </Text>

                <Text style={styles.priceProperty}>
                    Açucar Refinado1kg:
                </Text>
                <Text style={styles.priceValue}>
                    3,99
                </Text>

                <Text style={styles.priceProperty}>
                    Banana Branca1kg:
                </Text>
                <Text style={styles.priceValue}>
                    5,95
                </Text>
            </View>

        </View>
    );
}

export default Prices;