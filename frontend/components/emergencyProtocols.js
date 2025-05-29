import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView, Image } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, { BounceIn } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';

const protocols = [
    {
        title: 'Hyperglycemia',
        description: 'Occurs when blood sugar levels get too high.',
        color: 'bg-blue-100',
        details: 'Caused by eating too much, missing insulin, or stress. Symptoms include thirst, frequent urination, and fatigue.',
    },
    {
        title: 'Hypoglycemia',
        description: 'A sudden drop in blood sugar levels.',
        color: 'bg-pink-100',
        details: 'Can result from too much insulin or missed meals. Symptoms: shaking, sweating, dizziness, confusion.',
    },
    {
        title: 'Low tension',
        description: 'Occurs when blood pressure falls below normal.',
        color: 'bg-yellow-100',
        details: 'Causes: dehydration, heart issues. Signs: fainting, blurred vision, fatigue.',
    },
    {
        title: 'High tension',
        description: 'Occurs when the force of blood against the artery walls is too high.',
        color: 'bg-purple-100',
        details: 'Often symptomless. Risks: stroke, heart disease. Treated with diet, exercise, medication.',
    },
    {
        title: 'Neuropathy',
        description: 'A nerve disorder caused by nerve damage.',
        color: 'bg-indigo-100',
        details: 'Leads to tingling, numbness, pain in extremities. Requires glucose control and medication.',
    },
    {
        title: 'Diabetic Ketoacidosis',
        description: 'A serious diabetes complication.',
        color: 'bg-red-100',
        details: 'Develops when body produces high levels of ketones. Signs: fruity breath, nausea, confusion.',
    },
    {
        title: 'Hyperosmolar Hyperglycemic State (HHS)',
        description: 'Severe high blood sugar without ketones.',
        color: 'bg-orange-100',
        details: 'More common in type 2 diabetes. Symptoms: extreme thirst, confusion, coma. Needs IV fluids and insulin urgently.',
    },
    {
        title: 'Lactic Acidosis',
        description: 'Build-up of lactic acid in the body.',
        color: 'bg-rose-100',
        details: 'Can occur with metformin in kidney issues. Symptoms: deep breathing, fatigue, confusion. Requires emergency care.',
    },
    {
        title: 'Infection or Sepsis',
        description: 'Common in diabetic wounds or urinary tract.',
        color: 'bg-green-100',
        details: 'Symptoms: fever, high heart rate, confusion. Needs antibiotics, possibly hospitalization.',
    },
    {
        title: 'Retinopathy Emergency',
        description: 'Sudden vision loss or bleeding in the eye.',
        color: 'bg-cyan-100',
        details: 'Requires urgent ophthalmologist referral. Good sugar control helps prevent it.',
    },
    {
        title: 'Foot Ulcer or Gangrene',
        description: 'Dangerous diabetic foot condition.',
        color: 'bg-lime-100',
        details: 'Needs urgent wound care. Avoid walking on affected foot. Can lead to amputation if untreated.',
    },
];

export default function EmergencyProtocols({ navigation }) {
    const [selectedProtocol, setSelectedProtocol] = useState(null);

    return (
        <SafeAreaView className="flex-1 bg-white px-4 pt-4">
            {/* Header */}
            <View className="flex-row items-center mb-4">
                <TouchableOpacity onPress={() => navigation.navigate("home")}>
                    <Ionicons name="arrow-back" size={28} color="black" />
                </TouchableOpacity>

            </View>
            <Text className="text-3xl text-center font-bold text-gray-600">Emergency Protocols</Text>

            {/* Illustration */}
            <View className="items-center mb-4 mt-8">
                <Image
                    source={require('../assets/images/protocol.png')}
                    className="w-48 h-48 mb-4"
                    resizeMode="contain"
                />
            </View>

            {/* Protocol List */}
            <ScrollView showsVerticalScrollIndicator={false}>
                {protocols.map((protocol, index) => (
                    <TouchableOpacity
                        key={index}
                        className={`rounded-2xl px-4 py-3 mb-3 ${protocol.color}`}
                        onPress={() => setSelectedProtocol(protocol)}
                    >
                        <Text className="text-base font-bold text-gray-700">{protocol.title}</Text>
                        <Text className="text-sm text-gray-600">{protocol.description}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            {/* Modal Popup */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={selectedProtocol !== null}
                onRequestClose={() => setSelectedProtocol(null)}
            >
                <View className="flex-1 justify-center items-center bg-black/50  px-4">
                    <View className="bg-white rounded-2xl p-6 w-full">
                        <Text className="text-xl font-bold mb-2 text-gray-800">{selectedProtocol?.title}</Text>
                        <Text className="text-gray-700 mb-4">{selectedProtocol?.details}</Text>
                        <TouchableOpacity
                            onPress={() => setSelectedProtocol(null)}
                            className="bg-gray-200 rounded-lg py-2"
                        >
                            <Text className="text-center text-gray-800 font-semibold">Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

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
