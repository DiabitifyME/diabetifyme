import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import "nativewind";
import { LinearGradient } from 'expo-linear-gradient';
import HomePage from "./home";
import "../global.css";

const QuestionThree = () => {
    const navigation = useNavigation();
    const [selectedOptions, setSelectedOptions] = useState([]);

    const options = [
        "Manual injection",
        "Insulin pump",
        "Oral/other medications",
        "I don't take diabetes medications",
    ];

    const toggleSelection = (option) => {
        if (selectedOptions.includes(option)) {
            setSelectedOptions(selectedOptions.filter((item) => item !== option));
        } else {
            setSelectedOptions([...selectedOptions, option]);
        }
    };

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
                            What type(s) of diabetes medication do you take?
                        </Text>
                        <Text className="text-sm text-gray-600 text-center mt-2 mb-16">
                            Select all that apply so DiabetifyMe can provide relevant insights and reminders.
                        </Text>
                    </View>

                    <TouchableOpacity onPress={() => navigation.goBack()} className="absolute top-12 left-5">
                        <AntDesign name="arrowleft" size={24} color="black" />
                    </TouchableOpacity>
                    {/* Options List */}
                    <FlatList
                        data={options}
                        keyExtractor={(item) => item}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                className={`flex-row flex-1 bg-[#FCE7F3] p-4 rounded-3xl mb-5 w-full h-20 self-center shadow-md justify-between items-center border border-gray-300 ${selectedOptions.includes(item) ? "border-2 border-[#007AFF]" : ""
                                    }`}
                                onPress={() => toggleSelection(item)}
                            >
                                <Text className="text-lg">{item}</Text>
                                <View
                                    className={`w-5 h-5 rounded-full border-2 ${selectedOptions.includes(item) ? "border-gray-500 bg-[#C98AAF]" : "border-gray-500"
                                        }`}
                                />
                            </TouchableOpacity>
                        )}
                        ListFooterComponent={
                            <TouchableOpacity
                                className={`mt-5 py-3 rounded-3xl self-end w-36 border border-gray-300 ${selectedOptions.length ? 'bg-[#E8E6FF]' : 'bg-white'}`}
                                onPress={() => navigation.navigate("home")}
                                disabled={selectedOptions.length === 0}
                            >
                                <Text className="text-lg font-bold text-center">Next</Text>
                            </TouchableOpacity>
                        }
                    />
                </View>
            </View>



        </View>

    );
};

export default QuestionThree;
