import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import MainStack from './MainStack';


const Stack = createStackNavigator();

export default function Routes() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {MainStack(Stack)}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
