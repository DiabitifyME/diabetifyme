import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { Ionicons, Feather, AntDesign, Entypo, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CareConnectScreen = () => {
    const navigation = useNavigation();

    return (
        <View className="flex-1 bg-violet-100">
            {/* Header */}
            <View className="bg-violet-100 rounded-2xl px-6 pt-16 py-6 flex-row items-center justify-between mb-8">
                <TouchableOpacity onPress={() => navigation.goBack() || navigation.navigate("profilepage")}>
                    <Ionicons name="arrow-back" size={28} color="black" />
                </TouchableOpacity>
                <View className="flex-1 -ml-7 -bottom-20">
                    <Text className="text-lg font-semibold text-gray-900">Care connect</Text>
                    <Text className="text-sm text-gray-500">Add a new supporter</Text>
                </View>
                {/* Care Connect Icon */}
                <TouchableOpacity
                    style={{
                        position: "absolute",
                        top: 70,
                        right: 19,
                    }}
                >
                    <FontAwesome name="users" size={28} color="black" />
                </TouchableOpacity>

            </View>

            {/* Main Content */}
            <ScrollView className="flex-1 bg-white rounded-t-3xl mt-16 px-6 pt-16 pb-10">
                <View className="space-y-4">
                    {/* Add other content here */}
                </View>
            </ScrollView>

            {/* Black Button at the Bottom */}
            <View className="bg-white px-6 py-5">
                <TouchableOpacity
                    className="bg-black rounded-xl py-5 justify-center items-center"
                >
                    <Text className="font-semibold text-base text-white">Add another supporter</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CareConnectScreen;