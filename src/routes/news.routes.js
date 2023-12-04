import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../pages/Home";
import NewsDetailScreen from "../pages/NewsDetailScreen";

const Stack = createNativeStackNavigator();

export default function StackRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    
                }}
            />

            <Stack.Screen
                name="NewsDetailScreen"
                component={NewsDetailScreen}
                options={{
                    headerStyle: {
                        backgroundColor: '#202020', 
                    },
                    headerTintColor: 'white', 
                }}
            />
        </Stack.Navigator>
    )
}