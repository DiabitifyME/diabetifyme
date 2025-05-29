import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function PaymentMethod({ navigation }) {
    const [selectedMethod, setSelectedMethod] = useState(null);

    const methods = [
        { label: 'Debit Card', value: 'debitCard' },
        { label: 'Credit Card', value: 'creditCard' },
    ];

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
                    Choose Payment Method
                </Text>
            </LinearGradient>

            <View className="space-y-8 mt-20">
                {methods.map((method) => {
                    const isSelected = selectedMethod === method.value;
                    return (
                        <TouchableOpacity
                            key={method.value}
                            className={`flex-row justify-start items-center rounded-xl px-16 py-6 border mb-12 self-center ${isSelected ? 'border-blue-400 bg-[#F7F1D7]' : 'border-blue-100 bg-white'
                                }`}
                            style={{ width: '80%' }}
                            onPress={() => setSelectedMethod(method.value)}
                            activeOpacity={0.8}
                        >
                            <View
                                className={`w-6 h-6 rounded-full border-2 mr-6 flex items-center justify-center ${isSelected ? 'border-blue-500' : 'border-blue-300'
                                    }`}
                            >
                                {isSelected && (
                                    <View className="w-3 h-3 rounded-full bg-[#E4E3D8]" />
                                )}
                            </View>
                            <Text
                                className={`font-semibold text-base ${isSelected ? 'text-blue-900' : 'text-gray-600'
                                    }`}
                            >
                                {method.label}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>

            <TouchableOpacity
                className={`flex-row justify-center items-center rounded-xl px-24 py-6 mb-12 self-center ${selectedMethod ? 'bg-[#FFF3CD]' : 'bg-gray-300'
                    }`}
                style={{ width: '80%' }}
                onPress={() => {
                    if (selectedMethod) {
                        navigation.navigate(selectedMethod);
                    }
                }}
                disabled={!selectedMethod}
            >
                <Text
                    className={`font-semibold text-xl text-center ${selectedMethod ? 'text-gray-900' : 'text-gray-600'
                        }`}
                >
                    Continue
                </Text>
            </TouchableOpacity>
        </View>
    );
}
