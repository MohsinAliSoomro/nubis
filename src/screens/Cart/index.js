import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import CartServiceItem from '../../components/CartServiceItem';
import stores from '../../../assets/data/stores.json';

const store = stores[0];

const Cart = () => {
    return (
        <View style={styles.page}>
            <Text style={styles.name}>{store.name}</Text>
            <Text style={styles.itemLabel}>Your Items:</Text>

            <FlatList
                data={store.services}
                renderItem={({ item }) => <CartServiceItem cartService={item} />}
                keyExtractor={item => item.name}
            />

            <View style={styles.separator}></View>
            <View style={styles.button}>
                <Text style={styles.buttonText}>Order Now</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    page: {
        flex: 1,
        width: '100%',
        paddingVertical: 40,
        paddingHorizontal: 20,
        backgroundColor: '#F7F7F7',
    },
    name: {
        fontSize: 26,
        fontWeight: '700',
        color: '#333',
        marginBottom: 10,
    },
    itemLabel: {
        fontWeight: '600',
        marginTop: 20,
        fontSize: 20,
        color: '#555',
    },
    separator: {
        height: 1,
        backgroundColor: 'lightgrey',
        marginVertical: 10,
    },
    button: {
        backgroundColor: '#333',
        marginTop: 'auto',
        padding: 20,
        alignItems: 'center',
        borderRadius: 25,
        marginVertical: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 20,
    },
});

export default Cart;
