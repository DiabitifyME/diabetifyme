import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import "nativewind";
import "../global.css"

const WelcomePage = ({ navigation }) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, [navigation]);

    return (
        <View className="flex-1 justify-center items-center bg-[#B7D9DA] px-5">
            {/* Logo Container */}
            <View className="rounded-2xl p-6 mb-6 w-52 h-52 justify-center items-center">
                <Image source={require("../assets/images/welcomePage.png")} className="w-64 h-64" resizeMode="contain" />
            </View>

            {/* Title and Subtitle */}
            <Text className="text-2xl font-bold text-black mb-4">Let's Get Started!</Text>
            <Text className="text-base text-gray-800 text-center px-8 mb-8">
                Sign in to enjoy the features we've provided, and stay healthy!
            </Text>

            {/* Sign Up Button */}
            <TouchableOpacity
                className="w-80 size-16 py-4 rounded-xl border border-gray-500 items-center bg-transparent mb-4"
                onPress={() => navigation.navigate("signUp")}
            >
                <Text className="text-2xl font-bold text-black">Sign Up</Text>
            </TouchableOpacity>

            {/* Log In Button */}
            <TouchableOpacity
                className="w-80 size-16 py-4 rounded-xl bg-white items-center"
                onPress={() => navigation.navigate("logIn")}
            >
                <Text className="text-2xl font-bold text-black">Log In</Text>
            </TouchableOpacity>
        </View>
    );
};

export default WelcomePage;
