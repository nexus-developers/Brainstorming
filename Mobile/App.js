import React, { useState, useEffect } from 'react';
import { useFonts } from 'expo-font';
import AsyncStorage from '@react-native-community/async-storage';

// Routes
import Routes from './src/Routes/Routes'
import AuthRoutes from './src/Routes/Auth.routes'

export default function App() {
  const [ token, setToken ] = useState('')

  useEffect(() => {
    getToken()
  }, [])

  const [ loaded ] = useFonts({
    'Light': require('./assets/Fonts/OpenSans-Light.ttf'),
    'Bold': require('./assets/Fonts/OpenSans-Bold.ttf'),
    'Regular': require('./assets/Fonts/OpenSans-Regular.ttf'),
    'Semibold': require('./assets/Fonts/OpenSans-SemiBold.ttf'),
    'Extrabold': require('./assets/Fonts/OpenSans-ExtraBold.ttf'),
  })

  async function getToken(){
    const value = await AsyncStorage.getItem('@brainstorm_Token')
    setToken(value)

    console.log(value);

  }

  if(!loaded){
    return null
  } 

  return(
    <>
      {
        token === null ? (
          <Routes/>
        ) : (
          <AuthRoutes/>
        )
      }
    </>
  )
}


