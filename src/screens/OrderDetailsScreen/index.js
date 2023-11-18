import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import orders from '../../../assets/data/orders.json';
import stores from '../../../assets/data/stores.json';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles';
import CartServiceItem from '../../components/CartServiceItem';


const order = orders[0];

const OrderDetailsHeader = () => {
    return (
        <View style={styles.page}>
            <Image
                source={{ uri: order.Store.image }}
                style={styles.image}
                resizeMode='cover'
            />
            <View style={styles.container}>
                <Text style={styles.title}>{order.Store.name}</Text>
                <View style={styles.categoryContainer}>
                <MaterialIcons name="category" size={17} color="#555" style={styles.iconLeft} />
                    <Text style={styles.category}>{stores[0].category}</Text>
                </View>
                <View style={styles.statusContainer}>
                    <MaterialIcons name="electric-scooter" size={17} color="#555" />
                    <Text style={styles.subtitle}>{order.status} &#8226; 2 days ago</Text>
                </View>
            </View>
            <Text style={styles.menuTitle}>Your orders</Text>
        </View>
    );
};


const OrderDetailScreen = () => {
    return (
        <FlatList
            ListHeaderComponent={OrderDetailsHeader}
            data={stores[0].services}
            renderItem={({ item }) => <CartServiceItem cartService={item} />}
            keyExtractor={item => item.name}
        />
    );
};

export default OrderDetailScreen;
