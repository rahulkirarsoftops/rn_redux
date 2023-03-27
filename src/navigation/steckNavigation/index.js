import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routes} from './routeName';

const Stack = createNativeStackNavigator();

export const StackNavigation = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}
    >
      {routes.map((item, index) => {
        return (
          <Stack.Screen
            name={item.name}
            component={item.component}
            key={index}
          />
        );
      })}
    </Stack.Navigator>
  );
};
