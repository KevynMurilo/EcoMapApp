import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Initial from '../pages/Initial';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const AuthStack = createNativeStackNavigator();

export default function AuthRoutes(){
    return(
        
        <AuthStack.Navigator>

            <AuthStack.Screen
                name='Initial'
                component={Initial}
                options={{
                    headerShown: false
                }}
            />

            <AuthStack.Screen
                name='SignIn'
                component={SignIn}
                options={{
                    headerShown: false
                }}
            />

        <AuthStack.Screen
                name='SignUp'
                component={SignUp}
                options={{
                    title: 'Voltar',
                    headerBackTitleVisible: false,
                    headerTintColor: 'white',
                    headerStyle: {
                        backgroundColor: 'black', 
                    },
                    headerTitleStyle: {
                        color: 'white', 
                    }}}
                    
            />
        </AuthStack.Navigator>
    )
}