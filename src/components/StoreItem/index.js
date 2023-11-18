import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

const StoreItem = ({ store }) => {
    const navigation = useNavigation();  

    const onPress = ()=>{
        navigation.navigate("StoreDetails", { id: store.id });
    };

    return (
        <Pressable onPress={onPress} style={styles.storeContainer}>
            <Image
                source={{ uri: store.image }}
                style={styles.image}
            />
            <View style={styles.categoryContainer}>
                <MaterialIcons name="category" size={15} color="#fff" style={styles.iconRight} />
                <Text style={styles.category}> {store.category}</Text>
                
            </View>
            <View style={styles.infoContainer}>
                <Image
                    source={{ uri: store.logo }}
                    style={styles.logo}
                />
                <View>
                    <Text style={styles.title}>{store.name}</Text>
                    <View style={styles.subtitleContainer}>
                        <Text style={styles.subtitle}>£{store.deliveryFee} • </Text>
                        <Text style={styles.subtitle}>{store.minDeliveryTime}-{store.maxDeliveryTime} minutes</Text>
                    </View>
                </View>
                <View style={styles.rating}>
                    <Text style={styles.ratingText}>{store.rating}</Text> 
                </View>
            </View>
        </Pressable>
    );
}

export default StoreItem;

const styles = StyleSheet.create({
    storeContainer: {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 35,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
        marginBottom: 15,
    },
    image: {
        width: '100%',
        aspectRatio: 5 / 3,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        position: 'relative',
    },
    categoryContainer: {
        position: 'absolute',
        top: 15,
        left: 15,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
        padding: 5,
        borderRadius: 10,
    },
    category: {
        color: '#fff',
        fontSize: 12,
        marginRight: 5, // Spacing between text and icon
    },
    iconRight: {
        alignSelf: 'center',
    },
    infoContainer: {
        flexDirection: 'row',
        padding: 12,
        alignItems: 'center',
    },
    logo: {
        width: 40,
        height: 40,
        borderRadius: 25,
        marginRight: 10,
    },
    title: {
        
        flexShrink: 1,
        fontSize: 15,
        fontWeight: '700',
        marginBottom: 5,
        marginRight: 40, // to ensure it doesn't touch the rating
    },
    subtitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    subtitle: {
        color: '#7D7D7D',
        fontSize: 14,
        fontWeight: '600',
    },
    rating: {
        position: 'absolute',
        bottom: "50%",
        right: 10,
        backgroundColor: 'black',
        width: 25, 
        height: 25, 
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,

        
    },
    ratingText: {
        fontSize: 10, 
        fontWeight: '800',
        color: '#fff',
    }
});
