import { StyleSheet } from "react-native";

export default StyleSheet.create({
    
    page: {
        flex: 1,
        backgroundColor: '#eef2f7',  // Soft blue background
    },

    image: {
        width: "100%",
        aspectRatio: 5 / 3,
    },

    title: {
        fontSize: 20,
        fontWeight: "700",
        color: '#333',
        marginBottom: 10,
    },

    menuTitle: {
        marginTop: 20,
        marginLeft: 20, 
        fontSize: 20,
        fontWeight: '600',
        color: '#444',
    },

    subtitle: {
        color: '#777',
        fontSize: 12,
        marginLeft: 10,
    },

    container: {
        backgroundColor: 'white', 
        padding: 20,
        borderRadius: 10,
        shadowColor: '#d1dbe8',
        shadowOffset: { width: -10, height: -10 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
    },
    
    categoryContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,   
    },
    category: {
        color: '#555',
        fontSize: 12,
        marginRight: 5, // Spacing between text and icon
    },

    statusContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    iconLeft:{
            alignSelf: 'center',
            marginRight: 10, 

    }

    
});
