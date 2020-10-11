// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import 'react-native-gesture-handler';

import * as React from 'react';


import {
  NavigationContainer
} from '@react-navigation/native';
import {
  createStackNavigator
} from '@react-navigation/stack';
import {
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs';

import HomeScreen from './screen/HomeScreen';
import DetailsScreen from './screen/DetailsScreen';
import StaffScreen from './screen/StaffScreen';
import SettingsScreen from './screen/SettingsScreen';
import Icon from 'react-native-ionicons';
import CustomerScreen from './screen/CustomerScreen';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#18a113' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' ,justifyContent:"center"},
  
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home Page' }}/>
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: 'Details Page' }} />
          <Stack.Screen
          name="Staff"
          component={StaffScreen}
          options={{ title: 'Staff Page' }} />
           <Stack.Screen
          name="Customer"
          component={CustomerScreen}
          options={{ title: 'Customer Page' }} />
      </Stack.Navigator>
  );
}

function SettingsStack() {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{
        headerStyle: { backgroundColor: '#18a113' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' }
      }}>
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: 'Setting Page' }}/>
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{ title: 'Details Page' }}/>
      <Stack.Screen
        name="Staff"
        component={StaffScreen}
        options={{ title: 'Staff Page' }}/>
         <Stack.Screen
          name="Customer"
          component={CustomerScreen}
          options={{ title: 'Customer Page' }} />
    </Stack.Navigator>
  );
}
function StaffStack() {
  return (
    <Stack.Navigator
      initialRouteName="Staff"
      screenOptions={{
        headerStyle: { backgroundColor: '#18a113' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' }
      }}>
      <Stack.Screen
        name="Staff"
        component={StaffScreen}
        options={{ title: 'Staff Page' }}/>
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{ title: 'Details Page' }}/>
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{ title: 'Settings Page' }}/>
        <Stack.Screen
          name="Customer"
          component={CustomerScreen}
          options={{ title: 'Customer Page' }} />
    </Stack.Navigator>
  );
}
function CustomerStack() {
  return (
    <Stack.Navigator
      initialRouteName="Customer"
      screenOptions={{
        headerStyle: { backgroundColor: '#18a113' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' }
      }}>
      <Stack.Screen
        name="Staff"
        component={StaffScreen}
        options={{ title: 'Staff Page' }}/>
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{ title: 'Details Page' }}/>
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: 'Settings Page' }}/>
         <Stack.Screen
          name="Customer"
          component={CustomerScreen}
          options={{ title: 'Customer Page' }} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        tabBarOptions={{
          activeTintColor: '#42f44b',
        }}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Icon
                name="home"
                color={color}
                size={size}
              />
            ),
          }}  />
        <Tab.Screen
          name="SettingsStack"
          component={SettingsStack}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <Icon
                name="settings"
                color={color}
                size={size}
              />
            ),
           
          }} />
          <Tab.Screen
          name="StaffStack"
          component={StaffStack}
          options={{
            tabBarLabel: 'StaffStack',
            tabBarIcon: ({ color, size }) => (
              <Icon
                name="contact"
                color={color}
                size={size}
              />
            ),
           
          }} />
          <Tab.Screen
          name="CustomerStack"
          component={CustomerStack}
          options={{
            tabBarLabel: 'CustomerStack',
            tabBarIcon: ({ color, size }) => (
              <Icon
                name="contact"
                color={color}
                size={size}
              />
            ),
           
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;