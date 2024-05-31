import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from './android/app/src/screen/Splash';
import { MainScreen } from './android/app/src/screen/MainScreen';
import { HomeOne } from './android/app/src/screen/HomeOne';
import { HomeTwo } from './android/app/src/screen/HomeTwo';
import { HomeThree } from './android/app/src/screen/HomeThree';
import { HomeFour } from './android/app/src/screen/HomeFour';
import { Test } from './Screens/Test';
export default function App() {
  const Stack = createStackNavigator();
    return (

      <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeOne" component={HomeOne} />
      <Stack.Screen name="HomeTwo" component={HomeTwo} />
        <Stack.Screen name="Splash" component={Splash} />
      </Stack.Navigator>
    </NavigationContainer>
        
    );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 0,
  },
});
