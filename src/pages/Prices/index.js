import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, ScrollView } from "react-native";
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

import styles from './styles';

function Prices() {

    const navigation = useNavigation();
    const route = useRoute();

    let id = route.params.id;
    const prices = route.params.prices;

    let details = prices.find(x => x.id === id);

    const [priceDetails, setPriceDetails] = useState([]);

    function navigateToMarkets() {
        navigation.goBack('Markets');
    }

    async function loadPrices() {

        setPriceDetails(details);

    }

    useEffect(() => {
        loadPrices();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    Preço da Cesta Básica
                </Text>
                <Text style={styles.title}>
                    {details.Estabelecimentos}
                </Text>
                <TouchableOpacity
                    onPress={navigateToMarkets}>
                    <Feather name='arrow-left' size={28} color='#E02041' />
                </TouchableOpacity>
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.price}>

                    <Text style={styles.priceProperty}>
                        Arroz 1kg:
                    </Text>
                    <Text style={styles.priceValue}>
                        {details.Arroz1kg}
                    </Text>

                    <Text style={styles.priceProperty}>
                        Açucar Refinado 1kg:
                    </Text>
                    <Text style={styles.priceValue}>
                        {details.AçucarRefinado1kg}
                    </Text>

                    <Text style={styles.priceProperty}>
                        Banana Branca 1kg:
                    </Text>
                    <Text style={styles.priceValue}>
                        {details.BananaBranca1kg}
                    </Text>

                    <Text style={styles.priceProperty}>
                        Batata Suja 1kg:
                    </Text>
                    <Text style={styles.priceValue}>
                        {details.BatataSuja1kg}
                    </Text>

                    <Text style={styles.priceProperty}>
                        Café 500ml:
                    </Text>
                    <Text style={styles.priceValue}>
                        {details.Café500ml}
                    </Text>

                    <Text style={styles.priceProperty}>
                        Carne (coxãomole) 1kg:
                    </Text>
                    <Text style={styles.priceValue}>
                        {details.Carne}
                    </Text>

                    <Text style={styles.priceProperty}>
                        Farinha de Trigo 1kg:
                    </Text>
                    <Text style={styles.priceValue}>
                        {details.FarinhadeTrigo1kg}
                    </Text>

                    <Text style={styles.priceProperty}>
                        Feijão Preto 1kg:
                    </Text>
                    <Text style={styles.priceValue}>
                        {details.FeijãoPreto1kg}
                    </Text>

                    <Text style={styles.priceProperty}>
                        Leite Tipo C 1lt:
                    </Text>
                    <Text style={styles.priceValue}>
                        {details.LeiteTipoC1lt}
                    </Text>

                    <Text style={styles.priceProperty}>
                        Manteiga 200gr:
                    </Text>
                    <Text style={styles.priceValue}>
                        {details.Manteiga200gr}
                    </Text>

                    <Text style={styles.priceProperty}>
                        Pão Francês 1kg:
                    </Text>
                    <Text style={styles.priceValue}>
                        {details.PãoFrancês1kg}
                    </Text>

                    <Text style={styles.priceProperty}>
                        Tomate 1kg:
                    </Text>
                    <Text style={styles.priceValue}>
                        {details.Tomate1kg}
                    </Text>

                    <Text style={styles.priceProperty}>
                        Óleo de Soja 900ml:
                    </Text>
                    <Text style={styles.priceValue}>
                        {details.ÓleodeSoja900ml}
                    </Text>

                </View>
            </ScrollView>
        </View>
    );
}

export default Prices;