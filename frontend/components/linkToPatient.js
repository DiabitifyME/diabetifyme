import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, TextInput, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const LinkToPatientScreen = () => {
    const navigation = useNavigation();
    const [patientCode, setPatientCode] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSendRequest = async () => {
        if (!patientCode.trim()) {
            Alert.alert('Error', 'Please enter a patient code');
            return;
        }

        setIsLoading(true);

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Replace with actual API call:
            // const response = await fetch('your-api-endpoint', {
            //   method: 'POST',
            //   headers: { 'Content-Type': 'application/json' },
            //   body: JSON.stringify({ code: patientCode })
            // });
            // const data = await response.json();

            Alert.alert(
                'Request Sent',
                `Linking request sent to patient ${patientCode}`,
                [
                    {
                        text: 'OK',
                        onPress: () => navigation.goBack()
                    }
                ]
            );
        } catch (error) {
            Alert.alert('Error', 'Failed to send request. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            className="flex-1 bg-[#E8E6FF]"
        >
            {/* Back Button */}
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                className="absolute top-16 left-6 z-10"
            >
                <MaterialCommunityIcons name="arrow-left" size={24} color="black" />
            </TouchableOpacity>

            {/* Centered Content */}
            <View className="flex-1 items-center mt-24 p-6">
                <Text className="text-2xl font-semibold text-center ">
                    linking to patient
                </Text>

                <View className="items-center">
                    <Image
                        source={require('../assets/images/logo2.png')}
                        className="w-80 h-80"
                        resizeMode="contain"
                    />
                </View>
                <Text className="text-xl font-medium w-52 text-center mb-6 ">
                    Send a linking request to the patient
                </Text>
                {/* Form Content */}
                <View className="w-full h-24">

                    {/* Patient Code Input */}
                    <View className="border border-gray-300 rounded-lg p-3 mb-6">
                        <TextInput
                            placeholder="Enter patient code"
                            value={patientCode}
                            onChangeText={setPatientCode}
                            className="text-lg"
                            autoCapitalize="characters"
                            autoCorrect={false}
                            maxLength={8}
                        />
                    </View>

                    {/* Send Button */}
                    <TouchableOpacity
                        className={`py-3 rounded-lg items-center ${patientCode ? 'bg-[#BDF2F5]' : 'bg-gray-300'}`}
                        onPress={handleSendRequest}
                        disabled={!patientCode || isLoading}
                    >
                        <Text className="text-lg font-semibold">
                            {isLoading ? 'Sending...' : 'Send Request'}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};

export default LinkToPatientScreen;