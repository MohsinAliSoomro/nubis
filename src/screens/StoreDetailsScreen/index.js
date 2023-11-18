
import { View, Text, FlatList, Image, StyleSheet, } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import ServiceListItem from '../../components/ServiceListItem';
import stores from '../../../assets/data/stores.json';
import Header from './Header';
import styles from './styles';
import { useRoute, useNavigation  } from '@react-navigation/native';
const store = stores[0];



const StoreDetailsPage = () => {
    const route = useRoute(); 
    const navigation = useNavigation();  

    const id = route.params?.id; 
    console.warn(id);  


    return (
        <View style={styles.page}>
            <FlatList 
                ListHeaderComponent={()=> <Header store = {store}/>}
                data={store.services} 
                renderItem={({item})=><ServiceListItem service={item}/>}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.name}
                />
                
                <Ionicons
                onPress={() =>navigation.goBack()}
                name="arrow-back-circle"
                size={60} color="white"
                style={styles.iconContainer} />
                
        </View>
    )
}


export default StoreDetailsPage;