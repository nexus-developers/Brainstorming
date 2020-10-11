import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

// Routes
import Main from '../Screens/Main/Main'
import Profile from '../Screens/Profile/Profile'
import Wellcome from '../Screens/Wellcome/Wellcome'
import Login from '../Screens/Login/Login'
import PostDetails from '../Screens/PostDetails/PostDetails'
import CreatePost from '../Screens/CreatePost/CreatePost'
import Register from '../Screens/Register/Register'
import FormRegister from '../Screens/Register/FormRegister/FormRegister'
import AreasRegister from '../Screens/Register/Areas/Areas'
import TagsRegister from '../Screens/Register/Tags/Tags'

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
              name='Login' 
              component={Login} 
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
            <Stack.Screen 
              name='CreatePost'
              component={CreatePost}
              options={{
                headerShown: false
              }}
            />

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
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
              }}
            />

            <Stack.Screen 
              name='AreasRegister'
              component={AreasRegister}
              options={{
                title: 'Área de Atuação',
                headerTitleStyle: { 
                  fontFamily: 'Bold',
                },
                headerTintColor: '#3B2C33',
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
              }}
            />

            <Stack.Screen 
              name='TagsRegister'
              component={TagsRegister}
              options={{
                title: 'Seleção de Tags',
                headerTitleStyle: { 
                  fontFamily: 'Bold',
                },
                headerTintColor: '#3B2C33',
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
              }}
            />

            {/* <Stack.Screen name='PostDetails' component={PostDetails} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}