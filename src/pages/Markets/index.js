import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import api from '../../services/comprare-api';

function Markets() {

    const [markets, setMarkets] = useState([]);
    const [total, setTotal] = useState(0);

    const navigation = useNavigation();

    function navigateToPrices(id, prices) {
        navigation.navigate('Prices', { id, prices });
    }

    async function loadMarkets() {

        try {
            const response = await api.get("/api/proconInfos");

            setMarkets(response.data);

            let total = (response.data).length;

            setTotal(total);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        loadMarkets();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>
                    Comprare
                </Text>
            </View>
            <Text style={styles.headerText}>
                Total de {total} mercados listados
            </Text>

            <FlatList
                data={markets}
                style={styles.listMarkets}
                keyExtractor={markets => String(markets.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={styles.market}>

                        <Text style={styles.marketProperty}>
                            Estabelecimento:
                        </Text>
                        <Text style={styles.marketValue}>
                            {item.Estabelecimentos}
                        </Text>

                        <Text style={styles.marketProperty}>
                            Arroz 1kg:
                        </Text>
                        <Text style={styles.marketValue}>
                            {item.Arroz1kg}
                        </Text>

                        <Text style={styles.marketProperty}>
                            Açucar Refinado 1kg:
                        </Text>
                        <Text style={styles.marketValue}>
                            {item.AçucarRefinado1kg}
                        </Text>

                        <TouchableOpacity
                            style={styles.detailsButton}
                            onPress={() => navigateToPrices(item.id, markets)}>
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