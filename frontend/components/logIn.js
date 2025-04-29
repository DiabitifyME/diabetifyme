import React, { useState } from "react";
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
    Linking,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import "nativewind";
import { LinearGradient } from 'expo-linear-gradient';
import "../global.css";
import QuestionOne from "./questionOne";

const API_URL = "http://192.168.1.16:3000"; // Store base URL in a constant

const LoginScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async () => {
        if (!email & !password) {
            Alert.alert("Error", "Please fill in both email and password.");
            return;
        }

        setIsLoading(true);

        try {
            // Check network connectivity
            const response = await fetch(`${API_URL}/api/users/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email.trim(),
                    password: password,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                // Store user token/data here if needed
                Alert.alert("Success", "Login successful!", [
                    {
                        text: "OK",
                        onPress: () => navigation.navigate("home"), // Navigate to the next screen
                    }
                ]);
            } else {
                Alert.alert("Error", data.error || "Invalid credentials");
            }
        } catch (error) {
            console.error("Login error:", error);
            Alert.alert(
                "Connection Error",
                "Please check your internet connection and try again."
            );
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <View className="flex-1 bg-white">
            {/* Gradient Header */}
            <LinearGradient
                colors={['#ffffff', '#f8e5ff']}
                className="h-48 w-full absolute top-0 rounded-b-3xl"
            />

            <View className="flex-1" contentContainerStyle={{ flexGrow: 2 }}>
                <View className="flex-1 mt-6 pt-16 px-6 pb-8">
                    {/* Container for text with background icon */}
                    <View className="relative">
                        <Text className="text-3xl font-bold mt-6 text-gray-800 w-48">
                            Hello, Welcome 👋
                        </Text>
                    </View>
                    <View>
                        <Text className="text-2xl font-bold mb-4 text-gray-800 mt-8 ">
                            Log In
                        </Text>
                        <Text className="text-sm text-gray-600 font-medium mb-6">
                            Use your email and password to login
                        </Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        className="absolute mt-8 left-5"
                    >
                        <Ionicons name="arrow-back" size={26} color="gray" />
                    </TouchableOpacity>

                    {/* Email Input */}
                    <View className="flex-row items-center border border-gray-300 rounded-lg px-3 py-2 mb-8 mt-2">
                        <Ionicons name="mail-outline" size={20} color="black" className="mr-2" />
                        <TextInput
                            className="flex-1 h-10"
                            placeholder="Email address"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                            value={email}
                            onChangeText={setEmail}
                            editable={!isLoading}
                        />
                    </View>

                    {/* Password Input */}
                    <View className="flex-row items-center border border-gray-300 rounded-lg px-3 py-2 mb-4">
                        <Ionicons name="lock-closed" size={20} color="black" className="mr-2" />
                        <TextInput
                            className="flex-1 h-10"
                            placeholder="Password"
                            secureTextEntry={!showPassword}
                            value={password}
                            onChangeText={setPassword}
                            editable={!isLoading}
                        />
                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                            <Ionicons
                                name={showPassword ? "eye" : "eye-off"}
                                size={20}
                                color="black"
                            />
                        </TouchableOpacity>
                    </View>

                    {/* Forgot Password */}
                    <TouchableOpacity>
                        <Text className="text-right text-gray-500 mb-8 font-sans">Forgot password?</Text>
                    </TouchableOpacity>

                    {/* Login Button */}
                    <TouchableOpacity
                        onPress={handleLogin}
                        className={`bg-[#E8E6FF] rounded-lg py-4 items-center mb-8 ${isLoading ? "opacity-50" : "opacity-100"
                            }`}

                    >
                        <Text className="text-2xl font-bold text-black">
                            {isLoading ? "Logging in..." : "Log In"}
                        </Text>
                    </TouchableOpacity>
                    {/* OR Divider */}
                    <View className="flex-row items-center mb-7">
                        <View className="flex-1 h-px bg-gray-300" />
                        <Text className="mx-3 text-gray-500">Or sign up with</Text>
                        <View className="flex-1 h-px bg-gray-300" />
                    </View>

                    {/* Social Logins */}
                    <View className="flex-row justify-center gap-6 mb-5">
                        <TouchableOpacity disabled={isLoading}>
                            <Ionicons name="logo-google" size={40} color="#DB4437" />
                        </TouchableOpacity>
                        <TouchableOpacity
                            disabled={isLoading}
                            onPress={() =>
                                Linking.openURL(
                                    "https://www.facebook.com/share/15x4ywbn4y/?mibextid=wwXIfr"
                                )
                            }
                        >
                            <Ionicons name="logo-facebook" size={40} color="#3b5998" />
                        </TouchableOpacity>
                    </View>

                    {/* Sign Up Link */}
                    <Text className="text-center text-sm">
                        Don't Have an Account?{" "}
                        <Text
                            className="text-[#ABA5ED] font-bold"
                            onPress={() => navigation.navigate("signUp")}
                        >
                            Sign Up
                        </Text>
                    </Text>
                </View>

            </View>






        </View >
    );
};

export default LoginScreen;