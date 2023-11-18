import { StyleSheet, View, FlatList } from 'react-native';
import StoreItem from '../../components/StoreItem';
import stores from '../../../assets/data/stores.json';

export default function HomeScreen() {
  return (
    <View style = {styles.page}>
        <FlatList 
            data={stores} 
            renderItem={({item}) => <StoreItem store={item} />}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id}  // Added this for performance and to avoid warnings
        />
      </View>
  );
}

const styles = StyleSheet.create({
    page:{
        padding: 10, 
    }
    

});
