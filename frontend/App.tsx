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
import ProfileScreen from "components/profilepage";
import MyProfileScreen from "components/myprofile";
import CareConnectScreen from "components/careconnect";
import SettingsScreen from "components/settings";
import NotificationsScreen from "components/notification";
import AccountDataScreen from "components/accountdata";
import NutritionWelcomeScreen from "components/welcomenutrition";
import NutritionProgramScreen from "components/nutritionprogram";
import BreakfastScreen from "components/breakfast";
import LunchScreen from "components/lunch";
import DinnerScreen from "components/dinner";
import NutritionSubscribeScreen from "components/subscribe";
import PaymentMethod from "components/paymentMethod";
import DebitCardScreen from "components/debitCard";
import CreditCardScreen from "components/creditCard";
import ThanksScreen from "components/ThanksPayment";
import ServicesScreen from "components/seeAllServices";
import DoctorMatchingScreen from "components/doctorMatching";
import SymptomChecker from "components/symptomsChecker";
import DiabetesEmpowerment from "components/diabetesEmpowerment";
import EmergencyProtocols from "components/emergencyProtocols";
import DiabetesAwareness from "components/diabetesAwareness";
import LocationScreen from "components/Location";
import MyPlanScreen from "components/MyPlan";
import PlanSelectionScreen from "components/PlanSelection";
import RemindersScreen from "components/Reminders";
import CountryPickerScreen from "components/Country";
import DataExportScreen from "components/DataExport";
import AccountDeletionFeedback from "components/DeleteAccount";

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
        <Stack.Screen name="profilepage" component={ProfileScreen} />
        <Stack.Screen name="myprofile" component={MyProfileScreen} />
        <Stack.Screen name="careconnect" component={CareConnectScreen} />
        <Stack.Screen name="settings" component={SettingsScreen} />
        <Stack.Screen name="notification" component={NotificationsScreen} />
        <Stack.Screen name="accountdata" component={AccountDataScreen} />
        <Stack.Screen name="welcomenutrition" component={NutritionWelcomeScreen} />
        <Stack.Screen name="nutritionprogram" component={NutritionProgramScreen} />
        <Stack.Screen name="breakfast" component={BreakfastScreen} />
        <Stack.Screen name="lunch" component={LunchScreen} />
        <Stack.Screen name="dinner" component={DinnerScreen} />
        <Stack.Screen name="subscribe" component={NutritionSubscribeScreen} />
        <Stack.Screen name="paymentMethod" component={PaymentMethod} />
        <Stack.Screen name="debitCard" component={DebitCardScreen} />
        <Stack.Screen name="creditCard" component={CreditCardScreen} />
        <Stack.Screen name="ThanksPayment" component={ThanksScreen} />
        <Stack.Screen name="seeAllServices" component={ServicesScreen} />
        <Stack.Screen name="doctorMatching" component={DoctorMatchingScreen} />
        <Stack.Screen name="symptomsChecker" component={SymptomChecker} />
        <Stack.Screen name="diabetesEmpowerment" component={DiabetesEmpowerment} />
        <Stack.Screen name="emergencyProtocols" component={EmergencyProtocols} />
        <Stack.Screen name="diabetesAwareness" component={DiabetesAwareness} />
        <Stack.Screen name="Location" component={LocationScreen} />
        <Stack.Screen name="MyPlan" component={MyPlanScreen} />
        <Stack.Screen name="PlanSelection" component={PlanSelectionScreen} />
        <Stack.Screen name="Reminders" component={RemindersScreen} />
        <Stack.Screen name="Country" component={CountryPickerScreen} />
        <Stack.Screen name="DataExport" component={DataExportScreen} />
        <Stack.Screen name="DeleteAccount" component={AccountDeletionFeedback} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
