import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function SubscribeScreen({ navigation }) {
    const plans = [
        { label: '1 Week - EGP77.99/week', value: 'weekly' },
        { label: '1 Month - EGP159.99/month', value: 'monthly' },
        { label: '1 Year - EGP1799.99/year', value: 'yearly' },
    ];

    const [selectedPlan, setSelectedPlan] = useState(null);

    return (
        <View className="flex-1 bg-white">
            {/* Top Gradient Header */}
            <LinearGradient
                colors={['#DBEAFE', '#C2CCD9', '#F7F1D7', '#E4E3D8', '#DBEAFE', '#FFF3CD']}
                start={{ x: 0.1, y: 0.2 }}
                end={{ x: 1, y: 1 }}
                className="rounded-t-2xl px-5 pb-4 items-center"
            >
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    className="absolute top-20 left-5"
                >
                    <Ionicons name="close" size={28} color="black" />
                </TouchableOpacity>
                <Text className="text-center text-xl font-bold mt-56 bottom-20">
                    Fuel Your Day Right —{"\n"} Premium Exercises Await You!
                </Text>
            </LinearGradient>

            <View className="space-y-8 mt-20">
                {plans.map((plan, index) => {
                    const isSelected = selectedPlan === plan.value;
                    return (
                        <TouchableOpacity
                            key={plan.value}
                            className={`flex-row justify-between items-center rounded-xl px-12 py-6 border mb-12 self-center ${isSelected ? 'border-blue-400 bg-[#F7F1D7]' : 'border-blue-100 bg-white'
                                }`}
                            style={{ width: '80%' }}
                            onPress={() => setSelectedPlan(plan.value)}
                            activeOpacity={0.8}
                        >
                            <View className="flex-row items-center">
                                <View
                                    className={`w-6 h-6 rounded-full border-2 mr-4 flex items-center justify-center ${isSelected ? 'border-blue-700' : 'border-blue-300'
                                        }`}
                                >
                                    {isSelected && (
                                        <View className="w-3 h-3 rounded-full bg-[#FFF3CD]" />
                                    )}
                                </View>
                                <Text className={`font-semibold text-base ${isSelected ? 'text-gray-700' : 'text-gray-600'}`}>
                                    {plan.label}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    );
                })}
            </View>

            <TouchableOpacity
                className="flex-row justify-center items-center bg-[#FFF3CD] rounded-xl px-24 py-6 mb-12 self-center"
                style={{ width: '80%' }}
                onPress={() => {
                    if (selectedPlan) {
                        navigation.navigate('paymentMethod', { plan: selectedPlan });
                    } else {
                        alert('Please select a subscription plan.');
                    }
                }}
            >
                <Text className="font-semibold text-xl text-gray-900 text-center">continue</Text>
            </TouchableOpacity>
        </View>
    );
}
