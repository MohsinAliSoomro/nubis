import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Pressable, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

const categories = ["Cleaners", "Barbers", "NailTech", "LashTech", "Locksmiths", "Handyman", "Personal Trainer", "Plumber", "Electrician"];
const subcategories = {
    Cleaners: [
        "Window Cleaners",
        "House Cleaner",
        "Carpet Cleaner",
        "Commercial Cleaners",
        "End of Lease Cleaners",
        "Pool Cleaners",
        "Upholstery Cleaners",
        "Pressure Cleaners",
        "Gutter Cleaners"],
    Barbers: [
        "Men's Haircut",
        "Women's Haircut",
        "Kids Haircut",
        "Beard Trim",
        "Shave",
        "Hair Styling",
        "Hair Coloring",
        "Barber Facial",
        "Line-up"],
    NailTech: [
        "Manicure",
        "Pedicure",
        "Acrylic Nails",
        "Gel Nails",
        "Nail Art",
        "Nail Repair",
        "Nail Fill",
        "Nail Polish Change",
        "Paraffin Wax Treatment"
    ],

    LashTech: [
        "Classic Lash Extensions",
        "Hybrid Lash Extensions",
        "Volume Lash Extensions",
        "Lash Lift",
        "Lash Tinting",
        "Lash Removal",
        "Eyebrow Shaping",
        "Eyebrow Tinting"
    ],
    Locksmiths: [
        "Residential Lockout",
        "Commercial Lockout",
        "Car Lockout",
        "Lock Installation",
        "Lock Repair",
        "Key Duplication",
        "Electronic Lock Systems",
        "Safe Installation"
    ],
    Handyman: [
        "Home Repairs",
        "Furniture Assembly",
        "TV Mounting",
        "Painting",
        "Gardening",
        "Carpentry",
        "Tiling",
        "Fencing"
    ],
    PersonalTrainer: [
        "Strength Training",
        "Weight Loss Coaching",
        "Nutrition Consulting",
        "Pilates",
        "Yoga",
        "HIIT",
        "Aerobics",
        "Sports Conditioning"
    ],
    Plumber: [
        "Toilet Repair",
        "Leak Detection",
        "Drain Cleaning",
        "Faucet Repair",
        "Water Heater Installation",
        "Pipe Repair",
        "Septic Services",
        "Gas Fitting"
    ],
    Electrician: [
        "Home Wiring",
        "Light Installation",
        "Outlet Installation",
        "Circuit Breaker Repair",
        "Generator Installation",
        "Electrical Inspection",
        "Home Automation",
        "EV Charger Installation"
    ]
    // ... Add more subcategories as needed
};

const BrowserPage = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const navigation = useNavigation();

    const fadeAnim = useRef(new Animated.Value(1)).current;  // Initial value for main categories: 1
    const subFadeAnim = useRef(new Animated.Value(0)).current;  // Initial value for subcategories: 0
    const wiggleAnims = useRef(
        Object.fromEntries(categories.map(category => [category, new Animated.Value(0)]))
    ).current;

    const fadeIn = (animationValue) => {
        Animated.timing(animationValue, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true
        }).start();
    };

    const fadeOut = (animationValue) => {
        Animated.timing(animationValue, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true
        }).start();
    };

    const wiggle = (animationValue) => {
        Animated.sequence([
            Animated.timing(animationValue, {
                toValue: 1,
                duration: 50,
                useNativeDriver: true
            }),
            Animated.timing(animationValue, {
                toValue: -1,
                duration: 100,
                useNativeDriver: true
            }),
            Animated.timing(animationValue, {
                toValue: 1,
                duration: 100,
                useNativeDriver: true
            }),
            Animated.timing(animationValue, {
                toValue: 0,
                duration: 50,
                useNativeDriver: true
            }),
        ]).start();
    };

    const handleCategoryPress = category => {
        if (selectedCategory === category) {
            Object.values(wiggleAnims).forEach(anim => wiggle(anim));  // Wiggle all
            fadeIn(fadeAnim);  // Fade in main categories
            fadeOut(subFadeAnim);  // Fade out sub categories
            setSelectedCategory(null);  // Deselect the category
        } else {
            fadeOut(fadeAnim);  // Fade out main categories
            fadeIn(subFadeAnim);  // Fade in sub categories
            wiggle(wiggleAnims[category]);  // Wiggle only the selected one
            setSelectedCategory(category);
        }
    };

    return (
        <ScrollView style={styles.page}>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search via address"
                />
            </View>

            <Text style={styles.sectionTitle}>Top Categories</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.horizontalScroll}
            >
                {categories.slice(0, 5).map((category, index) => (
                    <Animated.View
                        key={index}
                        style={[
                            styles.categoryButton,
                            selectedCategory === category && styles.selectedCategory,
                            {
                                transform: [{ rotate: wiggleAnims[category].interpolate({ inputRange: [-1, 1], outputRange: ['-5deg', '5deg'] }) }]
                            }
                        ]}
                    >
                        <Pressable onPress={() => handleCategoryPress(category)} style={{ flexDirection: 'row', alignItems: 'center' }}>
                            {selectedCategory === category &&
                                <AntDesign name="closecircle" size={20} color="white" style={styles.closeIcon} />
                            }
                            <Text style={[
                                styles.categoryText,
                                selectedCategory === category && styles.selectedCategoryText
                            ]}>
                                {category}
                            </Text>
                        </Pressable>
                    </Animated.View>
                ))}
            </ScrollView>

            <Text style={styles.sectionTitle}>{selectedCategory ? 'Sub Categories' : 'All Categories'}</Text>

            {selectedCategory === null ? (
                <View style={styles.allCategoriesContainer}>
                    {categories.map((category, index) => (
                        <Pressable
                            key={index}
                            style={styles.categoryButton}
                            onPress={() => navigation.navigate(category)}
                        >
                            <Text style={styles.categoryText}>{category}</Text>
                        </Pressable>
                    ))}
                </View>
            ) : (
                <View style={styles.allCategoriesContainer}>
                    {subcategories[selectedCategory].map((subCategory, index) => (
                        <Pressable
                            key={index}
                            style={styles.categoryButton}
                            onPress={() => navigation.navigate(subCategory)}
                        >
                            <Text style={styles.categoryText}>{subCategory}</Text>
                        </Pressable>
                    ))}
                </View>
            )}
        </ScrollView>
    );
};

// The rest of your styles remain unchanged


const styles = StyleSheet.create({
    page: {
        flex: 1,
        padding: 15,
        backgroundColor: 'white',
    },
    searchContainer: {
        marginVertical: 50,
        marginBottom: 20,
        borderRadius: 25,
        backgroundColor: '#F2F2F2',
        paddingHorizontal: 15,
    },
    searchInput: {
        padding: 15,
        fontSize: 16,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 15,
    },
    horizontalScroll: {
        flexDirection: 'row',
    },
    categoryButton: {
        margin: 5,
        padding: 10,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#E2E2E2',
        backgroundColor: 'white',
    },
    categoryText: {
        fontSize: 16,
    },
    allCategoriesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    selectedCategory: {
        backgroundColor: '#e3215e',
        borderBlockColor: 'white',
        borderWidth: 1,
    },
    selectedCategoryText: {
        color: 'white',
        fontWeight: 'bold',
    },
    closeIcon: {
        marginRight: 10,
    },
});

export default BrowserPage;
