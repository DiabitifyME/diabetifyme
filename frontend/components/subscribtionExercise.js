import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, Feather, FontAwesome, AntDesign, Entypo } from '@expo/vector-icons';

export default function SubscribeScreen({ navigation }) {

    const plans = [
        { label: '1 Week - EGP77.99/week', value: 'weekly' },
        { label: '1 Month - EGP159.99/month', value: 'monthly' },
        { label: '1 Year - EGP1799.99/year', value: 'yearly' },
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
                    "Fuel Your Day Right —{"\n"} Premium Exercises Await You!"
                </Text>
            </LinearGradient>
            <View className="space-y-8">

                <TouchableOpacity className="flex-row justify-between items-center bg-white-100 rounded-xl px-16 py-6 border border-blue-100 mb-12 top-20 self-center ">
                    <View className="flex-row items-center space-x-2">
                        <View className="w-8 h-8 rounded-full bg-white full border-2 border-blue-100  absolute -left-10" />

                        <Text className="font-semibold text-base text-gray-600 ml-8 -left-6">1 Week - EGP77.99/week</Text>
                    </View>

                </TouchableOpacity>

                <TouchableOpacity className="flex-row justify-between items-center bg-white-100 rounded-xl px-12 py-6 border border-blue-100 mb-12 top-20 self-center ">
                    <View className="flex-row items-center space-x-2">
                        <View className="w-8 h-8 rounded-full bg-white full border-2 border-blue-100  absolute -left-6" />
                        <Text className="font-semibold text-base text-gray-600 ml-6">1 Month - EGP159.99/month</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity className="flex-row justify-between items-center bg-white-100 rounded-xl px-16 py-6 border border-blue-100 mb-12 top-20 self-center ">
                    <View className="flex-row items-center space-x-2">
                        <View className="w-8 h-8 rounded-full bg-white full border-2 border-blue-100  absolute -left-10" />
                        <Text className="font-semibold text-base text-gray-600 ml-6 -left-4">1 Year - EGP1799.99/year</Text>
                    </View>
                </TouchableOpacity>



            </View>
            <TouchableOpacity className="flex-row justify-between items-center bg-[#FFF3CD] rounded-xl px-24 py-6 mb-12 top-20 self-center ">
                <View className="flex-row items-center space-x-2">
                    <Text className="font-semibold text-xl text-gray-900 ml-2 text-center">continue</Text>
                </View>
            </TouchableOpacity>
        </View>





    );
}