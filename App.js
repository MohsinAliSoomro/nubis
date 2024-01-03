import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import RootNavigator from "./src/navigation";
import { NavigationContainer } from "@react-navigation/native";
import { Amplify } from "aws-amplify";
import config from "./src/aws-exports";
import { withAuthenticator } from "aws-amplify-react-native";

Amplify.configure({ ...config, Analytics: { disabled: true } });

function App() {
    return (
        <NavigationContainer>
            <RootNavigator />
            <StatusBar style="dark" />
        </NavigationContainer>
    );
}
export default withAuthenticator(App);

// type Store @model @auth(rules: [{allow: public}]) {
//   id: ID!
//   name: String!
//   category: String!
//   deliveryFee: Float
//   minDeliveryTime: Int!
//   maxDeliveryTime: Int!
//   rating: Float!
//   logo: String
//   image: String!
//   address: String!
//   postcode: String!
//   lat: Float
//   lng: Float
//   Services: [Service] @hasMany(indexName: "byStore", fields: ["id"])
// }

// type Service @model @auth(rules: [{allow: public}]) {
//   id: ID!
//   image: String
//   name: String!
//   description: String
//   price: Float!
//   storeID: ID! @index(name: "byStore")
// }
