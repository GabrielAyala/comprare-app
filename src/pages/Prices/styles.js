import { StyleSheet } from "react-native";
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20

    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alingItems: 'center'
    },

    headerText: {
        fontSize: 15,
        color: '#737380'
    },

    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#737380'
    },

    price: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
        marginTop: 48
    },

    priceProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold'
    },

    priceValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380'
    },

    listPrices: {
        marginTop: 32,
    },

    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: '#737380',
        fontWeight: 'bold'
    }
});