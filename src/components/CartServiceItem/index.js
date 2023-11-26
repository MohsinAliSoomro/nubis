import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const CartServiceItem = ({ cartService }) => {
    return (
        <View style={styles.row}>
            <View style={styles.quantityContainer}>
                <Text style={styles.quantityText}>1x</Text>
            </View>
            <Text style={styles.serviceName}>{cartService.name}</Text>
            <View style={styles.priceContainer}>
                {/* <MaterialIcons name="attach-money" size={16} color="#4CAF50" /> */}
                <Text style={styles.priceText}>£{cartService.price}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 3,
        padding: 10,
        
        
        
    },
    quantityContainer: {
        backgroundColor: '#EDEDED',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 12,
        marginRight: 15,
    },
    quantityText: {
        fontSize: 15,
        fontWeight: '500',
        color: '#555',
    },
    serviceName: {
        flex: 1,
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    priceText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#4CAF50',
        marginLeft: 3,
    },
});

export default CartServiceItem;
