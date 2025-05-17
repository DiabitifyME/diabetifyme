import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const AccountDataScreen = () => {
    const navigation = useNavigation();

    return (
        <View className="flex-1 bg-white">
            {/* Header */}
            <View className="bg-[#E9E4FF] px-4 py-20 rounded-b-3xl relative">
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{ position: "absolute", top: 58, left: 16 }}
                >
                    <Ionicons name="arrow-back" size={28} color="black" />
                </TouchableOpacity>
                <View className="ml-4 mt-4">
                    <Text className="text-lg font-bold text-gray-600 mt-8 -bottom-2">Account & Data</Text>
                    <Text className="text-xs text-gray-600 mt-2 -bottom-2">
                        You remain in full control of your data.{"\n"}Our role is simply to protect it.
                    </Text>
                </View>
                <MaterialIcons
                    name="account-circle"
                    size={35}
                    color="black"
                    style={{ position: "absolute", top: 72, right: 16 }}
                />
            </View>

            {/* Main Content */}
            <ScrollView className="flex-1 bg-white rounded-t-3xl mt-1 px-6 pt-14">
                <View className="space-y-4">
                    {/* Export My Data */}
                    <TouchableOpacity className="flex-row justify-between items-center bg-white-100 rounded-xl px-5 py-10 border border-violet-100 mb-6">
                        <View>
                            <Text className="font-semibold text-base text-gray-900 bottom-6">Export my data</Text>
                            <Text className="text-xs text-gray-600 bottom-2 ">
                                All data will be sent to your{'\n'}personal email.
                            </Text>
                        </View>
                        <Ionicons name="chevron-forward" size={24} color="black" />
                    </TouchableOpacity>

                    {/* Export My Data */}
                    <TouchableOpacity className="flex-row justify-between items-center bg-white-100 rounded-xl px-5 py-10 border border-violet-100 mb-6">
                        <View>
                            <Text className="font-semibold text-base text-gray-900 bottom-6">Delete my account</Text>
                            <Text className="text-xs text-gray-600 bottom-2 ">
                                All your data will be deleted forever
                            </Text>
                        </View>
                        <Ionicons name="chevron-forward" size={24} color="black" />
                    </TouchableOpacity>


                </View>
            </ScrollView>
        </View>
    );
};

export default AccountDataScreen;