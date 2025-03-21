import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import "nativewind";
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
        <View className="flex-1 bg-[#BEE3E0] px-5 pt-10">
            {/* Back Button */}
            <TouchableOpacity onPress={() => navigation.goBack()} className="absolute top-12 left-5">
                <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>

            {/* Question */}
            <Text className="text-2xl font-bold text-center mb-3 mt-16 py-2 px-2">
                What type(s) of diabetes medication do you take?
            </Text>
            <Text className="text-md text-gray-700 text-center mb-6 px-3">
                Select all that apply so DiabetifyMe can provide relevant insights and reminders.
            </Text>

            {/* Options List */}
            <FlatList
                data={options}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        className={`flex-row flex-1 bg-white p-4 rounded-3xl mb-5 w-full h-16 self-center shadow-md justify-between items-center border border-gray-300 ${selectedOptions.includes(item) ? "border-2 border-[#007AFF]" : ""
                            }`}
                        onPress={() => toggleSelection(item)}
                    >
                        <Text className="text-lg">{item}</Text>
                        <View
                            className={`w-5 h-5 rounded-full border-2 ${selectedOptions.includes(item) ? "border-[#007AFF] bg-[#007AFF]" : "border-gray-500"
                                }`}
                        />
                    </TouchableOpacity>
                )}
                ListFooterComponent={
                    <TouchableOpacity
                        className={`mt-5 py-3 rounded-3xl self-end w-36 border border-gray-300 ${selectedOptions.length ? 'bg-[#007AFF]' : 'bg-white'}`}
                        onPress={() => navigation.navigate("Next")}
                        disabled={selectedOptions.length === 0}
                    >
                        <Text className="text-lg font-bold text-center">Next</Text>
                    </TouchableOpacity>
                }
            />

        </View>
    );
};

export default QuestionThree;
