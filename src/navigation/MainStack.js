import React from 'react';
import { Home, Introduction, Type1 } from '../Screens';
import navigationStrings from './navigationStrings';

export default function (Stack) {

  return (
    <>
      <Stack.Screen
        name={navigationStrings.HOME}
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.INTRODUCTION}
        component={Introduction}
        options={{headerShown: false}}
      />
    </>
  );
}
