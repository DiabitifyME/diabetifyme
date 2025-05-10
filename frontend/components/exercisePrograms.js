import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, MaterialIcons, AntDesign } from '@expo/vector-icons'; // Ensure these are installed
import HomePage from './home';

const workoutImages = {
    yoga: require('../assets/images/yoga.jpg'),
    pilates: require('../assets/images/pilates.jpg'),
    fullbody: require('../assets/images/fullbody.jpg'),
    stretching: require('../assets/images/stretching.jpg'),
};

const workoutColors = {
    yoga: 'bg-[#FFF3CD]',
    pilates: 'bg-[#FFF3CD]',
    fullbody: 'bg-[#FFF3CD]',
    stretching: 'bg-[#FFF3CD]',
};

const ExerciseProgramScreen = () => {
    const navigation = useNavigation();

    const workoutData = [
        {
            id: 'yoga',
            name: 'Yoga',
            exercises: 16,
            screen: 'yoga',
            image: workoutImages.yoga,
            color: workoutColors.yoga
        },
        {
            id: 'pilates',
            name: 'Pilates',
            exercises: 20,
            screen: 'pilates',
            image: workoutImages.pilates,
            color: workoutColors.pilates
        },
        {
            id: 'fullbody',
            name: 'Full body',
            exercises: 14,
            screen: 'fullBody',
            image: workoutImages.fullbody,
            color: workoutColors.fullbody
        },
        {
            id: 'stretching',
            name: 'Stretching',
            exercises: 8,
            screen: 'stretching',
            image: workoutImages.stretching,
            color: workoutColors.stretching
        },
    ];

    return (
        <View className="flex-1 bg-white relative">
            <ScrollView className="p-5 mt-10">
                {/* Header with Avatar */}
                <View className="flex-row justify-between items-center mb-6">
                    <Text className="text-3xl font-bold text-black">Exercise program</Text>
                    <Image
                        source={require('../assets/images/martina.jpg')} // Replace with actual avatar image
                        className="w-10 h-10 rounded-full"
                    />
                </View>

                {/* Workouts Label */}
                <Text className="text-2xl font-semibold text-black mb-4">Workouts</Text>

                {/* Workout Cards */}
                {workoutData.map((workout) => (
                    <TouchableOpacity
                        key={workout.id}
                        className={`mb-3 rounded-xl ${workout.color} p-4`}
                        onPress={() => navigation.navigate(workout.screen, { workout })}
                    >
                        <View className="flex-row items-center">
                            <View className="flex-1">
                                <Text className="text-xl font-bold text-gray-600">{workout.name}</Text>
                                <Text className="text-gray-600">{workout.exercises} Exercises</Text>
                            </View>
                            <Image
                                source={workout.image}
                                className="w-48 h-24 rounded-lg "
                                resizeMode="cover"
                            />
                        </View>
                    </TouchableOpacity>
                ))}

                {/* Subscribe Button */}
                <TouchableOpacity
                    className="bg-[#FFF3CD] py-4 w-60 ml-16 rounded-lg items-center mt-2 mb-20"
                    onPress={() => navigation.navigate('subscribtionExercise')}
                >
                    <Text className="font-bold text-xl">Subscribe now! 🤩</Text>
                </TouchableOpacity>
            </ScrollView>

            {/* Bottom Navigation */}
            <View className="bg-white mx-4 mb-6 rounded-3xl flex-row justify-around items-center ">
                {/* Home Icon */}
                <TouchableOpacity className="items-center justify-center" onPress={() => navigation.navigate('home')}
                >
                    <View className="p-2 rounded-full bg-white-100">
                        <Ionicons name="home-outline" size={28} color="black" />
                    </View>
                </TouchableOpacity>

                {/* QR Code Icon */}
                <TouchableOpacity className="items-center justify-center" onPress={() => navigation.navigate('qr')}>
                    <AntDesign name="qrcode" size={28} color="black" />
                    <View className="rounded-full bg-white-100">
                    </View>
                </TouchableOpacity>

                {/* Notifications Icon */}
                <TouchableOpacity className="items-center justify-center" onPress={() => navigation.navigate('notifications')}>
                    <View className="p-3 rounded-full bg-white-100">
                        <Ionicons name="notifications-outline" size={28} color="black" />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ExerciseProgramScreen;
