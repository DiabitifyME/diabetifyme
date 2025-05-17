import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";

const patients = [
    {
        name: 'Sarah Khaled',
        type: 'Type 1',
        lastActivity: 'Today',
        avatar: require('../assets/images/female-avatar.jpg'),
    },
    {
        name: 'Alex George',
        type: 'Prediabetic',
        lastActivity: '2 days ago',
        avatar: require('../assets/images/male-avatar.jpg'),
    },
    {
        name: 'Jonathon Jacob',
        type: 'Type 2',
        lastActivity: '5h ago',
        avatar: require('../assets/images/boy-avatar.jpg'),
    },
];

const SelectPatient = () => {
    const [selectedPatient, setSelectedPatient] = useState(null);
    const navigation = useNavigation();

    const handleAddPatient = () => {
        console.log("Add Patient button pressed");
        navigation.navigate("linkToPatient");
    };

    const handleDailyTasks = () => {
        console.log("Daily Tasks button pressed");
        navigation.navigate("dailyTasksCareGiver");
    };

    return (
        <View className="flex-1 bg-white p-4">
            {/* Back Button */}
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                className="absolute z-10 p-4 mt-8"
            >
                <Ionicons name="arrow-back" size={26} color="gray" />
            </TouchableOpacity>

            {/* Header */}
            <View className="flex-row justify-between items-center mb-4 mt-20">
                <View>
                    <Text className="text-xl font-medium font-bold">Hello!</Text>
                    <Text className="text-xl font-bold">Martina Jacob</Text>
                </View>
                <Image
                    source={require('../assets/images/martina.jpg')}
                    className="w-16 h-16 rounded-full"
                />
            </View>

            {/* Buttons */}
            <View className="flex-row justify-between mb-6 mt-4">
                <TouchableOpacity
                    className="bg-[#BDF2F5] px-4 py-3 rounded-lg w-28 h-24 items-center justify-center"
                    onPress={handleAddPatient}
                >
                    <Text className="text-xl text-center font-semibold">Add Patient</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    className="bg-[#FFF6BF] px-4 py-3 rounded-lg w-28 h-24 items-center justify-center"
                    onPress={() => navigation.navigate("alertsCareGiver")}
                >
                    <Text className="text-black text-xl text-center font-semibold">Alerts</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    className="bg-[#FFEBEB] px-4 py-3 rounded-lg w-28 h-24 items-center justify-center"
                    onPress={handleDailyTasks}

                >
                    <Text className="text-black text-xl text-center font-semibold">Daily Tasks</Text>
                </TouchableOpacity>
            </View>

            {/* Dropdown */}
            <View className="bg-gray-100 rounded-lg mb-4 border border-gray-300">
                <Picker
                    selectedValue={selectedPatient?.name || ""}
                    onValueChange={(itemValue, itemIndex) => {
                        const patientIndex = itemIndex - 1; // Adjust for "Select patient" option
                        setSelectedPatient(patientIndex >= 0 ? patients[patientIndex] : null);
                    }}
                    dropdownIconColor="#000000"
                    style={{ height: 50 }}
                >
                    <Picker.Item label="Select patient" value="" />
                    {patients.map((patient, index) => (
                        <Picker.Item
                            key={index}
                            label={patient.name}
                            value={patient.name}
                        />
                    ))}
                </Picker>
            </View>

            {/* Selected Patient Card */}
            {selectedPatient && (
                <TouchableOpacity
                    className="flex-row items-center bg-gray-100 p-4 rounded-lg mb-3"
                    onPress={() => navigation.navigate("home", { patient: selectedPatient })}
                >
                    <Image
                        source={selectedPatient.avatar}
                        className="w-12 h-12 rounded-full mr-4"
                    />
                    <View>
                        <Text className="font-semibold">{selectedPatient.name}</Text>
                        <Text className="text-sm text-gray-600">{selectedPatient.type}</Text>
                        <Text className="text-sm text-gray-500">last activity: {selectedPatient.lastActivity}</Text>
                    </View>
                </TouchableOpacity>
            )}
        </View>
    );
};

export default SelectPatient;