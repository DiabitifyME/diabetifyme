import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { AntDesign, Feather, MaterialIcons, Ionicons } from '@expo/vector-icons';
import Animated, { BounceIn } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';

const doctors = [
    {
        name: 'Dr. Aly Eid',
        image: 'https://randomuser.me/api/portraits/men/32.jpg',
        stars: 5,
        desc: 'A skilled endocrinologist related to diabetes, including insulin therapy and lifestyle management.',
    },
    {
        name: 'Dr. Tinaa',
        image: 'https://randomuser.me/api/portraits/women/44.jpg',
        stars: 4,
        desc: 'A specialist cardiologist recognized for her diagnosis and treatment of heart diseases.',
    },
    {
        name: 'Dr. Rosa',
        image: 'https://randomuser.me/api/portraits/women/65.jpg',
        stars: 5,
        desc: 'A knowledgeable and compassionate pediatrician dedicated to the health of children.',
    },
    {
        name: 'Dr. Aly Eid',
        image: 'https://randomuser.me/api/portraits/men/32.jpg',
        stars: 5,
        desc: 'A highly skilled dermatologist specializing in the diagnosis and treatment of skin conditions.',
    },
    {
        name: 'Dr. Tinaa',
        image: 'https://randomuser.me/api/portraits/women/44.jpg',
        stars: 4,
        desc: 'An experienced orthopaedic surgeon specializing in the treatment of bones, joints, and muscles.',
    },
    {
        name: 'Dr. Rosa',
        image: 'https://randomuser.me/api/portraits/women/65.jpg',
        stars: 5,
        desc: 'A neurologist specializing in the diagnosis and care of nervous system conditions.',
    },
];

export default function DoctorMatchingScreen({ navigation }) {
    return (
        <View className="flex-1 bg-[#FCE7F3] items-center justify-center">
            <TouchableOpacity
                onPress={() => navigation?.goBack?.()}
                className="mt-1"
                style={{ width: 32, height: 32, justifyContent: 'center', alignItems: 'center' }}
            ></TouchableOpacity>
            <View className="flex-1 w-full bg-[#FCE7F3] rounded-2xl pt-4 pb-3 px-4 justify-between">
                {/* Header */}
                <View className="flex-row items-start justify-between mb-3">
                    <TouchableOpacity
                        onPress={() => navigation.navigate("home")}
                        style={{ width: 32, height: 32, justifyContent: 'center', alignItems: 'center' }}
                    >
                        <AntDesign name="arrowleft" size={24} color="#232323" />
                    </TouchableOpacity>
                    <Text className="text-2xl font-bold text-gray-600 mt-12 flex-1 -ml-8">
                        Doctor Matching
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

                {/* Doctor List */}
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    className="flex-1 mt-2"
                    contentContainerStyle={{ paddingBottom: 12 }}
                >
                    {doctors.map((doc, idx) => (
                        <View
                            key={idx}
                            className="flex-row bg-white rounded-xl px-3 py-5 mb-2 items-center"
                            style={{
                                shadowColor: '#000',
                                shadowOpacity: 0.04,
                                shadowRadius: 2,
                                elevation: 1,
                            }}
                        >
                            <Image
                                source={{ uri: doc.image }}
                                className="w-16 h-16 rounded-full mr-3"
                                resizeMode="cover"
                            />
                            <View className="flex-1">
                                <Text className="font-semibold text-gray-800 text-base">{doc.name}</Text>
                                <View className="flex-row items-center my-0.5">
                                    {[...Array(doc.stars)].map((_, i) => (
                                        <AntDesign key={i} name="star" size={13} color="#fbbf24" />
                                    ))}
                                    {[...Array(5 - doc.stars)].map((_, i) => (
                                        <AntDesign key={i} name="staro" size={13} color="#fbbf24" />
                                    ))}
                                </View>
                                <Text className="text-xs text-gray-500" numberOfLines={2}>
                                    {doc.desc}
                                </Text>
                            </View>
                            <TouchableOpacity>
                                <Text className="text-gray-600 underline underline-offset-2 text-xs font-semibold ml-2 mt-16" >Details</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>

                {/* Bottom Navigation */}
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
            </View>
        </View>
    );
}
