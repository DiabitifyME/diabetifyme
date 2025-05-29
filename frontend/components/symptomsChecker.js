import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import Animated, { BounceIn } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';

const symptomsList = [
    'Blurred vision',
    'Hearing loss',
    'Dry eyes',
    'Excessive thirst',
    'Feeling weak',
];

const symptomDetails = {
    'Blurred vision': 'Blurred vision is the inability to see objects clearly, making them appear hazy or out of focus. \n\nIt can occur in one or both eyes and may result from refractive errors, eye strain, or conditions like cataracts or diabetes.\n\nSudden or worsening blurred vision should be assessed by an eye specialist.',
    'Hearing loss': 'Hearing loss can be related to nerve damage caused by long-term diabetes.',
    'Dry eyes': 'Dry eyes might signal poor hydration or issues with tear glands affected by diabetes.',
    'Excessive thirst': 'Frequent thirst is a classic symptom of uncontrolled diabetes.',
    'Feeling weak': 'Weakness can be due to fluctuating blood glucose levels or lack of insulin response.',
};

const relatedSymptoms = {
    'Blurred vision': ['Dehydration', 'Eye pain', 'Dry skin', 'Hair loss'],
    'Hearing loss': ['Ear pain', 'Tinnitus'],
    'Dry eyes': ['Dry skin', 'Itching'],
    'Excessive thirst': ['Dehydration', 'Frequent urination'],
    'Feeling weak': ['Fatigue', 'Dizziness'],
};

export default function SymptomChecker({ navigation }) {
    const [search, setSearch] = useState('');
    const [selectedSymptom, setSelectedSymptom] = useState(null);

    const filteredSymptoms = symptomsList.filter(symptom =>
        symptom.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <SafeAreaView className="flex-1 bg-white px-4">
            <ScrollView
                className="flex-1"
                contentContainerStyle={{ paddingBottom: 40 }}
                showsVerticalScrollIndicator={false}
            >
                {/* Header */}
                <View className="flex-row items-start justify-between mb-3 mt-4">
                    <TouchableOpacity
                        onPress={() => navigation.navigate("home")}
                        style={{ width: 32, height: 32, justifyContent: 'center', alignItems: 'center' }}
                    >
                        <AntDesign name="arrowleft" size={24} color="#232323" />
                    </TouchableOpacity>
                    <Text className="text-2xl font-bold text-gray-600 mt-12 flex-1 -ml-8">
                        Symptom Checker
                    </Text>
                    <View className="w-12 h-12 rounded-full bg-yellow-100 items-center justify-center overflow-hidden mt-10">
                        <TouchableOpacity onPress={() => navigation.navigate("profilepage")}>
                            <Image
                                source={require("../assets/images/martina.jpg")}
                                className="w-12 h-12 rounded-full"
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Search Bar */}
                <TextInput
                    className="border border-gray-300 rounded-2xl h-12 px-4 py-2 mb-3 bg-gray-50"
                    placeholder="e.g. headache, abdominal pain"
                    value={search}
                    onChangeText={setSearch}
                />

                {/* Symptom Card Container */}
                <View className="bg-[#E8E6FF] p-4 rounded-2xl mb-8 relative" style={{ minHeight: 360 }}>
                    <ScrollView
                        className="space-y-3"
                        nestedScrollEnabled
                        showsVerticalScrollIndicator={false}
                        style={{ maxHeight: 300 }}
                    >
                        {filteredSymptoms.map(symptom => {
                            const isSelected = selectedSymptom === symptom;
                            return (
                                <TouchableOpacity
                                    key={symptom}
                                    onPress={() => setSelectedSymptom(symptom)}
                                    className={`flex-row justify-between items-center px-4 py-3 rounded-xl mt-4 h-20 ${isSelected ? 'bg-white' : 'bg-gray-100'
                                        }`}
                                >
                                    <Text className="font-semibold text-gray-600">{symptom}</Text>
                                    <View className="w-5 h-5 rounded-full border-2 border-gray-400 items-center justify-center">
                                        {isSelected && <View className="w-2.5 h-2.5 rounded-full bg-gray-600" />}
                                    </View>
                                </TouchableOpacity>
                            );
                        })}
                    </ScrollView>

                    {/* Save Button half out */}
                    <TouchableOpacity
                        className="bg-[#FCE7F3] rounded-xl w-56 py-3 items-center ml-20 justify-center absolute -bottom-6"
                    >
                        <Text className="text-gray-700 text-xl font-bold">Save</Text>
                    </TouchableOpacity>
                </View>

                {/* Selected Symptom Details */}
                {selectedSymptom && (
                    <View className="bg-violet-100 rounded-xl p-4 mb-4">
                        <Text className="text-lg font-semibold mb-2">{selectedSymptom}</Text>
                        <Text className="text-gray-700">{symptomDetails[selectedSymptom]}</Text>
                    </View>
                )}

                {/* Related Symptoms */}
                {selectedSymptom && relatedSymptoms[selectedSymptom] && (
                    <View className="bg-[#FCE7F3] rounded-xl p-4">
                        <Text className="text-lg font-semibold mb-2">Related symptoms</Text>
                        <View className="flex-row flex-wrap gap-2">
                            {relatedSymptoms[selectedSymptom].map((symptom, index) => (
                                <TouchableOpacity>
                                    <Text
                                        key={index}
                                        className="bg-white px-3 py-1 rounded-full text-gray-800 border border-pink-300 text-sm"
                                    >
                                        {symptom}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                )}
            </ScrollView>

            <View className="bg-white p-2 mt-4 mx-4 mb-3 rounded-3xl flex-row justify-around items-center ">
                {/* Home Icon */}
                <TouchableOpacity className="items-center justify-center" onPress={() => navigation.navigate("home")}
                >
                    <View className="p-2 rounded-full bg-white-100">
                        <Ionicons name="home-outline" size={28} color="black" />
                    </View>
                </TouchableOpacity>

                {/* Notifications Icon */}
                <TouchableOpacity className="items-center justify-center" onPress={() => navigation.navigate("notifications")}>
                    <View className="p-3 rounded-full bg-white-100">
                        <Ionicons name="notifications-outline" size={28} color="black" />
                    </View>
                </TouchableOpacity>

                {/* Chat Icon (replacing QR Code Icon) */}
                <Animated.View entering={BounceIn.duration(500)}>
                    <TouchableOpacity className="items-center justify-center">
                        <LinearGradient
                            colors={['#D4D2E5', '#B8C6CC', '#E7DBF7', '#E6F7FF', '#E7E9FB']}
                            locations={[0.09, 0.20, 0.51, 0.77, 0.90]}
                            className="p-2 rounded-full"
                            style={{ width: 50, height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 28 }}
                        >
                            <Ionicons name="chatbubble-ellipses-sharp" size={28} color="white" />

                        </LinearGradient>
                    </TouchableOpacity>
                </Animated.View>

            </View>
        </SafeAreaView>
    );
}
