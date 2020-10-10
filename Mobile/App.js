import React from 'react';
import { useFonts } from 'expo-font';

// Routes
import Routes from './src/Routes/Routes'

export default function App() {
  const [ loaded ] = useFonts({
    'Light': require('./assets/Fonts/OpenSans-Light.ttf'),
    'Bold': require('./assets/Fonts/OpenSans-Bold.ttf'),
    'Regular': require('./assets/Fonts/OpenSans-Regular.ttf'),
    'Semibold': require('./assets/Fonts/OpenSans-SemiBold.ttf'),
    'Extrabold': require('./assets/Fonts/OpenSans-ExtraBold.ttf'),
  })

  if(!loaded){
    return null
  }

  return (<Routes />)
}


