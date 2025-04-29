import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";
import "nativewind";
import "../global.css";
import { ScrollView } from "react-native-gesture-handler";

const QuestionOne = () => {
    const navigation = useNavigation();
    const [selectedType, setSelectedType] = useState(null);

    const diabetesTypes = [
        {
            id: "type1",
            title: "Type-1 diabetes",
            description: "Your body attacks insulin-producing cells, leading to little or no insulin.",
        },
        {
            id: "type2",
            title: "Type-2 diabetes",
            description: "Your body resists insulin or doesn’t produce enough of it.",
        },
        {
            id: "prediabetes",
            title: "Prediabetes",
            description: "Blood sugar levels are elevated but not high enough to be considered diabetic.",
        },
    ];

    return (
        <View className="flex-1 bg-white">
            {/* Gradient Header */}
            <LinearGradient
                colors={['#ffffff', '#f8e5ff']}
                className="h-40 w-full absolute top-0 rounded-b-3xl"
            />

            <View className="flex-1" contentContainerStyle={{ flexGrow: 1 }}>
                <View className="flex-1 pt-16 px-6 pb-8">
                    <View className="relative">

                        <Text className="text-2xl font-bold mt-6 mb-24 text-gray-800 text-center">
                            What is your type of diabetes?
                        </Text>
                    </View>
                    {diabetesTypes.map((item) => (
                        <TouchableOpacity
                            key={item.id}
                            className={`flex-row items-center bg-[#FCE7F3] p-4 rounded-lg mb-6 h-32 shadow-md justify-between ${selectedType === item.id ? 'border-2 border-[#E8E6FF]' : ''}`}
                            onPress={() => setSelectedType(item.id)}
                        >
                            <View className="flex-1">
                                <Text className="text-lg font-bold">{item.title}</Text>
                                <Text className="text-sm text-gray-600 mr-4">{item.description}</Text>
                            </View>
                            <AntDesign
                                name={selectedType === item.id ? "checkcircle" : "checkcircleo"}
                                size={24}
                                color={selectedType === item.id ? "black" : "#888"}
                            />
                        </TouchableOpacity>
                    ))}

                    <TouchableOpacity
                        className={`mt-3 w-32 py-3 rounded-xl self-end border border-gray-400  items-center ${selectedType ? 'bg-[#E8E6FF]' : 'bg-white'}`}
                        onPress={() => navigation.navigate("questionTwo")}
                        disabled={!selectedType}
                    >
                        <Text className="text-lg font-bold text-gray-500">Next</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>



    );
};

export default QuestionOne;
