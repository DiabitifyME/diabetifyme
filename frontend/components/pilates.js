import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign, Ionicons } from '@expo/vector-icons';

const exercises = [
    {
        id: '1',
        title: 'Roll up',
        duration: '8 minutes',
        locked: false,
        thumb: require('../assets/images/pilates1.jpg'),
    },
    {
        id: '2',
        title: 'Leg circle',
        duration: '4 minutes',
        locked: true,
        thumb: require('../assets/images/pilates2.jpg'),
    },
    {
        id: '3',
        title: 'Puch-up',
        duration: '5 minutes',
        locked: true,
        thumb: require('../assets/images/pilates3.jpg'),
    },
];

export default function PilatesScreen() {
    const navigation = useNavigation();

    return (
        <View className="flex-1 bg-white">
            {/* Back Button */}
            <View className="absolute top-12 left-6 z-10">
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign name="arrowleft" size={24} color="black" />
                </TouchableOpacity>
            </View>

            {/* Top Image */}
            <Image
                source={require('../assets/images/pilates.jpg')} // your top yoga image
                className="w-full h-60 mt-6 rounded-xl"
                resizeMode="cover"
            />

            {/* Content Card */}
            <View className="flex-1 px-4 py-16 " style={{ marginTop: -68 }}>
                <View className="bg-[#DBEAFE] flex-1 rounded-3xl pt-8 pb-6 px-6">

                    {/* Title */}
                    <Text className="text-2xl font-semibold text-gray-700 mb-6">
                        Pilates Workout
                    </Text>

                    {/* Exercise List */}
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        className="flex-1 mb-6"
                    >
                        {exercises.map((ex) => (
                            <TouchableOpacity
                                key={ex.id}
                                className="flex-row items-center bg-white rounded-xl p-3 mb-4 h-24"
                                activeOpacity={0.7}
                                onPress={() => {
                                    if (ex.locked) {
                                        navigation.navigate('subscribtionExercise');
                                    } else {
                                        navigation.navigate('ExerciseDetailScreen', { exercise: ex });
                                    }
                                }}
                            >
                                {ex.locked ? (
                                    <Ionicons
                                        name="lock-closed"
                                        size={24}
                                        color="black"
                                        className="mr-3"
                                    />
                                ) : (
                                    <Image
                                        source={ex.thumb}
                                        className="w-20 h-16 rounded-lg mr-3"
                                        resizeMode="cover"
                                    />
                                )}

                                <View className="flex-1">
                                    <Text className="text-base font-medium text-gray-800">
                                        {ex.title}
                                    </Text>
                                    <Text className="text-sm text-gray-600">
                                        {ex.duration}
                                    </Text>
                                </View>

                                <AntDesign
                                    name="right"
                                    size={20}
                                    color="black"
                                    className="mt-8"
                                />
                            </TouchableOpacity>
                        ))}
                    </ScrollView>


                </View>
                {/* Start Button */}
                <TouchableOpacity
                    className="bg-gray-700 py-4 w-60 h-16 ml-16 rounded-xl items-center" style={{ marginTop: -24 }}
                    onPress={() => {
                        /* You could start the first unlocked exercise here */
                        const firstUnlocked = exercises.find((e) => !e.locked);
                        if (firstUnlocked) {
                            navigation.navigate('ExerciseDetailScreen', {
                                exercise: firstUnlocked,
                            });
                        } else {
                            navigation.navigate('SubscribeScreen');
                        }
                    }}
                >
                    <Text className="text-white font-bold text-2xl">Start</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
