import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const lunchItems = [
    {
        name: 'Chickpea wrap',
        details: '157g • 262 kcal\n6g total fat • 31g carbs • 11g protein',
        image: require('../assets/images/chicken wrap.jpg'),
    },
    {
        name: 'Sweet potato mash',
        details: '116g • 154 kcal\n6g total fat • 24g carbs • 1g protein',
        image: require('../assets/images/mashed sweet potato.jpg'),
    },
    {
        name: 'Mixed bean salad',
        details: '185g • 139 kcal\n6g total fat • 15g carbs • 6g protein',
        image: require('../assets/images/mixed beans.jpg'),
    },
    {
        name: 'Lentil soup',
        details: '193g • 178 kcal\n4g total fat • 24g carbs • 10g protein',
        image: require('../assets/images/lentil soup.jpg'),
    },
];

const LunchScreen = ({ navigation }) => {
    const handleSuggestNewDish = () => {
        console.log('Suggest a new dish clicked');
        // Add your actual logic here
    };

    return (
        <ScrollView className="flex-1 bg-[#FFF3CD] pt-12">

            {/* Back Button */}
            <TouchableOpacity
                className="absolute top-4 left-4 z-10"
                onPress={() => navigation.goBack()}
            >
                <Ionicons name="chevron-back" size={28} color="black" />
            </TouchableOpacity>

            {/* Title */}
            <View className="px-6">
                <Text className="text-2xl font-bold text-gray-800 mt-20">Lunch</Text>
            </View>

            {/* White Card Container with Image Overlapping */}
            <View className="relative mt-6 px-4">
                {/* Card */}
                <View className="bg-white rounded-3xl px-4 pt-16 pb-3">
                    {lunchItems.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            className="bg-blue-100 rounded-xl flex-row items-center px-3 py-4 mb-4 min-h-[100px]"
                        >
                            <Image
                                source={item.image}
                                className="w-16 h-16 rounded-full mr-4"
                            />
                            <View className="flex-1">
                                <Text className="font-bold text-gray-800">{item.name}</Text>
                                <Text
                                    className="text-xs text-gray-600"
                                    numberOfLines={2} // keeps card heights consistent
                                    ellipsizeMode="tail"
                                >
                                    {item.details}
                                </Text>
                            </View>
                            <Ionicons name="chevron-forward" size={20} color="gray" />
                        </TouchableOpacity>

                    ))}

                    {/* Suggest new dish with refresh icon */}
                    <TouchableOpacity
                        className="flex-row justify-center items-center mt-4 mb-4"
                        onPress={handleSuggestNewDish}
                    >
                        <Text className="text-center text-gray-700 font-medium mr-2">
                            Suggest a new dish
                        </Text>
                        <Ionicons name="refresh" size={18} color="#444" />
                    </TouchableOpacity>

                </View>

                {/* Overlapping Image */}
                <Image
                    source={require('../assets/images/lunch.jpg')}
                    className="w-32 h-32 rounded-full absolute -top-20 right-4 "
                />
            </View>

            {/* Free Trial Section */}
            <Text className="text-lg font-bold text-gray-700 text-center mt-12 mb-14">
                Enjoy a 7-day FREE trial
            </Text>
        </ScrollView>
    );
};

export default LunchScreen;