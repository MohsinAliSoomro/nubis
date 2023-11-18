import { View, Text, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OrderListItem = ({ order }) => {

    const navigation = useNavigation();

    return (
        <Pressable
            onPress={() => navigation.navigate('OrderDetails', { id: order.id })}
            style={styles.itemContainer}
        >
            <Image
                source={{ uri: order.Store.image }}
                style={styles.image}
            />
            <View style={styles.textContainer}>
                <Text style={styles.storeName}>
                    {order.Store.name}
                </Text>
                <Text style={styles.itemDetails}>
                    3 items • $38.45
                </Text>
                <Text style={styles.orderDetails}>
                    2 days ago • {order.status}
                </Text>
            </View>
        </Pressable>
    );
};

export default OrderListItem;

const styles = {
    itemContainer: {
        flexDirection: 'row',
        margin: 15,
        padding: 15,
        backgroundColor: 'white',
        borderRadius: 20,
        shadowColor: '#e1e4e8',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 5,
        alignItems: 'center',
    },
    image: {
        width: 90,
        height: 90,
        marginRight: 20,
        borderRadius: 20,
    },
    textContainer: {
        flex: 1,
    },
    storeName: {
        fontWeight: '700',
        fontSize: 18,
    },
    itemDetails: {
        marginVertical: 5,
        fontSize: 15,
        color: '#7a7a7a',
    },
    orderDetails: {
        fontSize: 14,
        color: '#9b9b9b',
    },
};
