import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import BrowserPage from '../screens/Browse'
import ServiceDetailsScreen from '../screens/ServiceDetailsScreen';
import StoreDetailsScreen from '../screens/StoreDetailsScreen';
import Cart from '../screens/Cart';
import OrdersScreen from '../screens/OrdersScreen';
import OrderDetailScreen from '../screens/OrderDetailsScreen';
import ProfileScreen from '../screens/ProfileScreen'
import { Foundation, FontAwesome5, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';


import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeTabs" component={HomeTabs}
            // options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
    return (
        <Tab.Navigator barStyle={{ backgroundColor: "white" }}>
            <Tab.Screen name="Home"
                component={HomeStackNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Foundation name="home" size={24} color={color} />
                    ),
                }}
            />
            <Tab.Screen name="Search"
                component={BrowserPage}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="store-search-outline" size={24} color="black" />
                    ),
                }}
            />
            <Tab.Screen name="Orders"
                component={OrdersStackNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="list-alt" size={24} color={color} />
                    ),
                }}
            />
            <Tab.Screen name="Profile" 
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name="user-alt" size={24} color={color} />
                    ),
                }}
            />

        </Tab.Navigator>
    );
};

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Stores" component={HomeScreen} />
            <HomeStack.Screen name="StoreDetails" component={StoreDetailsScreen} />
            <HomeStack.Screen name="Service" component={ServiceDetailsScreen} />
            <HomeStack.Screen name="Cart" component={Cart} />

        </HomeStack.Navigator>
    );
};

const OrdersStack = createNativeStackNavigator();

const OrdersStackNavigator = () => {
    return (
        <OrdersStack.Navigator>
            <OrdersStack.Screen name="Orders" component={OrdersScreen} />
            <OrdersStack.Screen name="OrderDetails" component={OrderDetailScreen} />
        </OrdersStack.Navigator>
    );
};



export default RootNavigator;
