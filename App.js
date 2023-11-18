import React, { useState, useEffect } from 'react';
import { StatusBar, ImageBackground, StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  const [isGifShown, setIsGifShown] = useState(false);

  useEffect(() => {
    // Prevent the splash screen from hiding
    SplashScreen.preventAutoHideAsync()
      .then(() => setIsGifShown(true))
      .catch((error) => console.error(error));
  }, []);

  if (isGifShown) {
    return (
      <ImageBackground
        source={require('./assets/splash.gif')}
        style={styles.container}
        onLoadEnd={() => {
          // Hide the splash screen and GIF after it's loaded
          setTimeout(() => {
            SplashScreen.hideAsync();
            setIsGifShown(false);
          }, 5000); // Assuming GIF duration is 5 seconds
        }}
      >
        <Text style={styles.descriptionText}>ordo.com - on demand cleaning services.</Text>
      </ImageBackground>
    );
  }

  return (
    <NavigationContainer>
      <RootNavigator />
      <StatusBar style="light" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 20, // Padding at the bottom to ensure the text isn't right at the edge
  },
  descriptionText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 10, // Adjust this value to place the text higher or lower
  },
});
