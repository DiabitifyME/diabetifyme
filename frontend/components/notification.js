import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const NotificationsScreen = ({ navigation }) => {
    const [basic, setBasic] = useState({
        medication: false,
        family: false,
        vital: false,
    });

    const [reports, setReports] = useState({
        daily: false,
        weekly: false,
        monthly: false,
        email: false,
    });

    const toggleBasic = (key) => {
        setBasic({ ...basic, [key]: !basic[key] });
    };

    const toggleReports = (key) => {
        setReports({ ...reports, [key]: !reports[key] });
    };

    return (
        <View className="flex-1 bg-white">
            {/* Header */}
            <View className="bg-[#E9E4FF] px-4 py-16 rounded-b-3xl flex-row justify-between items-center">
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: "absolute", top: 48, left: 16 }}
                >
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <View className="flex-1 ml-4">
                    <Text className="text-lg font-bold text-gray-800 mt-5 -bottom-8 -ml-2">Notifications</Text>
                    <Text className="text-xs text-gray-600 -bottom-8 -ml-2">
                        The following reminders are designed{'\n'}to help you in self-monitoring and managing your health
                    </Text>
                </View>
                <Ionicons name="notifications" size={30} color="black" style={{ position: "absolute", top: 68, right: 16 }} />
            </View>

            {/* Basic Section */}
            <View className="px-4 mt-6">
                <Text className="text-base font-semibold text-gray-800 mb-2">Basic</Text>
                <View className="bg-white border border-gray-200 rounded-xl">
                    {[
                        ['medication', 'Medication intakes'],
                        ['family', 'Family support'],
                        ['vital', 'Vital measurement'],
                    ].map(([key, label]) => (
                        <View key={key} className="flex-row justify-between items-center px-4 py-3 border-b border-gray-100 last:border-b-0">
                            <Text className="text-gray-800">{label}</Text>
                            <Switch
                                trackColor={{ false: '#ccc', true: '#C6B2F2' }}
                                thumbColor={basic[key] ? '#7C4DFF' : '#f4f3f4'}
                                value={basic[key]}
                                onValueChange={() => toggleBasic(key)}
                            />
                        </View>
                    ))}
                </View>
            </View>

            {/* Reports Section */}
            <View className="px-4 mt-6">
                <Text className="text-base font-semibold text-gray-800 mb-2">Reports</Text>
                <View className="bg-white border border-gray-200 rounded-xl">
                    {[
                        ['daily', 'Daily reports'],
                        ['weekly', 'Weekly reports'],
                        ['monthly', 'Monthly reports'],
                        ['email', 'Email reports'],
                    ].map(([key, label]) => (
                        <View key={key} className="flex-row justify-between items-center px-4 py-3 border-b border-gray-100 last:border-b-0">
                            <Text className="text-gray-800">{label}</Text>
                            <Switch
                                trackColor={{ false: '#ccc', true: '#C6B2F2' }}
                                thumbColor={reports[key] ? '#7C4DFF' : '#f4f3f4'}
                                value={reports[key]}
                                onValueChange={() => toggleReports(key)}
                            />
                        </View>
                    ))}
                </View>
            </View>
        </View>
    );
};

export default NotificationsScreen;