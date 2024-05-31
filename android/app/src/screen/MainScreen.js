import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";
import {HomeOne} from './HomeOne';
import {HomeTwo} from './HomeTwo';
import {HomeThree} from './HomeThree';
import {HomeFour} from './HomeFour';

const Tab = createBottomTabNavigator();

export function MainScreen() {
  return (
    <>
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
      }}
      tabBarOptions={{
        style: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          paddingVertical: 8,
          height: "9%",
          backgroundColor: "white",
        },
        tabStyle: {
          left: 15,
          padding: 0,
        },
      }}
    >
      <Tab.Screen
        name="HomeOne"
        children={() => {
         return <HomeOne />;
        //   return <SingUp/>
        }}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons
                name="home-outline"
                size={30}
                color={focused ? "orange" : "gray"}
                style={{ height: "100%", width: 80, margin: 10, padding: 10 }}
              />
            ) : (
              <Ionicons
                name="home-outline"
                size={30}
                color={"gray"}
                style={{ height: "100%", width: 80, margin: 10, padding: 10 }}
              />
            ),
          tabBarStyle: {
            // padding: 0,
            // height: '9%',
          },
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="HomeTwo"
        children={() => {
          // if (sound) {
          //   playSound();
          // }
          return <HomeTwo />;
        }}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons
                name="game-controller-outline"
                size={30}
                color={focused ? "orange" : "gray"}
                style={{ height: "100%", width: 80, margin: 10, padding: 10 }}
              />
            ) : (
              <Ionicons
                name="game-controller-outline"
                size={30}
                color={"gray"}
                style={{ height: "100%", width: 80, margin: 10, padding: 10 }}
              />
            ),
          unmountOnBlur: true,
          tabBarStyle: {
            // padding: 0,
            // height: '9%',
          },
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="HomeThree"
        children={() => {
          //   if(sound){
          //     playSound();
          //   }
          return <HomeThree />;
        }}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons
                name="notifications-outline"
                size={30}
                color={focused ? "orange" : "gray"}
                style={{ height: "100%", width: 80, margin: 10, padding: 10 }}
              />
            ) : (
              <Ionicons
                name="notifications-outline"
                size={30}
                color={"gray"}
                style={{ height: "100%", width: 80, margin: 10, padding: 10 }}
              />
            ),
          unmountOnBlur: true,
          tabBarStyle: {
            // padding: 0,
            // height: '9%'
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="HomeFour"
        children={() => {
          // playSound();
          return <HomeFour />;
        }}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons
                name="person-circle-outline"
                size={30}
                color={focused ? "orange" : "gray"}
                style={{ height: "100%", width: 80, margin: 10, padding: 10 }}
              />
            ) : (
              <Ionicons
                name="person-circle-outline"
                size={30}
                color={"gray"}
                style={{ height: "100%", width: 80, margin: 10, padding: 10 }}
              />
            ),
          tabBarStyle: {
            // height: '9%'
          },
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  </>
  );
}
