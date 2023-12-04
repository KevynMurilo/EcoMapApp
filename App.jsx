import React from "react";
import { LogBox } from 'react-native'; 

import { NavigationContainer } from '@react-navigation/native';

import Routes from "./src/routes";
import AuthProvider from "./src/contexts/auth";


LogBox.ignoreLogs(['The action \'NAVIGATE\' with payload {"name":"StackRoutes"} was not handled by any navigator.']);

export default function App(){
  return(
    <NavigationContainer>
      <AuthProvider>
        <Routes/>
      </AuthProvider>
    </NavigationContainer>
  )
}
