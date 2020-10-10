import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Register from '../Screens/Register/Register'

const Stack = createStackNavigator()

export default function Routes(){
  return (
    <Stack.Navigator>
        <Stack.Screen name='Register' component={Register} />
    </Stack.Navigator>
  )
}

