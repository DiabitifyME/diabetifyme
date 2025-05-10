import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons, AntDesign } from "@expo/vector-icons";


const NutritionProgramScreen = ({ navigation }) => {
    return (
        <SafeAreaView className="flex-1 bg-white">
            <ScrollView className="flex-1 bg-white px-6 pt-20 ">

                {/* Header */}
                <View className="flex-row justify-between items-center mb-4">

                    <Text className="text-2xl font-semibold text-gray-800">Nutrition program</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("profilepage")}>
                        <Image source={require("../assets/images/martina.jpg")} className="w-12 h-12 rounded-full" />
                    </TouchableOpacity>
                </View>

                {/* Meal Plan Boxes */}
                <View className="flex-row justify-between mb-28 px- py-6">
                    {[
                        { title: 'Breakfast', image: require('../assets/images/breakfast.jpg'), route: 'breakfast' },
                        { title: 'Lunch', image: require('../assets/images/lunch.jpg'), route: 'lunch' },
                        { title: 'Dinner', image: require('../assets/images/dinner.jpg'), route: 'dinner' },
                    ].map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => item.route && navigation.navigate(item.route)}
                            className="bg-[#FFF3CD] w-[30%] rounded-xl p-2 items-center"
                        >
                            <Text className="font-bold text-sm mb-2">{item.title}</Text>
                            <Text className="text-xs text-gray-600 mb-2">Tap for recipe</Text>
                            <Text className="text-xs text-gray-500 mb-2">800 Cals</Text>
                            <Image source={item.image} className="w-16 h-16 rounded-full -mb-6" />
                        </TouchableOpacity>
                    ))}

                </View>

                {/* Premium Plan Title */}
                <Text className="text-2xl font-semibold text-center -mb-8 -top-20">Premium Plan</Text>

                {/* Premium Recipes Grid */}
                <View className="flex-row flex-wrap justify-between mb-2 px-1">
                    {[
                        { name: 'Texan chicken', calories: 434, image: require('../assets/images/texan.jpg'), route: 'subscribe' },
                        { name: 'Almond chicken', calories: 477, image: require('../assets/images/almond.jpg'), route: 'subscribe' },
                        { name: 'Avocado chicken', calories: 602, image: require('../assets/images/avocado.jpg'), route: 'subscribe' },
                        { name: 'Mexican chicken', calories: 479, image: require('../assets/images/mexican.jpg'), route: 'subscribe' },
                    ].map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => item.route && navigation.navigate(item.route)}

                            className="bg-blue-100 w-[48%] mb-8 rounded-xl p-8 relative"
                        >
                            <Text className="font-semibold text-sm text-gray-800 -ml-6 py-2">{item.name}</Text>
                            <Text className="text-xs text-gray-600 -ml-2">{item.calories} calories</Text>
                            <Image source={item.image} className="w-16 h-16 rounded-full absolute top-[-18] right-[-10]" />
                        </TouchableOpacity>
                    ))}
                </View>


                {/* Subscribe Button */}
                <TouchableOpacity className="bg-[#FFF3CD] py-4 rounded-xl items-center mb-4">
                    <TouchableOpacity onPress={() => navigation.navigate("subscribe")}>


                        <Text className="font-semibold text-xl text-gray-800">Subscribe now! 🥳</Text>
                    </TouchableOpacity>
                </TouchableOpacity>

            </ScrollView>
            <View className="bg-white p-2 mt-2 mx-4 mb-2 rounded-3xl flex-row justify-around items-center">



                {/* Home Icon */}
                <TouchableOpacity className="items-center justify-center"
                    onPress={() => navigation.navigate('home')}
                >
                    <View className="p-2 rounded-full bg-white-100">
                        <Ionicons name="home-outline" size={28} color="black" />
                    </View>
                </TouchableOpacity>

                {/* QR Code Icon */}
                <TouchableOpacity className="items-center justify-center">
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


        </SafeAreaView>

    );
};

export default NutritionProgramScreen;