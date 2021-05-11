import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './app/Home'
import DetailsScreen from './app/Details'

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default MyStack

/*import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './app/Home';
import Story from './app/Story';
import Details from './app/Details';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Profile' }}
        />
        <Stack.Screen 
          name="Story" 
          component={Story}
          options={{ title: 'Story' }} 
        />
        <Stack.Screen 
          name="Details" 
          component={Story}
          options={{ title: 'Details' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack*/