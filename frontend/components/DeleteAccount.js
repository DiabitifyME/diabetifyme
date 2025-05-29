import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const CircleCheckbox = ({ checked, onPress }) => (
    <TouchableOpacity
        onPress={onPress}
        className="w-6 h-6 rounded-full border-2 border-violet-100 items-center justify-center"
    >
        {checked && <View className="w-3 h-3 rounded-full bg-violet-300" />}
    </TouchableOpacity>
);

const AccountDeletionFeedback = () => {
    const navigation = useNavigation();

    const [selectedOptions, setSelectedOptions] = useState({
        preferAnotherApp: false,
        missingFeatures: false,
        technicalIssues: false,
        annoyingNotifications: false,
        somethingElse: false,
    });

    const [otherFeedback, setOtherFeedback] = useState('');

    const toggleOption = (option) => {
        setSelectedOptions(prev => ({
            ...prev,
            [option]: !prev[option]
        }));
    };

    const handleDeleteAccount = () => {
        const feedback = {
            ...selectedOptions,
            additionalComment: selectedOptions.somethingElse ? otherFeedback : '',
        };

        console.log('Account deletion requested with feedback:', feedback);
        // Proceed with deletion logic
    };

    return (
        <SafeAreaView className="flex-1 bg-violet-100">
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                {/* Header */}
                <View className="bg-violet-100 rounded-b-3xl px-4 pt-8 pb-6 flex-row items-center justify-between">
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back" size={28} color="black" />
                    </TouchableOpacity>
                    <MaterialIcons name="account-circle" size={35} color="black" />
                </View>

                <Text className="text-xl font-bold text-gray-900 ml-6 mt-4">Account & Data</Text>

                {/* Feedback Section */}
                <View className="flex-1 bg-white rounded-t-3xl mt-6 px-6 pt-10 pb-10">
                    <Text className="text-xl font-bold text-center text-gray-700">We will miss you</Text>
                    <Text className="text-base font-medium text-gray-500 text-center mb-6">
                        Could you let us know how we failed you?
                    </Text>

                    {/* Options */}
                    {[
                        { key: 'preferAnotherApp', label: 'Prefer another application' },
                        { key: 'missingFeatures', label: 'Important features are missing' },
                        { key: 'technicalIssues', label: 'Technical issue(s) with the app' },
                        { key: 'annoyingNotifications', label: 'Annoyed by the notifications' },
                        { key: 'somethingElse', label: 'Something else' },
                    ].map((option) => (
                        <TouchableOpacity
                            key={option.key}
                            className="flex-row items-center py-3"
                            onPress={() => toggleOption(option.key)}
                        >
                            <CircleCheckbox
                                checked={selectedOptions[option.key]}
                                onPress={() => toggleOption(option.key)}
                            />
                            <Text className="ml-2 text-base text-gray-700 font-medium">{option.label}</Text>
                        </TouchableOpacity>
                    ))}

                    {/* Textbox for “Something Else” */}
                    {selectedOptions.somethingElse && (
                        <TextInput
                            placeholder="Tell us more..."
                            multiline
                            numberOfLines={4}
                            value={otherFeedback}
                            onChangeText={setOtherFeedback}
                            className="border border-violet-300 rounded-lg px-4 py-2 mt-4 text-base text-gray-700"
                            textAlignVertical="top"
                        />
                    )}

                    {/* Delete Button */}
                    <TouchableOpacity
                        className="bg-black rounded-xl py-3 mt-8 items-center"
                        onPress={handleDeleteAccount}
                    >
                        <Text className="text-white font-semibold text-base">Delete Account</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default AccountDeletionFeedback;
