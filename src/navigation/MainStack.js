import React from 'react';
import { Home } from '../Screens';
import navigationStrings from './navigationStrings';

export default function (Stack) {

  return (
    <>
      <Stack.Screen
        name={navigationStrings.HOME}
        component={Home}
        options={{headerShown: false}}
      />
    </>
  );
}
