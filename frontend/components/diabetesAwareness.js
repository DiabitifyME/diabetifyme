import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import Animated, { BounceIn } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';

export default function DiabetesAwareness({ navigation }) {
    return (
        <SafeAreaView className="flex-1 bg-white">
            <ScrollView className="flex-1 bg-white px-4 pt-10">
                {/* Header */}
                <View className="flex-row items-center mb-4 mt-4">
                    <TouchableOpacity
                        onPress={() => navigation.navigate("home")}
                        className="mr-4"
                    >
                        <AntDesign name="arrowleft" size={24} color="#232323" />
                    </TouchableOpacity>
                </View>
                <Text className="text-3xl font-bold text-gray-600">Diabetes Awareness</Text>

                <Text className="text-gray-600 text-base mb-6 mt-2">
                    Knowledge is power! Understanding Diabetes is the first step towards managing it.
                </Text>

                {/* Prediabetes Awareness */}
                <View className="bg-[#E8E6FF] p-4 rounded-2xl mb-3">
                    <Text className="text-lg font-semibold text-gray-800">Prediabetes Awareness</Text>
                    <Text className="text-gray-700 mt-1">
                        It is crucial for early intervention to prevent or delay the onset of type 2 diabetes through lifestyle changes and regular health monitoring.
                    </Text>
                </View>

                {/* T1D and T2D Side by Side */}
                <View className="flex-row justify-between space-x-2 mb-4">
                    {/* T1D */}
                    <View className="bg-pink-100 p-4 rounded-3xl flex-1 mr-4">
                        <Text className="text-lg font-semibold text-gray-800">T1D</Text>
                        <Text className="text-gray-700 mt-1 text-sm">
                            It is important to understand this autoimmune condition, emphasize the importance of early diagnosis, insulin management, and lifelong care.
                        </Text>
                    </View>

                    {/* T2D */}
                    <View className="bg-green-100 p-4 rounded-3xl flex-1">
                        <Text className="text-lg font-semibold text-gray-800">T2D</Text>
                        <Text className="text-gray-700 mt-1 text-sm">
                            It is important to early detect, healthy lifestyle choices, and regular monitoring to prevent complications and manage the condition effectively.
                        </Text>
                    </View>
                </View>

                {/* Impact Text */}
                <Text className="text-xl font-semibold text-gray-600 my-4">
                    Small changes can lead to big impacts
                </Text>

                {/* Caregivers Awareness */}
                <View className="bg-[#DBEAFE] p-4 rounded-2xl mb-10">
                    <Text className="text-lg font-semibold text-gray-800">Caregivers Awareness</Text>
                    <Text className="text-gray-700 mt-1">
                        It is crucial to support health, well-being, and quality of life for those they care for, while also recognizing their need for support and resources.
                    </Text>
                </View>
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
