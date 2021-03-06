import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import AppLoader from "./apploader";
import { AppRegistry } from "react-native";
import SignUpView from "./dangky";
import Login from "./Login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screen/HomeScreen'
import RegisterScreen from "./register";
import AsyncStorage from '@react-native-async-storage/async-storage';
const Stack = createNativeStackNavigator();
export default App = function   ()  {
     return (
        <>
            {/* <AppLoader/> */}
            {/* <SignUpView/> */}
            {/* <Login/> */}
            <NavigationContainer>{/* Rest of your app code */}
                <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}} >
                    <Stack.Screen name="Login" component={Login}/>
                    {/* <Stack.Screen name="dangky" component={SignUpView} /> */}
                    <Stack.Screen name="dangky" component={RegisterScreen}/>
                    <Stack.Screen name="Home" component={HomeScreen}/>
                </Stack.Navigator>
            </NavigationContainer>

        </>
     );
 }
