import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Modal } from "react-native";
import { Ionicons, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const SettingsScreen = () => {
    const navigation = useNavigation();
    const [showLogoutModal, setShowLogoutModal] = useState(false);

    const handleConfirmLogout = () => {
        setShowLogoutModal(false);
        console.log("User logged out.");
        // Add your actual logout logic here
    };

    return (
        <View className="flex-1 bg-violet-100">
            {/* Header */}
            <View className="bg-violet-100 rounded-b-3xl px-4 pt-12 pb-6 flex-row items-center justify-between">
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={28} color="black" />
                </TouchableOpacity>
                <Ionicons name="settings" size={24} color="black" />
            </View>

            <Text className="text-xl font-bold text-gray-900 -top-18 ml-6">Settings</Text>

            {/* Main Content */}
            <ScrollView className="flex-1 bg-white rounded-t-3xl mt-16 px-6 pt-16 pb-10">
                <View className="space-y-4">
                    {/* Country */}
                    <TouchableOpacity className="flex-row justify-between items-center rounded-xl px-5 py-5 border border-violet-100 mb-4"
                        onPress={() => navigation.navigate("Country")}>
                        <View className="flex-row items-center space-x-3">
                            <FontAwesome name="globe" size={24} color="black" />
                            <Text className="font-semibold text-base text-gray-900 ml-2">Country</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={24} color="black" />
                    </TouchableOpacity>

                    {/* Notifications */}
                    <TouchableOpacity className="flex-row justify-between items-center rounded-xl px-5 py-5 border border-violet-100 mb-4"
                        onPress={() => navigation.navigate("notification")}>
                        <View className="flex-row items-center space-x-3">
                            <Ionicons name="notifications-outline" size={24} color="black" />
                            <Text className="font-semibold text-base text-gray-900 ml-2">Notifications</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={24} color="black" />
                    </TouchableOpacity>

                    {/* Account Data */}
                    <TouchableOpacity className="flex-row justify-between items-center rounded-xl px-5 py-5 border border-violet-100 mb-4"
                        onPress={() => navigation.navigate("accountdata")}>
                        <View className="flex-row items-center space-x-3">
                            <MaterialIcons name="account-circle" size={24} color="black" />
                            <Text className="font-semibold text-base text-gray-900 ml-2">Account data</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={24} color="black" />
                    </TouchableOpacity>

                    {/* Terms */}
                    <TouchableOpacity className="flex-row justify-between items-center rounded-xl px-5 py-5 border border-violet-100 mb-4">
                        <View className="flex-row items-center space-x-3">
                            <Ionicons name="document-text-outline" size={24} color="black" />
                            <Text className="font-semibold text-base text-gray-900 ml-2">Terms and policies</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={24} color="black" />
                    </TouchableOpacity>

                    {/* Logout */}
                    <TouchableOpacity
                        onPress={() => setShowLogoutModal(true)}
                        className="flex-row justify-between items-center rounded-xl px-5 py-5 border border-violet-100 mb-4"
                    >
                        <View className="flex-row items-center space-x-3">
                            <Ionicons name="log-out-outline" size={24} color="red" />
                            <Text className="font-semibold text-base text-red-500 ml-2">Logout</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </ScrollView>

            <Modal transparent visible={showLogoutModal} animationType="fade">
                <View className="flex-1 items-center pt-12 bg-black/20 px-6">
                    {/* Shrink background height by wrapping modal in a smaller container */}
                    <View className="mt-60 mb-40 w-full bg-white rounded-3xl p-4 border border-gray-200 shadow-lg max-w-md">
                        <Text className="text-lg font-bold text-center text-gray-900 mb-1">Log out?</Text>
                        <Text className="text-sm text-center text-gray-500 mb-4">
                            You will no longer receive notifications and the fitness apps may be disconnected
                        </Text>

                        <View className="flex-row justify-center">
                            <TouchableOpacity
                                className="border border-black px-5 py-2 rounded-lg mr-3"
                                onPress={() => setShowLogoutModal(false)}
                            >
                                <Text className="text-black font-medium">No</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                className="bg-black px-5 py-2 rounded-lg"
                                onPress={handleConfirmLogout}
                            >
                                <Text className="text-white font-medium">Confirm</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

        </View>
    );
};

export default SettingsScreen;
