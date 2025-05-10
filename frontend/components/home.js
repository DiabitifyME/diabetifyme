import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from "react-native";
import { Feather, Ionicons, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import "nativewind";
import "../global.css";
import { SafeAreaView } from "react-native-safe-area-context";

const HomePage = () => {
    const [isSearching, setIsSearching] = useState(false);
    const [searchText, setSearchText] = useState("");
    const navigation = useNavigation(); // ✅ Use the hook to get the navigation object


    return (
        <SafeAreaView className="flex-1 bg-white">
            <ScrollView className="px-4 pt-4" contentContainerStyle={{ paddingBottom: 100 }}>

                {/* Logo Section */}
                <View className="items-start mb-7 self-start right-16">

                </View>

                {/* Greeting + Search + Profile */}
                <View className="flex-row justify-between items-center mb-4">
                    <View>
                        <Text className="text-2xl font-medium text-gray-800">Hello!</Text>
                        <Text className="text-2xl font-bold text-gray-900 -mt-1">Martina Jackob</Text>
                    </View>

                    {/* Search Icon + Profile */}
                    <View className="flex-row items-center space-x-3 ">
                        <TouchableOpacity onPress={() => setIsSearching(!isSearching)}>
                            <Feather name="search" size={18} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("profilepage")}>
                            <Image source={require("../assets/images/martina.jpg")} className="w-10 h-10 rounded-full" />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Search Bar (Visible when isSearching is true) */}
                {isSearching && (
                    <View className="flex-row items-center bg-gray-200 p-2 rounded-lg">
                        <Feather name="search" size={18} color="gray" className="mr-2" />
                        <TextInput
                            placeholder="Search..."
                            className="flex-1 text-gray-800"
                            value={searchText}
                            onChangeText={setSearchText}
                        />
                    </View>
                )}

                {/* Services */}
                <View className="flex-row justify-between items-center mt-4 mb-4">
                    <Text className="text-2xl font-medium">Services</Text>
                    <TouchableOpacity>
                        <Text className="text-sm font-semibold text-black">View All</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} className="pl-0 pr-2">
                    <View className="flex-row gap-x-4 justify-center px-1 mb-4">
                        <TouchableOpacity className="bg-blue-100 w-28 h-20 rounded-xl justify-center items-center px-1"
                            onPress={() => navigation.navigate('welcomenutrition')}
                        >
                            <Text className="text-center font-medium text-md text-gray-800 leading-tight tracking-tight">
                                Nutrition{"\n"}Programs
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity className="bg-[#FFF3CD] w-28 h-20 rounded-xl justify-center items-center px-1"
                            onPress={() => navigation.navigate('welcomeExercise')}
                        >
                            <Text className="text-center font-medium text-md text-gray-800 leading-tight tracking-tight">
                                Exercise{"\n"}Programs
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity className="bg-purple-100 w-28 h-20 rounded-xl justify-center items-center px-1">
                            <Text className="text-center font-medium text-md text-gray-800 leading-tight tracking-tight">
                                Symptom{"\n"}Checker
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity className="bg-pink-100 w-28 h-20 rounded-xl justify-center items-center px-1">
                            <Text className="text-center font-medium text-md text-gray-800 leading-tight tracking-tight">
                                Doctor{"\n"}Matching
                            </Text>
                        </TouchableOpacity>

                    </View>
                </ScrollView>

                {/* Glucometer Section */}
                <View className="mt-3 mb-4">
                    <Image
                        source={require('../assets/images/glucometer.jpg')}
                        className="w-full h-56 rounded-2xl"
                        resizeMode="cover"
                    />
                </View>

                {/* ✅ Upcoming Appointments - Polished Capsule Style */}
                <View className="mt-2">
                    <View className="flex-row justify-between items-center px-1 mb-3">
                        <Text className="text-lg font-semibold text-black">Upcoming Appointments</Text><TouchableOpacity>
                            <Text className="text-sm font-semibold text-black">View All</Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false} className="pl-0 pr-2">
                        <View className="flex-row gap-x-4">
                            {/* Appointment Card */}
                            <View className="bg-[#FFF3CD] rounded-3xl px-5 py-4 w-35 items-center ">
                                <Image
                                    source={require('../assets/images/1st dr.jpg')}
                                    className="h-14 w-12 rounded-full mb-2"
                                />
                                <Text className="text-sm font-bold text-black text-center">Dr/ Rosa Ben</Text>
                                <Text className="text-xs text-gray-700 text-center mt-1">19/3 8:30 PM</Text>
                            </View>

                            <View className="bg-[#FFF3CD] rounded-3xl px-5 py-4 w-35 items-center ">
                                <Image
                                    source={require('../assets/images/2nd dr.jpg')}
                                    className="h-14 w-12 rounded-full mb-3"
                                />
                                <Text className="text-sm font-bold text-black text-center">Dr/ Tina Jack</Text>
                                <Text className="text-xs text-gray-700 text-center mt-1">9/12 4:30 PM</Text>
                            </View>

                            <View className="bg-[#FFF3CD] rounded-3xl px-5 py-4 w-35 items-center">
                                <Image
                                    source={require('../assets/images/3rd dr.jpg')}
                                    className="h-14 w-12 rounded-full mb-2"
                                />
                                <Text className="text-sm font-bold text-black text-center">Dr/ Tom Ali</Text>
                                <Text className="text-xs text-gray-700 text-center mt-1">5/5 6:00 PM</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>

                {/* ✅ Medication Reminders Section with Pills Image */}
                <View className="mt-9">
                    <View className="flex-row justify-between items-center px-1 mb-4">
                        <Text className="text-medium font-semibold text-black">Medication Reminders</Text>
                        <TouchableOpacity>
                            <Text className="text-sm font-semibold text-black">View All</Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false} className="pl-1 pr-2">
                        <View className="flex-row gap-x-4 mt-2">

                            {/* Reminder Card 1 */}
                            <View className="bg-blue-100 rounded-3xl px-5 py-4 w-45">

                                <Image
                                    source={require('../assets/images/pills.png')}  // << your pills image here
                                    className="h-10 w-10 mb-2 self-center"
                                />
                                <Text className="text-sm font-bold text-black text-center mb-1">Tresiba</Text>
                                <Text className="text-xs text-gray-700 text-center">1x 10:00 PM</Text>
                                <Text className="text-xs text-gray-700 text-center mt-1">15 units</Text>
                            </View>

                            {/* Reminder Card 2 */}
                            <View className="bg-pink-100 rounded-3xl px-5 py-4 w-45">
                                <Image
                                    source={require('../assets/images/pills.png')}
                                    className="h-10 w-10 mb-2 self-center"
                                />
                                <Text className="text-sm font-bold text-black text-center mb-1">Tresiba</Text>
                                <Text className="text-xs text-gray-700 text-center">1x 10:00 PM</Text>
                                <Text className="text-xs text-gray-700 text-center mt-1">15 units</Text>
                            </View>

                            {/* Reminder Card 3 */}
                            <View className="bg-[#E8E6FF] rounded-3xl px-5 py-4 w-45">
                                <Image
                                    source={require('../assets/images/pills.png')}
                                    className="h-10 w-10 mb-2 self-center"
                                />
                                <Text className="text-sm font-bold text-black text-center mb-1">Tresiba</Text>
                                <Text className="text-xs text-gray-700 text-center">1x 10:00 PM</Text>
                                <Text className="text-xs text-gray-700 text-center mt-1">15 units</Text>
                            </View>

                        </View>
                    </ScrollView>
                </View>


                {/* ✅ Tips Section */}
                <View className="mt-6">
                    <View className="flex-row justify-between items-center px-1 mb-2">
                        <Text className="text-medium font-semibold text-black">Tips</Text>
                    </View>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false} className="pl-1 pr-3">
                        <View className="flex-row gap-x-4">
                            <View className="bg-[#E6F7FF]  rounded-2xl px-4 py-4 w-50">
                                <Text className="text-sm font-semibold text-black mb-1">💧 Stay Hydrated</Text>
                                <Text className="text-xs text-gray-700">Drink at least 8 cups of water daily to support blood sugar balance.</Text>
                                <Text className="text-xs text-gray-700">Drink at least 8 cups of water daily to support blood sugar balance.</Text>
                                <Text className="text-xs text-gray-700">Drink at least 8 cups of water daily to support blood sugar balance.</Text>





                            </View>

                            <View className="bg-[#E6F7FF] rounded-2xl px-4 py-4 w-50">
                                <Text className="text-sm font-semibold text-black mb-1">🥗 Balanced Meals</Text>
                                <Text className="text-xs text-gray-700">Include carbs, protein & fiber in each meal for stable glucose levels.</Text>
                                <Text className="text-xs text-gray-700">Combine complex carbs, lean proteins, and healthy fats in each meal.</Text>
                                <Text className="text-xs text-gray-700">it Helps stabilize blood sugar levels and provides longer-lasting energy.</Text>
                            </View>

                            <View className="bg-[#E6F7FF] rounded-2xl px-4 py-4 w-50">
                                <Text className="text-sm font-semibold text-black mb-1">🚶‍♀ Move Daily</Text>
                                <Text className="text-xs text-gray-700">Light exercise like walking helps boost insulin sensitivity.</Text>
                                <Text className="text-xs text-gray-700">30 minutes of walking and stretching improves insulin sensitivity.</Text>
                                <Text className="text-xs text-gray-700">30 minutes of walking and stretching improves insulin sensitivity.</Text>

                            </View>
                        </View>
                    </ScrollView>
                </View>
                {/* ✅ Success Stories Section */}
                <View className="mt-9">
                    <View className="flex-row justify-between items-center px-1 mb-3">
                        <Text className="text-medium font-semibold text-black">Success Stories</Text>
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} className="pl-0 pr-2">
                        <View className="flex-row  gap-x-4">



                            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="pl-0 pr-2">
                                <View className="flex-row gap-x-4">

                                    {/* Story Card 1 */}
                                    <View className="bg-[#FFF0F0] rounded-2xl p-3 w-72 flex-row items-start">
                                        <Image
                                            source={require('../assets/images/jameila.jpg')}
                                            className="w-16 h-16 rounded-full mr-3"
                                        />
                                        <View className="flex-1">
                                            <Text className="text-base font-bold text-black mb-1">Sarah’s Journey</Text>
                                            <Text className="text-sm text-gray-700" style={{ textAlign: 'left' }}>
                                                “Managing my diabetes became easier after using Diabetify Me.
                                            </Text>
                                            <Text className="text-sm text-gray-700" style={{ textAlign: 'left' }}>
                                                I’ve lost 10kg and feel more confident every day!”
                                            </Text>
                                            <Text className="text-xs text-gray-500 mt-1 text-right">2 days ago</Text>
                                        </View>
                                    </View>

                                    {/* Story Card 2 */}
                                    <View className="bg-[#E9FFE9] rounded-2xl p-3 w-72 flex-row items-start">
                                        <Image
                                            source={require('../assets/images/jameila.jpg')}
                                            className="w-16 h-16 rounded-full mr-3"
                                        />
                                        <View className="flex-1">
                                            <Text className="text-base font-bold text-black mb-1">Rola’s Transformation</Text>
                                            <Text className="text-sm text-gray-700" style={{ textAlign: 'left' }}>
                                                “Thanks to the exercise tips and diet plans, my sugar levels are finally under control.”
                                            </Text>
                                            <Text className="text-xs text-gray-500 mt-1 text-right">1 week ago</Text>
                                        </View>
                                    </View>

                                    {/* Story Card 3 */}
                                    <View className="bg-[#FFF0F0] rounded-2xl p-3 w-72 flex-row items-start">
                                        <Image
                                            source={require('../assets/images/jameila.jpg')}
                                            className="w-16 h-16 rounded-full mr-3"
                                        />
                                        <View className="flex-1">
                                            <Text className="text-base font-bold text-black mb-1">Maria’s Hope</Text>
                                            <Text className="text-sm text-gray-700" style={{ textAlign: 'left' }}>
                                                “As a mom of a diabetic child, I found everything I needed — expert advice and real support.”
                                            </Text>
                                            <Text className="text-xs text-gray-500 mt-1 text-right">3 days ago</Text>
                                        </View>
                                    </View>

                                </View>
                            </ScrollView>

                        </View>
                    </ScrollView>
                </View>


                {/*FAQs Section */}
                <View className="mt-9">
                    <View className="flex-row justify-between items-center px-1 mb-5">
                        <Text className="text-medium font-semibold text-black">FAQs</Text>

                    </View>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false} className="pl-1 pr-3">
                        <View className="flex-row gap-x-4">
                            {/* Reminder Card 1 */}
                            <View className="bg-pink-100 rounded-2xl px-4 py-3 w-45">
                                <Text className="text-sm font-semibold text-black mb-1">Type 1 Diabetes</Text>

                            </View>

                            {/* Reminder Card 2 */}
                            <View className="bg-[#E9FFE9]  rounded-2xl px-4 py-3 w-45">
                                <Text className="text-sm font-semibold text-black mb-1">Type 2 Diabetes</Text>

                            </View>

                            {/* Reminder Card 3 */}
                            <View className="bg-[#E8E6FF] rounded-2xl px-4 py-3 w-45">
                                <Text className="text-sm font-semibold text-black mb-1">Prediabetes</Text>

                            </View>
                        </View>
                    </ScrollView>
                </View>


            </ScrollView>
            <View className="bg-white p-2 mt-9 mx-4 mb-6 rounded-3xl flex-row justify-around items-center ">
                {/* Home Icon */}
                <TouchableOpacity className="items-center justify-center"
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
                <TouchableOpacity className="items-center justify-center">
                    <View className="p-3 rounded-full bg-white-100">
                        <Ionicons name="notifications-outline" size={28} color="black" />
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};





export default HomePage;