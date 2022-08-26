// App.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator }  from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons'


import HomeScreen from './components/HomeScreen';
import AboutScreen from './components/AboutScreen';
import ContactScreen from './components/ContactScreen';
import DetailsScreen from './components/DetailsScreen';

import LeftDrawer from './components/LeftDrawer';


//All 3 versions of navigations.
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

//Following code are the different navigations avaible.
//Uncomment the sections to see them in action. 

//Navigation by Stack
/*
export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component = {HomeScreen} />
        <Stack.Screen name="About" component = {AboutScreen} />
        <Stack.Screen name="Contact" component = {ContactScreen} />
        <Stack.Screen name="Details" component = {DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
*/


//Navigation by Drawer

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen}
          options={{
           drawerIcon: ({focused, size}) => (
              <Ionicons
                 name="md-home"
                 size={size}
                 color={focused ? '#e82c5e' : '#ccc'}
              />
           ),
        }}
        />
        <Drawer.Screen name="About" component={AboutScreen}
          options={{
           drawerIcon: ({focused, size}) => (
              <Ionicons
                 name="person"
                 size={size}
                 color={focused ? '#e82c5e' : '#ccc'}
              />
           ),
        }}
        />
        <Drawer.Screen name="Contact" component={ContactScreen}
          options={{
           drawerIcon: ({focused, size}) => (
              <Ionicons
                 name="people"
                 size={size}
                 color={focused ? '#e82c5e' : '#ccc'}
              />
           ),
          }}        
        />
        <Drawer.Screen name="Details" component={DetailsScreen}
          options={{
           title: 'Details',
           drawerIcon: ({focused, size}) => (
              <Ionicons
                 name="journal"
                 size={size}
                 color={focused ? '#e82c5e' : '#ccc'}
              />
           ),
          }}
        />
        
      </Drawer.Navigator>
    </NavigationContainer>
    
  );
}


//Navigation by Tabs
/*
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="About" component={AboutScreen}/>
        <Tab.Screen name="Contact" component={ContactScreen}/>
        <Tab.Screen name="Details" component={DetailsScreen}/>
    </Tab.Navigator>
    </NavigationContainer>
    
  );
}
*/

