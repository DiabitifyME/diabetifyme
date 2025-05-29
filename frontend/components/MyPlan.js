// MyPlanScreen.js
import React from "react";
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';


const MyPlanScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();

    // Received plans from PlanSelection screen
    const subscribedPlans = route.params?.plans || [];

    return (
        <SafeAreaView className="flex-1 bg-violet-100">
            <View className="bg-violet-100 px-4 pt-14 pb-6 rounded-b-3xl flex-row justify-between items-center">
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={28} color="black" />
                </TouchableOpacity>
                <Image
                    source={require("../assets/images/checklist.png")}
                    className="w-12 h-12 rounded-full"
                />
            </View>
            <View className="flex-1 bg-white">


                {/* Header */}
                <View className="px-4 pb-4 flex-row items-center bg-violet-100">
                    <View className="ml-4">
                        <Text className="text-xl font-bold text-gray-900">My plan</Text>
                    </View>
                </View>
                <ScrollView className="px-4">
                    {subscribedPlans.length === 0 ? (
                        <Text className="text-center text-gray-400 mt-16">No plans subscribed yet.</Text>
                    ) : (
                        subscribedPlans.map((plan, index) => (
                            <View
                                key={index}
                                className="flex-row justify-between items-center bg-white border border-gray-200 px-4 py-3 rounded-xl mb-3 py-2 mt-4 shadow-sm"
                            >
                                <Text className="text-base">{plan.emoji} {plan.name}</Text>
                            </View>
                        ))
                    )}
                    <TouchableOpacity
                        className="bg-violet-500 mt-10 py-3 rounded-xl"
                        onPress={() => navigation.navigate("PlanSelection", { currentPlans: subscribedPlans })}
                    >
                        <Text className="text-center text-white font-bold">Subscribe to New Plan</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default MyPlanScreen;
