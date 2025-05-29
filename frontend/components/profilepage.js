import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { Ionicons, Feather, AntDesign, Entypo, FontAwesome } from "@expo/vector-icons";
import "nativewind";
import "../global.css";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from 'expo-image-picker';


const ProfileScreen = () => {
    const navigation = useNavigation();
    const [isModalVisible, setModalVisible] = useState(false);
    const [image, setImage] = useState(require("../assets/images/martina.jpg"));


    const takePhoto = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();

        if (status !== 'granted') {
            Alert.alert(
                'Permission Needed',
                'Please allow camera access to take photos',
                [{ text: 'OK' }]
            );
            return;
        }

        const result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) {
            setImage({ uri: result.assets[0].uri });
        }
    };

    const pickImage = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (status !== 'granted') {
            Alert.alert(
                'Permission Needed',
                'Please allow gallery access to select photos',
                [{ text: 'OK' }]
            );
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) {
            setImage({ uri: result.assets[0].uri });
        }
    };
    return (
        <View className="flex-1 bg-violet-100">
            {/* Header */}
            <View className="flex-row justify-between items-center px-6 pt-16">
                <TouchableOpacity onPress={() => navigation.goBack() || navigation.navigate("home")}>
                    <Ionicons name="arrow-back" size={28} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <AntDesign name="qrcode" size={28} color="black" />
                </TouchableOpacity>
            </View>

            {/* Profile Image */}
            <View className="items-center mt-8 z-10">
                <Image
                    source={require("../assets/images/martina.jpg")}
                    className="w-28 h-28 rounded-full border-2 border-white"
                />
                <TouchableOpacity
                    className="absolute top-20 right-15 bg-white rounded-full p-1"
                    onPress={() => setModalVisible(true)}
                >
                    <Ionicons name="camera" size={20} color="black" />
                </TouchableOpacity>
            </View>

            {/* Main Content */}
            <ScrollView
                className="bg-white rounded-t-3xl -mt-12 px-6 pt-24"

                contentContainerStyle={{ paddingBottom: 120 }}
            >
                <View className="space-y-4">
                    {/* My profile */}
                    <TouchableOpacity
                        className="flex-row justify-between items-center bg-white-100 rounded-xl px-5 py-5 border border-violet-100 mb-4"
                        onPress={() => navigation.navigate("myprofile")}
                    >
                        <View className="flex-row items-center space-x-1">
                            <Ionicons name="person-circle-outline" size={28} color="black" />
                            <Text className="font-semibold text-base text-gray-900 ml-2 ">My profile</Text>
                        </View>
                        <Feather name="chevron-right" size={28} color="black" />
                    </TouchableOpacity>

                    {/* My plan */}
                    <TouchableOpacity className="flex-row justify-between items-center bg-white-100 rounded-xl px-5 py-5 border border-violet-100 mb-4" onPress={() => navigation.navigate("MyPlan")}>
                        <View className="flex-row items-center space-x-6">
                            <Feather name="file-text" size={22} color="black" />
                            <Text className="font-semibold text-base text-gray-900 ml-2">My plan</Text>
                        </View>
                        <View className="flex-row items-center space-x-1">
                            <Text className="text-sm text-gray-500">Edit plan</Text>
                            <Feather name="chevron-right" size={28} color="black" />
                        </View>
                    </TouchableOpacity>

                    {/* Care connect */}
                    <TouchableOpacity className="flex-row justify-between items-center bg-white-100 rounded-xl px-5 py-5 border border-violet-100 mb-4"
                        onPress={() => navigation.navigate("careconnect")} // Navigate to Care Connect
                    >
                        <View className="flex-row items-center space-x-2">
                            <FontAwesome name="users" size={22} color="black" />
                            <Text className="font-semibold text-base text-gray-900 ml-2">Care connect</Text>
                        </View>
                        <Feather name="chevron-right" size={28} color="black" />
                    </TouchableOpacity>

                    {/* Reminders */}
                    <TouchableOpacity className="flex-row justify-between items-center bg-white-100 rounded-xl px-5 py-5 border border-violet-100 mb-4"
                        onPress={() => navigation.navigate("Reminders")}>
                        <View className="flex-row items-center space-x-2">
                            <AntDesign name="clockcircleo" size={22} color="black" />
                            <Text className="font-semibold text-base text-gray-900 ml-2">Reminders</Text>
                        </View>
                        <Feather name="chevron-right" size={28} color="black" />
                    </TouchableOpacity>

                    {/* Settings */}
                    <TouchableOpacity className="flex-row justify-between items-center bg-white-100 rounded-xl px-5 py-5 border border-violet-100 mb-4"
                        onPress={() => navigation.navigate("settings")} // Navigate to Settings
                    >
                        <View className="flex-row items-center space-x-5">
                            <Feather name="settings" size={22} color="black" />
                            <Text className="font-semibold text-base text-gray-900 ml-2">Settings</Text>
                        </View>
                        <Feather name="chevron-right" size={28} color="black" />
                    </TouchableOpacity>

                    {/* Help and feedbacks */}
                    <TouchableOpacity className="flex-row justify-between items-center bg-white-100 rounded-xl px-5 py-5 border border-violet-100 mb-4">
                        <View className="flex-row items-center space-x-2">
                            <Entypo name="help-with-circle" size={22} color="black" />
                            <Text className="font-semibold text-base text-gray-900 ml-2">Help and feedbacks</Text>
                        </View>
                        <Feather name="chevron-right" size={28} color="black" />
                    </TouchableOpacity>
                </View>
            </ScrollView>

            {/* Image Picker Modal */}
            {isModalVisible && (
                <View className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl p-6 border border-gray-200 shadow-lg">
                    <Text className="text-lg font-bold mb-4 text-gray-900">Change picture</Text>

                    <TouchableOpacity
                        className="flex-row items-center mb-4"
                        onPress={() => {
                            setModalVisible(false);
                            takePhoto();
                        }}
                    >
                        <Ionicons name="camera-outline" size={24} color="black" className="mr-2" />
                        <Text className="text-base text-gray-800 ml-2">Take picture</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        className="flex-row items-center"
                        onPress={() => {
                            setModalVisible(false);
                            pickImage();
                        }}
                    >
                        <Ionicons name="image-outline" size={24} color="black" className="mr-2" />
                        <Text className="text-base text-gray-800 ml-2">Choose from gallery</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

export default ProfileScreen;