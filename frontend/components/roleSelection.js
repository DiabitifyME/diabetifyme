import { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styled } from "nativewind";
import { useNavigation } from "@react-navigation/native";
import QuestionOne from "./questionOne";
import "../global.css"

const roles = [
    { id: "patient", label: "Patient", icon: "❤️", bg: "bg-yellow-200" },
    { id: "caregiver", label: "Caregiver", icon: "🤝", bg: "bg-white" },
];

export default function RoleSelectionScreen() {
    const [selectedRole, setSelectedRole] = useState(null);
    const [error, setError] = useState("");
    const navigation = useNavigation();

    const handleConfirm = () => {
        if (!selectedRole) {
            setError("Please select a role before proceeding");
        } else {
            setError("");
            if (selectedRole === "patient") {
                navigation.navigate("questionOne");
            } else {
                navigation.navigate("PatientID");
            }
        }
    };

    return (
        <View className="flex-1 items-center justify-center bg-sky-200 p-4">
            {/* Logo */}
            <Image
                source={require("../assets/images/welcomePage.png")}
                className="w-40 h-20 mb-6"
                resizeMode="contain"
            />

            {/* Title */}
            <Text className="text-xl font-bold mb-4">Select your role</Text>

            {/* Role Options */}
            {roles.map((role) => (
                <TouchableOpacity
                    key={role.id}
                    className={`w-60 py-4 mb-3 rounded-2xl border border-gray-300 flex-row items-center justify-center ${selectedRole === role.id ? role.bg : "bg-gray-100"
                        }`}
                    onPress={() => setSelectedRole(role.id)}
                >
                    <Text className="text-lg">{role.icon} {role.label}</Text>
                </TouchableOpacity>
            ))}

            {/* Error Message */}
            {error ? <Text className="text-red-500 mt-2">{error}</Text> : null}

            {/* Confirm Button */}
            <TouchableOpacity
                className="mt-4 bg-white px-6 py-3 rounded-xl"
                onPress={handleConfirm}
            >
                <Text className="text-black font-semibold">Confirm Role</Text>
            </TouchableOpacity>
        </View>
    );
}