import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import Register from '../Screens/Register/Register'
import FormRegister from '../Screens/Register/FormRegister/FormRegister'
import AreasRegister from '../Screens/Register/Areas/Areas'

const Stack = createStackNavigator()

export default function Routes(){
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}
    >
        <Stack.Screen 
          name='Register' 
          component={Register} 
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen 
          name='FormRegister'
          component={FormRegister}
          options={{
            title: 'Formulário de Registro',
            headerTitleStyle: { 
              fontFamily: 'Bold',
            },
            headerTintColor: '#3B2C33',
            headerTitleAlign: 'center'
          }}
        />

        <Stack.Screen 
          name='AreasRegister'
          component={AreasRegister}
          options={{
            title: 'Sua Área de Atuação',
            headerTitleStyle: { 
              fontFamily: 'Bold',
            },
            headerTintColor: '#3B2C33',
            headerTitleAlign: 'center'
          }}
        />
    </Stack.Navigator>
  )
}

