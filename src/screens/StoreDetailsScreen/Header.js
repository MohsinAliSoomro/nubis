import { View, Text, FlatList, Image, StyleSheet, } from 'react-native';
import stores from '../../../assets/data/stores.json';
import styles from './styles'; 
const store = stores[0];

const StoreDetailsHeader  = () => {
    return (
        <View style={styles.page}>
            <Image source={{ uri: store.image }}
                style={styles.image}
                resizeMode='cover'
            />              
            <View style={styles.container}>
                <Text style={styles.title}>{store.name}Details</Text>
                <Text style={styles.subtitle}>
                    £{store.deliveryFee} &#8226; {store.minDeliveryTime}-
                    {store.minDeliveryTime} minutes
                </Text>
                <Text style={styles.menuTitle}> what we offer: </Text>
            </View>
        </View>
    )
}

export default StoreDetailsHeader;