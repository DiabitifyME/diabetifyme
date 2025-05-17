import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import "nativewind";
import { LinearGradient } from 'expo-linear-gradient';
import "../global.css";

const DiabetesDiagnosisScreen = () => {
    const navigation = useNavigation();
    const [selectedOption, setSelectedOption] = useState(null);

    const options = [
        "Less than 3 months ago",
        "4-12 months ago",
        "1-10 years ago",
        "Over 10 years ago",
        "I'm not sure",
    ];

    return (
        <View className="flex-1 bg-white">
            {/* Gradient Header */}
            <LinearGradient
                colors={['#ffffff', '#f8e5ff']}
                className="h-48 w-full absolute top-0 rounded-b-3xl"
            />

            <View className="flex-1" contentContainerStyle={{ flexGrow: 1 }}>
                <View className="flex-1 pt-16 px-6 pb-8">
                    <View className="relative">

                        <Text className="text-2xl font-bold mt-2 text-gray-800 text-center">
                            How long ago were your diagnosed with diabetes?
                        </Text>
                        <Text className="text-sm text-gray-600 text-center mt-2 mb-16">
                            This helps personalize our content and recommendations.
                        </Text>
                    </View>

                    <TouchableOpacity onPress={() => navigation.goBack()} className="absolute top-12 left-5">
                        <AntDesign name="arrowleft" size={24} color="black" />
                    </TouchableOpacity>



                    {options.map((option, index) => (
                        <TouchableOpacity
                            key={index}
                            className={`flex-row items-center self-center bg-[#FCE7F3] p-5 rounded-3xl w-80 mb-4 shadow-md justify-between border border-gray-300 ${selectedOption === option ? "border-2 border-[#007AFF]" : ""
                                }`}
                            onPress={() => setSelectedOption(option)}
                        >
                            <Text className="text-lg">{option}</Text>
                            <AntDesign
                                name={selectedOption === option ? "checkcircle" : "checkcircleo"}
                                size={24}
                                color={selectedOption === option ? "#C98AAF" : "#888"}
                            />
                        </TouchableOpacity>
                    ))}

                    <TouchableOpacity
                        className="bg-[#FCE7F3] py-3 px-8 rounded-3xl w-36 shadow-md self-center border border-gray-300 mb-8 mt-3"
                        onPress={() => navigation.navigate("questionThree")}
                    >
                        <Text className="text-lg font-bold text-center">Skip</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        className={`py-3 px-8 w-36 self-end rounded-3xl border border-gray-300 ${selectedOption ? "bg-[#E8E6FF]" : "bg-white"}`}
                        onPress={() => navigation.navigate("questionThree")}
                        disabled={!selectedOption}
                    >
                        <Text className="text-lg font-bold text-center">Next</Text>
                    </TouchableOpacity>


                </View>
            </View>
        </View>
    );
};

export default DiabetesDiagnosisScreen;
