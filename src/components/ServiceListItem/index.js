import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

const ServiceListItem = ({ service }) => {
    const navigation = useNavigation();

    return (
        <Pressable onPress={() => navigation.navigate('Service', { id: service.id })} style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.name}>{service.name}</Text>
                <Text style={styles.description} numberOfLines={2}>{service.description}</Text>
                <View style={styles.priceContainer}>
                    <Text style={styles.price}>£{service.price}</Text>
                </View>
            </View>
            {service.image && <Image source={{ uri: service.image }} style={styles.image} />}
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 15,
        backgroundColor: '#f5f5f5',
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    textContainer: {
        flex: 3,
    },
    name: {
        fontWeight: '600',
        fontSize: 17,
        color: '#333',
        marginBottom: 5,
    },
    description: {
        fontSize: 15,
        color: '#7D7D7D',
        marginBottom: 10,
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    price: {
        fontSize: 17,
        fontWeight: '600',
        color: '#4CAF50',
        marginLeft: 5,
    },
    image: {
        height: 90,
        width: 90,
        borderRadius: 15, 
    }
});

export default ServiceListItem;
