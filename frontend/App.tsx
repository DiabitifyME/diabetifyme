import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomePage from "components/welcomePage";
import LoginScreen from "components/logIn";
import SignUpScreen from "components/signUp";
import questionOne from "components/questionOne";
import DiabetesDiagnosisScreen from "components/questionTwo";
import Question3Screen from "components/questionThree";
import RoleSelectionScreen from "components/roleSelection";
import HomePage from "components/home";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomePage} />
        <Stack.Screen name="logIn" component={LoginScreen} />
        <Stack.Screen name="home" component={HomePage} />
        <Stack.Screen name="signUp" component={SignUpScreen} />
        <Stack.Screen name="questionOne" component={questionOne} />
        <Stack.Screen name="questionTwo" component={DiabetesDiagnosisScreen} />
        <Stack.Screen name="questionThree" component={Question3Screen} />
        <Stack.Screen name="roleSelection" component={RoleSelectionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
