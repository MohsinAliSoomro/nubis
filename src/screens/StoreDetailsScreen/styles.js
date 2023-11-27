import { StyleSheet } from "react-native";

export default StyleSheet.create({
    
    page: {
        flex: 1,
        alignContent: "center", 
    }, 

    iconContainer: {
        position: 'absolute',
        top: 45,
        left: 10,
        elevation: 20,
        shadowColor: '#171717',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.4,
        shadowRadius: 2,
        backgroundColor: 'transparent',  // Add this line
    },

    image: {
        width: "100%",  // Corrected this line
        aspectRatio: 5 / 3,
       
        
    },

    title: {
        fontSize: 25,
        fontWeight: "600",
        marginVertical: 10,
    },

    menuTitle:{
        marginTop:20,
        fontSize:18,
        letterSpacing: 0.7,
    }, 
    subtitle: {
        color: '#525252',
        fontsize: 15,
    },

    container: {
        margin: 10,
    },


});