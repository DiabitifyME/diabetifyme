import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function DataExportScreen() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');

    const handleConfirm = () => {
        if (!email.includes('@')) {
            Alert.alert('Invalid Email', 'Please enter a valid email address.');
            return;
        }

        // Simulate export logic
        Alert.alert('Success', `Data will be sent to ${email}`);
        // You can add your actual export logic or API call here
    };

    return (
        <View className="flex-1 bg-violet-100">
            {/* Header */}
            <View className="bg-violet-100 rounded-b-3xl px-4 pt-12 pb-6 flex-row items-center justify-between">
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={28} color="black" />
                </TouchableOpacity>
                <MaterialIcons
                    name="account-circle"
                    size={35}
                    color="black"
                />
            </View>

            <Text className="text-xl font-bold text-gray-900 -top-18 ml-6">Account & Data</Text>


            {/* Content */}
            <View className="flex-1 bg-white rounded-t-3xl mt-12 px-6 pt-10 pb-10">
                <View className=" mb-2">
                    <Text className="text-xl font-bold text-center text-gray-700">Data export</Text>
                </View>

                <Text className="text-center text-sm text-gray-500 mb-6">
                    Where shall we send your data?
                </Text>

                <View className="border-b border-gray-400 mb-6 mt-4 flex-row items-center">
                    <TextInput
                        className="flex-1 text-sm py-2"
                        placeholder="Eg123@gmail.com"
                        placeholderTextColor="gray"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    {email.length > 0 && (
                        <TouchableOpacity onPress={() => setEmail('')}>
                            <Ionicons name="close-circle-outline" size={18} color="gray" />
                        </TouchableOpacity>
                    )}
                </View>

                <TouchableOpacity
                    className="bg-black rounded-xl py-3 mt-3 items-center"
                    onPress={handleConfirm}
                >
                    <Text className="text-white font-semibold text-base">Confirm email</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
