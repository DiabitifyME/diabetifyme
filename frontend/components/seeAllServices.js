import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const services = [
    { label: "Nutrition Programs", color: "bg-blue-100", screen: "nutritionprogram" },
    { label: "Exercise Programs", color: "bg-yellow-100", screen: "exercisePrograms" },
    { label: "Symptom Checker", color: "bg-purple-100", screen: "symptomsChecker" },
    { label: "Doctor Matching", color: "bg-pink-100", screen: "doctorMatching" },
    { label: "Diabetes \nEmpowerment", color: "bg-blue-100", screen: "diabetesEmpowerment" },
    { label: "Emergency Protocols", color: "bg-yellow-100", screen: "emergencyProtocols" },
    { label: "Diabetes Awareness", color: "bg-purple-100", screen: "diabetesAwareness" },
    { label: "Location-Based \nServices", color: "bg-pink-100", screen: "Location" },
];

export default function ServicesPopup() {
    const [modalVisible, setModalVisible] = useState(true);
    const navigation = useNavigation();

    const handleServicePress = (screenName) => {
        setModalVisible(false);
        navigation.navigate(screenName);
    };

    const handleClose = () => {
        setModalVisible(false);
        navigation.navigate('home'); // or replace with your actual Home screen name
    };

    return (
        <Modal
            visible={modalVisible}
            animationType="slide"
            transparent={true}
            onRequestClose={handleClose}
        >
            <View className="flex-1 bg-black/50 justify-center items-center">
                <View className="w-[90%] bg-white p-4 rounded-2xl">
                    <Text className="text-xl font-bold mb-4 text-center text-gray-800">
                        Choose a Service
                    </Text>

                    <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
                        <View className="flex-row flex-wrap justify-between">
                            {services.map((service, index) => (
                                <TouchableOpacity
                                    key={index}
                                    className={`w-[47%] h-24 rounded-xl mb-4 items-center justify-center ${service.color}`}
                                    onPress={() => handleServicePress(service.screen)}
                                >
                                    <Text className="text-gray-800 text-center text-sm font-semibold">
                                        {service.label}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </ScrollView>

                    <TouchableOpacity
                        onPress={handleClose}
                        className=" bg-gray-300 py-4 rounded-xl"
                    >
                        <Text className="text-center font-semibold text-gray-700">
                            Close
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}
