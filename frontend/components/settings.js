import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const SettingsScreen = () => {
    const navigation = useNavigation();

    return (
        <View className="flex-1 bg-violet-100">
            {/* Header */}
            <View className="bg-violet-100 rounded-2xl px-6 pt-16 py-6 flex-row items-center justify-between mb-8">
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={28} color="black" />
                </TouchableOpacity>
                <View className="flex-1 ml-4">
                    <Text className="text-xl font-bold text-gray-900 -bottom-20 -ml-7">Settings</Text>
                </View>
            </View>

            {/* Main Content */}
            <ScrollView className="flex-1 bg-white rounded-t-3xl mt-16 px-6 pt-16 pb-10">
                <View className="space-y-4">
                    {/* Country */}
                    <TouchableOpacity className="flex-row justify-between items-center bg-white-100 rounded-xl px-5 py-5 border border-violet-100 mb-4">
                        <View className="flex-row items-center space-x-3">
                            <FontAwesome name="globe" size={24} color="black" />
                            <Text className="font-semibold text-base text-gray-900 ml-2">Country</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={24} color="black" />
                    </TouchableOpacity>

                    {/* Language */}
                    <TouchableOpacity className="flex-row justify-between items-center bg-white-100 rounded-xl px-5 py-5 border border-violet-100 mb-4">
                        <View className="flex-row items-center space-x-3">
                            <Ionicons name="language" size={24} color="black" />
                            <Text className="font-semibold text-base text-gray-900 ml-2">Language</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={24} color="black" />
                    </TouchableOpacity>

                    {/* Notifications */}
                    <TouchableOpacity className="flex-row justify-between items-center bg-white-100 rounded-xl px-5 py-5 border border-violet-100 mb-4"
                        onPress={() => navigation.navigate("notification")} // Navigate to Notifications
                    >
                        <View className="flex-row items-center space-x-3">
                            <Ionicons name="notifications-outline" size={24} color="black" />
                            <Text className="font-semibold text-base text-gray-900 ml-2">Notifications</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={24} color="black" />
                    </TouchableOpacity>

                    {/* Account Data */}
                    <TouchableOpacity className="flex-row justify-between items-center bg-white-100 rounded-xl px-5 py-5 border border-violet-100 mb-4"
                        onPress={() => navigation.navigate("accountdata")} // Navigate to Account Data
                    >
                        <View className="flex-row items-center space-x-3">
                            <MaterialIcons name="account-circle" size={24} color="black" />
                            <Text className="font-semibold text-base text-gray-900 ml-2">Account data</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={24} color="black" />
                    </TouchableOpacity>

                    {/* Terms and Policies */}
                    <TouchableOpacity className="flex-row justify-between items-center bg-white-100 rounded-xl px-5 py-5 border border-violet-100 mb-4">
                        <View className="flex-row items-center space-x-3">
                            <Ionicons name="document-text-outline" size={24} color="black" />
                            <Text className="font-semibold text-base text-gray-900 ml-2">Terms and policies</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={24} color="black" />
                    </TouchableOpacity>

                    {/* Logout */}
                    <TouchableOpacity className="flex-row justify-between items-center bg-white-100 rounded-xl px-5 py-5 border border-violet-100 mb-4">
                        <View className="flex-row items-center space-x-3">
                            <Ionicons name="log-out-outline" size={24} color="red" />
                            <Text className="font-semibold text-base text-red-500 ml-2">Logout</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

export default SettingsScreen;