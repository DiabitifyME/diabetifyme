import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Linking } from "react-native";
import "nativewind";
import "../global.css";

const SignUpScreen = () => {
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
            const response = await fetch("http://192.168.43.238:3000/api/users/register", {
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
        <View className="flex-1 justify-center bg-white px-5">
            <TouchableOpacity onPress={() => navigation.goBack()} className="absolute top-12 left-5">
                <Ionicons name="arrow-back" size={24} color="gray" />
            </TouchableOpacity>

            <Text className="text-2xl font-bold text-center mb-5">Let's Get Started!</Text>

            {/* Full Name Input */}
            <InputField
                icon="person"
                placeholder="Full Name"
                value={fullName}
                onChangeText={setFullName}
            />

            {/* Mobile Number Input */}
            <InputField
                icon="call"
                placeholder="Mobile Number"
                value={mobileNumber}
                onChangeText={setMobileNumber}
                keyboardType="phone-pad"
            />

            {/* Email Input */}
            <InputField
                icon="mail"
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
                    className={`w-5 h-5 border border-gray-500 rounded items-center justify-center ${isChecked ? "bg-[#56B4D3]" : ""}`}
                >
                    {isChecked && <Ionicons name="checkmark" size={16} color="white" />}
                </TouchableOpacity>
                <Text className="ml-2 text-sm">
                    I Accept all the{" "}
                    <Text className="text-[#56B4D3] font-bold">terms & conditions</Text>
                </Text>
            </View>

            {/* Sign Up Button */}
            <TouchableOpacity onPress={handleSignUp} className="bg-[#A9DCD3] rounded-lg py-3 items-center mb-6">
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
                <Text className="text-[#A9DCD3] font-bold" onPress={() => navigation.navigate("logIn")}>
                    Sign in
                </Text>
            </Text>
        </View>
    );
};

const InputField = ({ icon, ...props }) => (
    <View className="flex-row items-center border border-gray-300 rounded-lg px-3 py-2 mb-3">
        <Ionicons name={icon} size={20} color="black" />
        <TextInput className="flex-1 h-10 ml-2" {...props} />
    </View>
);

export default SignUpScreen;
