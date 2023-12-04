import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';

import RealTimeFires from "../pages/RealTimeFires";
import StackRoutes from "./news.routes";

import Reports from "../pages/Reports";
import Donation from "../pages/Donation";

const AppTab = createBottomTabNavigator();

export default function AppRoutes(){
    return(
        <AppTab.Navigator
            screenOptions={{
                tabBarShowLabel: false
            }}
        >

            <AppTab.Screen
                name="StackRoutes"
                component={StackRoutes}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color, size}) =>{
                        return <Feather name="book-open" color={color} size={size}/>
                    }
                }}
            />

            <AppTab.Screen
                name="RealTimeFires"
                component={RealTimeFires}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color, size}) =>{
                        return <Feather name="globe" color={color} size={size}/>
                    }
                }}
            />

            <AppTab.Screen
                name="Reports"
                component={Reports}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color, size}) =>{
                        return <Feather name="trending-up" color={color} size={size}/>
                    }
                }}
            />

            <AppTab.Screen
                name="Donation"
                component={Donation}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color, size}) =>{
                        return <Feather name="dollar-sign" color={color} size={size}/>
                    }
                }}
            />

        </AppTab.Navigator>
    )
}