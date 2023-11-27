import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import HomeScreen from '../screens/HomeScreen';
import BrowserPage from '../screens/Browse'
import ServiceDetailsScreen from '../screens/ServiceDetailsScreen';
import StoreDetailsScreen from '../screens/StoreDetailsScreen';
import Cart from '../screens/Cart';
import OrdersScreen from '../screens/OrdersScreen';
import OrderDetailScreen from '../screens/OrderDetailsScreen';
import ProfileScreen from '../screens/ProfileScreen'
import { Foundation, FontAwesome5, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

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

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}
            barStyle={{ backgroundColor: "white", paddingTop: 10,}}>
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
                        <MaterialIcons name="search" size={24} color={color} />
                    ),
                }}
            />
            <Tab.Screen name="Orders"
                component={OrdersStackNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="calendar-today" size={22} color={color} />
                    ),
                }}
            />
            <Tab.Screen name="Profile" 
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name="user-alt" size={22} color={color} />
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
            <HomeStack.Screen name="StoreDetails" component={StoreDetailsScreen} options={{ headerShown: false }}/>
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
