
import React from 'react';
import ComponentsScreen from './src/screens/componentsscreen';
import HomeScreen from './src/screens/homescreen';
import ListScreen from './src/screens/listscreen';
//import {createStackNavigator,createAppContainer} from 'react-navigations';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


/*const navigator = createStackNavigator(
  {
    Home:HomeScreen,
    Components:ComponentsScreen,
    List:ListScreen,
  },
  {
    initialRouteName : 'Home',
    defaultNavigationOptions :{
      title:'App'
    }
     
  }
);*/
const Stack = createStackNavigator();
function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Components" component={ComponentsScreen} />
        <Stack.Screen name="List" component={ListScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;