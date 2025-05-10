import React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LandingPage from "components/landingPage";
import LoginScreen from "components/logIn";
import SignUpScreen from "components/signUp";
import questionOne from "components/questionOne";
import DiabetesDiagnosisScreen from "components/questionTwo";
import Question3Screen from "components/questionThree";
import RoleSelectionScreen from "components/roleSelection";
import HomePage from "components/home";
import SelectPatient from "components/selectPatient";
import AlertsScreen from "components/alertsCareGiver";
import MotivationPopup from "components/careGiverMotivation";
import LoginScreenCare from "components/logInCareGiver";
import SignUpScreenCare from "components/signUpCareGiver";
import DailyTasksScreen from "components/dailyTasksCareGiver";
import LinkToPatientScreen from "components/linkToPatient";
import WelcomeScreen from "components/welcomeExercise";
import ExerciseProgram from "components/exercisePrograms";
import YogaScreen from "components/yoga";
import PilatesScreen from "components/pilates";
import FullBodyScreen from "components/fullBody";
import StretchingScreen from "components/stretching";
import SubscribeScreen from "components/subscribtionExercise";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="landing" component={LandingPage} />
        <Stack.Screen name="logIn" component={LoginScreen} />
        <Stack.Screen name="home" component={HomePage} />
        <Stack.Screen name="signUp" component={SignUpScreen} />
        <Stack.Screen name="questionOne" component={questionOne} />
        <Stack.Screen name="questionTwo" component={DiabetesDiagnosisScreen} />
        <Stack.Screen name="questionThree" component={Question3Screen} />
        <Stack.Screen name="roleSelection" component={RoleSelectionScreen} />
        <Stack.Screen name="selectPatient" component={SelectPatient} />
        <Stack.Screen name="alertsCareGiver" component={AlertsScreen} />
        <Stack.Screen name="logInCareGiver" component={LoginScreenCare} />
        <Stack.Screen name="signUpCareGiver" component={SignUpScreenCare} />
        <Stack.Screen name="dailyTasksCareGiver" component={DailyTasksScreen} />
        <Stack.Screen name="linkToPatient" component={LinkToPatientScreen} />
        <Stack.Screen name="welcomeExercise" component={WelcomeScreen} />
        <Stack.Screen name="exercisePrograms" component={ExerciseProgram} />
        <Stack.Screen name="yoga" component={YogaScreen} />
        <Stack.Screen name="pilates" component={PilatesScreen} />
        <Stack.Screen name="fullBody" component={FullBodyScreen} />
        <Stack.Screen name="stretching" component={StretchingScreen} />
        <Stack.Screen name="subscribtionExercise" component={SubscribeScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
