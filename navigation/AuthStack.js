import React, {useState, useEffect} from "react";
import {View} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Register from "../screens/Register";
import Login from "../screens/Login";
// import OnboardingScreen


export default function AuthStack() {

    const Stack = createStackNavigator();

    const screenOptions = {
        headerShown: false,
    };
    let routeName = "Login";

    return (
        <Stack.Navigator initialRouteName = {routeName} screenOptions={screenOptions}>
            <Stack.Screen
                name="Login"
                component={Login}
                options={{header: () => null}}
            />
            <Stack.Screen
                name="Register"
                component={Register}
                options={{header: () => null}}
            />
        </Stack.Navigator>
    );
}