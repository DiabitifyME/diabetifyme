// PlanSelectionScreen.js
import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";


const availablePlans = [
    { name: "Nutrition Program", emoji: "🥕" },
    { name: "Exercise Program", emoji: "🔥" },
];

const PlanSelectionScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const currentPlans = route.params?.currentPlans || [];

    const [selected, setSelected] = useState([]);

    const togglePlan = (plan) => {
        setSelected((prev) =>
            prev.find((p) => p.name === plan.name)
                ? prev.filter((p) => p.name !== plan.name)
                : [...prev, plan]
        );
    };

    const handleSubscribe = () => {
        if (selected.length === 1) {
            const planName = selected[0].name;
            if (planName === "Nutrition Program") {
                navigation.navigate("nutritionprogram");
            } else if (planName === "Exercise Program") {
                navigation.navigate("exercisePrograms");
            }
        } else if (selected.length > 1) {
            const updatedPlans = [...currentPlans, ...selected];
            navigation.navigate("MyPlan", { plans: updatedPlans });
        } else {
            alert("Please select at least one plan.");
        }
    };


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
            <Text className="text-xl font-bold mb-6 ml-6">Choose a Plan</Text>
            <View className="flex-1 bg-white px-4 pt-10">
                <ScrollView>
                    {availablePlans.map((plan, index) => (
                        <TouchableOpacity
                            key={index}
                            className={`flex-row justify-between items-center border px-5 py-4 rounded-xl mb-3 ${selected.find((p) => p.name === plan.name)
                                ? "border-violet-500 bg-violet-50"
                                : "border-gray-300"
                                }`}
                            onPress={() => togglePlan(plan)}
                        >
                            <Text>{plan.emoji} {plan.name}</Text>
                            <Text className="text-sm text-violet-500">
                                {selected.find((p) => p.name === plan.name) ? "Selected" : "Subscribe"}
                            </Text>
                        </TouchableOpacity>
                    ))}
                    <TouchableOpacity
                        className="bg-violet-500 mt-10 py-3 rounded-xl"
                        onPress={handleSubscribe}
                    >
                        <Text className="text-center text-white font-bold">Confirm Subscription</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default PlanSelectionScreen;
