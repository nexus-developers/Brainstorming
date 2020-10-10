import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Routes
import Wellcome from '../Screens/Wellcome/Wellcome'
import Login from '../Screens/Login/Login'
import RegisterRoutes from './Register.routes'
import Main from '../Screens/Main/Main'
import Profile from '../Screens/Profile/Profile'
import PostDetails from '../Screens/PostDetails/PostDetails'

const Stack = createStackNavigator()

export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name='Wellcome' 
                    component={Wellcome} 
                    options={{ 
                        headerShown: false 
                    }}
                />
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='Register' component={RegisterRoutes} />
                {/* <Stack.Screen name='Main' component={Main} /> */}
                {/* <Stack.Screen name='Profile' component={Profile} /> */}
                {/* <Stack.Screen name='PostDetails' component={PostDetails} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}