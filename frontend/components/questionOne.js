import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import "nativewind";
import "../global.css";

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
        <View className="flex-1 justify-center bg-[#BEE3E0] px-5">
            <Text className="text-2xl font-bold text-center mb-5">What is your type of diabetes?</Text>

            <View className="bg-white p-4 rounded-xl h-9/10 w-full">
                {diabetesTypes.map((item) => (
                    <TouchableOpacity
                        key={item.id}
                        className={`flex-row items-center bg-white border border-gray-500 p-4 rounded-lg mb-8 shadow-md justify-between ${selectedType === item.id ? 'border-2 border-[#007AFF]' : ''}`}
                        onPress={() => setSelectedType(item.id)}
                    >
                        <View className="flex-1">
                            <Text className="text-lg font-bold">{item.title}</Text>
                            <Text className="text-sm text-gray-600 mr-4">{item.description}</Text>
                        </View>
                        <AntDesign
                            name={selectedType === item.id ? "checkcircle" : "checkcircleo"}
                            size={24}
                            color={selectedType === item.id ? "#007AFF" : "#888"}
                        />
                    </TouchableOpacity>
                ))}

                <TouchableOpacity
                    className={`mt-3 w-32 py-3 rounded-xl self-end border border-gray-400 items-center ${selectedType ? 'bg-[#BEE3E0]' : 'bg-white'}`}
                    onPress={() => navigation.navigate("questionTwo")}
                    disabled={!selectedType}
                >
                    <Text className="text-lg font-bold text-gray-500">Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default QuestionOne;
