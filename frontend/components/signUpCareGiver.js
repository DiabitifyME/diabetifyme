import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Linking } from "react-native";
import "nativewind";
import { LinearGradient } from 'expo-linear-gradient';
import "../global.css";



const SignUpScreenCare = () => {
    const navigation = useNavigation();
    const [fullName, setFullName] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const handleSignUp = async () => {
        if (!fullName || !mobileNumber || !email || !password || !isChecked) {
            Alert.alert("Error", "Please fill all fields and accept the terms & conditions.");
            return;
        }

        try {
            // Replace with your computer's IP address
            const response = await fetch("http://192.168.1.16:3000/api/users/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: fullName,
                    email,
                    password,
                    mobileNumber,
                }),
            });

            const result = await response.json();

            if (response.status === 201) {
                Alert.alert(
                    "Success",
                    result.message,
                    [
                        {
                            text: "OK",
                            onPress: () => navigation.navigate("questionOne")
                        }
                    ]
                );
            } else {
                Alert.alert("Error", result.error || "Registration faieeled.");
            }
        } catch (error) {
            console.error("Registration error:", error);
            console.error("Error details:", {
                message: error.message,
                stack: error.stack
            });
            Alert.alert("Error", "Registration failed");
        }
    };

    return (
        <View className="flex-1 bg-white">
            {/* Gradient Header */}
            <LinearGradient
                colors={['#ffffff', '#f8e5ff']}
                className="h-40 w-full absolute top-0 rounded-b-3xl"
            />

            <View className="flex-1" contentContainerStyle={{ flexGrow: 1 }}>
                <View className="flex-1 pt-16 px-6 pb-8">
                    <View className="relative">
                        <TouchableOpacity onPress={() => navigation.goBack()} className="absolute">
                            <Ionicons name="arrow-back" size={26} color="gray" />
                        </TouchableOpacity>
                        <Text className="text-3xl font-bold mt-6 mb-16 text-gray-800 text-center">
                            Let's Get Started!
                        </Text>
                    </View>
                    <View className="mt-4">
                        {/* Full Name Input */}
                        <InputField
                            icon="person"
                            placeholder="   Full Name"
                            value={fullName}
                            onChangeText={setFullName}
                        />

                        {/* Mobile Number Input */}
                        <InputField
                            icon="call"
                            placeholder="   Mobile Number"
                            value={mobileNumber}
                            onChangeText={setMobileNumber}
                            keyboardType="phone-pad"
                        />

                        {/* Email Input */}
                        <InputField
                            icon="mail-outline"
                            placeholder="Email address"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                        />

                        {/* Password Input */}
                        <View className="flex-row items-center border border-gray-300 rounded-lg px-3 py-2 mb-7">
                            <Ionicons name="lock-closed" size={20} color="black" />
                            <TextInput
                                className="flex-1 h-10 ml-2"
                                placeholder="Password"
                                secureTextEntry={!showPassword}
                                value={password}
                                onChangeText={setPassword}
                            />
                            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                                <Ionicons name={showPassword ? "eye" : "eye-off"} size={20} color="black" />
                            </TouchableOpacity>
                        </View>

                        {/* Terms & Conditions */}
                        <View className="flex-row items-center mb-7">
                            <TouchableOpacity
                                onPress={() => setIsChecked(!isChecked)}
                                className={`w-5 h-5 border border-gray-500 rounded-md items-center justify-center ${isChecked ? "bg-[#ABA5ED]" : ""}`}
                            >
                                {isChecked && <Ionicons name="checkmark" size={16} color="white" />}
                            </TouchableOpacity>
                            <Text className="ml-2 text-sm">
                                I Accept all the{" "}
                                <Text className="text-black font-bold">terms & conditions</Text>
                            </Text>
                        </View>

                        {/* Sign Up Button */}
                        <TouchableOpacity
                            onPress={() => navigation.navigate("selectPatient")}
                            className="bg-[#E8E6FF] rounded-lg py-3 items-center mb-6">
                            <Text className="text-lg font-bold text-black">Sign Up</Text>
                        </TouchableOpacity>

                        {/* OR Divider */}
                        <View className="flex-row items-center mb-5">
                            <View className="flex-1 h-px bg-gray-300" />
                            <Text className="mx-3 text-gray-500">OR</Text>
                            <View className="flex-1 h-px bg-gray-300" />
                        </View>

                        {/* Social Logins */}
                        <View className="flex-row justify-center gap-5 mb-5">
                            <TouchableOpacity>
                                <Ionicons name="logo-google" size={40} color="#DB4437" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => Linking.openURL("https://www.facebook.com")}>
                                <Ionicons name="logo-facebook" size={40} color="#3b5998" />
                            </TouchableOpacity>
                        </View>

                        {/* Sign In Link */}
                        <Text className="text-center text-sm">
                            Have an Account?{" "}
                            <Text className="text-[#ABA5ED] font-bold" onPress={() => navigation.navigate("logInCareGiver")}>
                                Sign in
                            </Text>
                        </Text>
                    </View>
                </View>

            </View>
        </View>










    );
};

const InputField = ({ icon, ...props }) => (
    <View className="flex-row items-center border border-gray-300 rounded-lg px-3 py-2 mb-3">
        <Ionicons name={icon} size={20} color="black" />
        <TextInput className="flex-1 h-10 ml-2" {...props} />
    </View>
);

export default SignUpScreenCare;
