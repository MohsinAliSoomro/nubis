import { View, Text, FlatList } from 'react-native';
import OrderListItem from '../../components/OrderListItem';
import orders from '../../../assets/data/orders.json';

const OrderScreen = () => {
    return (
        <View style={{ flex: 1, width: '100%' }}>
            <FlatList
                data={orders}
                renderItem={({ item }) => <OrderListItem order={item} />}
                keyExtractor={(item) => item.id.toString()}  // assuming each order has a unique 'id'
            />
        </View>
    );
};

export default OrderScreen;
