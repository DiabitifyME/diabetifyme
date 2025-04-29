import { useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';
import "../global.css"
import LoginScreen from "./logIn";

const roles = [
    { id: "patient", label: "Patient", icon: "❤️" },
    { id: "caregiver", label: "Caregiver", icon: "🤝" },
];

export default function RoleSelectionScreen() {
    const [error, setError] = useState("");
    const navigation = useNavigation();

    const handleRoleSelect = (roleId) => {
        setError("");
        if (roleId === "patient") {
            navigation.navigate("logIn"); // Changed to navigate to login page
        } else {
            navigation.navigate("PatientID"); // Or your caregiver destination
        }
    };

    return (
        <View className="flex-1 bg-white">
            {/* Gradient Header */}
            <LinearGradient
                colors={['#ffffff', '#f8e5ff']}
                className="h-64 w-full absolute top-0 rounded-b-3xl"
            />

            <View className="flex-1" contentContainerStyle={{ flexGrow: 1 }}>
                <View className="flex-1 items-center pt-16 px-6 pb-8">
                    {/* Logo */}
                    <View className="w-64 h-64 mt-16 mb-6 rounded-3xl overflow-hidden bg-white ">
                        <Image
                            source={require("../assets/images/logo.png")}
                            className="w-full h-full"
                            resizeMode="contain"
                        />
                    </View>


                    {/* Title */}
                    <Text className="text-2xl font-bold mb-8 mt-2 text-gray-800 text-center">Select your role</Text>

                    {/* Role Buttons with Different Colors */}
                    <View className="w-full mb-6 mt-6justify-center items-center">
                        {/* Patient Button */}
                        <TouchableOpacity
                            className="w-80 py-4 mb-8 rounded-xl flex-row justify-center items-center bg-[#DBEAFE]"
                            onPress={() => handleRoleSelect(roles[0].id)}
                        >
                            <Text className="text-xl mr-3">{roles[0].icon}</Text>
                            <Text className="text-lg" style={{ color: roles[0].textColor }}>
                                {roles[0].label}
                            </Text>
                        </TouchableOpacity>

                        {/* Caregiver Button */}
                        <TouchableOpacity
                            className="w-80 py-4 rounded-xl flex-row content-center justify-center items-center bg-[#FCE7F3]"
                            onPress={() => handleRoleSelect(roles[1].id)}
                        >
                            <Text className="text-xl mr-3">{roles[1].icon}</Text>
                            <Text className="text-lg" style={{ color: roles[1].textColor }}>
                                {roles[1].label}
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {/* Error Message */}
                    {error ? <Text className="text-red-500 mb-4 text-center">{error}</Text> : null}
                </View>

            </View>
        </View>
    );
}