import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import stores from '../../../assets/data/stores.json';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const service = stores[0].services[0];

const ServiceDetailsScreen = () => {

    const [quantity, setQuantity] = useState(1);
    const navigation = useNavigation();

    const onMinus = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }
    const onPlus = () => {
        setQuantity(quantity + 1)
    }

    const getTotal = () => {
        return (service.price * quantity).toFixed(2);
    }

    return (
        <View style={styles.page}>
            <Text style={styles.name}>{service.name}</Text>
            <Text style={styles.description}>{service.description}</Text>
            <View style={styles.separator}></View>

            <View style={styles.row}>
                <AntDesign name="minuscircleo" size={35} color={"#555"} onPress={onMinus} />
                <Text style={styles.quantity}>{quantity}</Text>
                <AntDesign name="pluscircleo" size={35} color={"#555"} onPress={onPlus} />
            </View>

            <Pressable onPress={() => navigation.navigate("Cart")} style={styles.button}>
                <Text style={styles.buttonText}>
                    Add {quantity}x to order (£{getTotal()})
                </Text>
            </Pressable>
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
        fontSize: 32,
        fontWeight: '700',
        color: '#333',
        marginBottom: 15,
    },
    description: {
        fontSize: 18,
        color: '#555',
        marginBottom: 25,
    },
    separator: {
        height: 1,
        backgroundColor: 'lightgrey',
        marginVertical: 15,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
    },
    quantity: {
        fontSize: 28,
        fontWeight: '500',
        marginHorizontal: 40,
        color: '#444',
    },
    button: {

        backgroundColor: '#333',
        marginTop: '68%',
        padding: 20,
        alignItems: 'center',
        borderRadius: 25,
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

export default ServiceDetailsScreen;
