import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    TextInput,
    SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

const MyProfileScreen = () => {
    const navigation = useNavigation();

    const [name, setName] = useState("Martina");
    const [email, setEmail] = useState("Martina@gmail.com");
    const [mobile, setMobile] = useState("");
    const [gender, setGender] = useState("Female");
    const [height, setHeight] = useState("160cm");
    const [birthYear, setBirthYear] = useState("2003");
    const [referrer, setReferrer] = useState("96261c3***288c");

    return (
        <SafeAreaView className="flex-1 bg-violet-100">
            <TouchableOpacity onPress={() => navigation.goBack()} className="mt-16 ml-6">
                <Ionicons name="arrow-back" size={28} color="black" />
            </TouchableOpacity>
            {/* Profile Image */}
            <View className="items-end mr-6">
                <View className="relative">
                    <Image
                        source={require("../assets/images/martina.jpg")}
                        className="w-20 h-20 rounded-full border-2 border-white"
                    />
                    <TouchableOpacity className="absolute bottom-0 right-0  bg-white rounded-full p-1 shadow">
                        <Ionicons name="camera" size={20} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            {/* Header */}
            <View className="px-4 pb-4 flex-row items-center bg-violet-100">

                <View className="ml-4">
                    <Text className="text-xl font-bold text-gray-900">My profile</Text>
                    <Text className="text-sm font-semibold text-gray-500">Add your information</Text>
                </View>
            </View>



            {/* Scrollable Form */}
            <ScrollView
                className="flex-1 bg-white rounded-t-3xl px-6 pt-6"
                contentContainerStyle={{ paddingBottom: 30 }}
                showsVerticalScrollIndicator={false}
            >
                {/* Name */}
                <TouchableOpacity className="flex-row justify-between items-center bg-white-100 rounded-xl px-5 py-5 border border-violet-100 mb-4">
                    <View className="flex-row items-center space-x-1 mb-4">
                        <Text className="font-semibold text-base text-gray-900">Name</Text>
                    </View>
                    <TextInput
                        className="font-semibold text-base text-gray-600"
                        value={name}
                        onChangeText={setName}
                        placeholder="Enter your name"
                    />
                </TouchableOpacity>

                {/* Email */}
                <TouchableOpacity className="flex-row justify-between items-center bg-white-100 rounded-xl px-5 py-5 border border-violet-100 mb-4">
                    <View className="flex-row items-center space-x-6 mb-3">
                        <Text className="font-semibold text-base text-gray-900">Email</Text>
                    </View>
                    <TextInput
                        className="text-sm text-gray-500"
                        value={email}
                        onChangeText={setEmail}
                        placeholder="Enter your email"
                        keyboardType="email-address"
                    />
                </TouchableOpacity>

                {/* Mobile */}
                <TouchableOpacity className="flex-row justify-between items-center bg-white-100 rounded-xl px-5 py-5 border border-violet-100 mb-4">
                    <View className="flex-row items-center space-x-2 mb-3">
                        <Text className="font-semibold text-base text-gray-900">Mobile</Text>
                    </View>
                    <TextInput
                        className="text-sm text-gray-500"
                        value={mobile}
                        onChangeText={setMobile}
                        placeholder="Enter your mobile number"
                        keyboardType="phone-pad"
                    />
                </TouchableOpacity>

                {/* Gender */}
                <TouchableOpacity className="flex-row justify-between items-center bg-white-100 rounded-xl px-5 py-5 border border-violet-100 mb-4">
                    <View className="flex-row items-center space-x-2 mb-3">
                        <Text className="font-semibold text-base text-gray-900">Gender</Text>
                    </View>
                    <TextInput
                        className="text-sm text-gray-500"
                        value={gender}
                        onChangeText={setGender}
                        placeholder="Enter your gender"
                    />
                </TouchableOpacity>

                {/* Height */}
                <TouchableOpacity className="flex-row justify-between items-center bg-white-100 rounded-xl px-5 py-5 border border-violet-100 mb-4">
                    <View className="flex-row items-center space-x-2 mb-3">
                        <Text className="font-semibold text-base text-gray-900">Height</Text>
                    </View>
                    <TextInput
                        className="text-sm text-gray-500"
                        value={height}
                        onChangeText={setHeight}
                        placeholder="Enter your height"
                    />
                </TouchableOpacity>

                {/* Year of Birth */}
                <TouchableOpacity className="flex-row justify-between items-center bg-white-100 rounded-xl px-5 py-5 border border-violet-100 mb-4">
                    <View className="flex-row items-center space-x-2 mb-3">
                        <Text className="font-semibold text-base text-gray-900">Year of birth</Text>
                    </View>
                    <TextInput
                        className="text-sm text-gray-500"
                        value={birthYear}
                        onChangeText={setBirthYear}
                        placeholder="Enter year of birth"
                        keyboardType="numeric"
                    />
                </TouchableOpacity>

                {/* Referrer */}
                <TouchableOpacity className="flex-row justify-between items-center bg-white-100 rounded-xl px-5 py-5 border border-violet-100 mb-4">
                    <View className="flex-row items-center space-x-2 mb-3">
                        <Text className="font-semibold text-base text-gray-900">Referrer</Text>
                    </View>
                    <TextInput
                        className="text-sm text-gray-500"
                        value={referrer}
                        onChangeText={setReferrer}
                        placeholder="Enter referrer code"
                    />
                </TouchableOpacity>

            </ScrollView>
        </SafeAreaView>
    );
};

export default MyProfileScreen;
