import { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import StoreItem from '../../components/StoreItem';
// import stores from '../../../assets/data/stores.json';
import '@azure/core-asynciterator-polyfill'


import { DataStore } from 'aws-amplify';
// import { Store } from '../../models';

export default function HomeScreen() {
  const [stores, setStores] = useState([]);

  const fetchStores = async () => {
    try {
      const results = await DataStore.query(Store);
      setStores(results);
    } catch (error) {
      console.error("Error fetching stores:", error);
    }
  };

  useEffect(() => {
    fetchStores();
  }, []);

  return (
    <View style={styles.page}>
      <FlatList
        data={stores}
        renderItem={({ item }) => <StoreItem store={item} />}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}  // Added this for performance and to avoid warnings
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 10,
  }


});
