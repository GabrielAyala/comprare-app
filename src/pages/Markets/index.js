import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import api from '../../services/comprare-api';

function Markets() {

    const [markets, setMarkets] = useState([]);
    const navigation = useNavigation();

    function navigateToPrices() {
        navigation.navigate('Prices');
    }

    async function loadMarkets() {
        const response = await api.get('api/proconInfos');

        setMarkets(response.data);
    }

    useEffect(() => {
        loadMarkets();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    Lista de mercados que constam no Procon
                </Text>
            </View>
            <Text style={styles.title}>
                Comprare
            </Text>
            <Text style={styles.description}>
                Escolha um dos mercados listados
            </Text>

            <FlatList
                data={markets}
                style={styles.listMarkets}
                keyExtractor={incident => String(incident.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item: incident }) => (
                    <View style={styles.market}>

                        <Text style={styles.marketProperty}>
                            Estabelecimento:
                        </Text>
                        <Text style={styles.marketValue}>
                            {incident.Estabelecimentos}
                        </Text>

                        <Text style={styles.marketProperty}>
                            Arroz 1kg:
                        </Text>
                        <Text style={styles.marketValue}>
                            R$ 3,49
                        </Text>

                        <Text style={styles.marketProperty}>
                            Banana Branca1kg:
                        </Text>
                        <Text style={styles.marketValue}>
                            5,95
                        </Text>

                        <TouchableOpacity
                            style={styles.detailsButton}
                            onPress={navigateToPrices}>
                            <Text style={styles.detailsButtonText}>
                                Ver Preços em detalhe
                            </Text>
                            <Feather name='arrow-right' size={16} color='#E02041' />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}

export default Markets;