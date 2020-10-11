import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

// Routes
import Main from '../Screens/Main/Main'
import Profile from '../Screens/Profile/Profile'
import Wellcome from '../Screens/Wellcome/Wellcome'
import PostDetails from '../Screens/PostDetails/PostDetails'

const Stack = createStackNavigator()

export default function Routes(){
    return(
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }}
          >
            <Stack.Screen 
              name='Main' 
              component={Main} 
              options={{
                  headerShown: false,
              }}
            />
            <Stack.Screen 
              name='Profile' 
              component={Profile} 
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen 
              name='Wellcome' 
              component={Wellcome} 
              options={{ 
                headerShown: false 
              }}
            />

            <Stack.Screen 
              name='PostDetails' 
              component={PostDetails} 
              options={{
                headerShown: false,
              }}
            />
            </Stack.Navigator>
        </NavigationContainer>
    )
}