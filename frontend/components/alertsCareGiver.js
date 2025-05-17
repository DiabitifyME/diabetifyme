import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import MotivationPopup from './careGiverMotivation';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from "@expo/vector-icons";

const AlertsScreen = ({ navigation }) => {
    const [activeTab, setActiveTab] = useState('All');
    const [showMotivationPopup, setShowMotivationPopup] = useState(false);
    const [selectedPatient, setSelectedPatient] = useState(null);

    const [alerts, setAlerts] = useState([
        {
            id: 1,
            patient: 'Sarah Khaled',
            type: 'Type 1',
            category: 'Missed Tasks',
            title: 'Missed insulin dose at 7:00 am',
            date: 'April 24 | 7:20 AM',
            status: 'pending',
            typeSpecific: 'medication'
        },
        {
            id: 2,
            patient: 'Alex George',
            type: 'prediabetic',
            category: 'Symptoms',
            title: 'Reported symptoms: "Increased thirst, blurry vision"',
            date: 'April 24 | 2:20 PM',
            status: 'pending',
            typeSpecific: 'symptom-report'
        },
        {
            id: 3,
            patient: 'Jonathon',
            type: 'Type 2',
            category: 'Inactivity',
            title: 'No meal logs or recommendations opened for 3 days',
            date: 'Last interaction | April 21',
            status: 'pending',
            typeSpecific: 'inactivity'
        }
    ]);

    const markAsResolved = (id) => {
        setAlerts(alerts.map(alert =>
            alert.id === id ? { ...alert, status: 'resolved' } : alert
        ));
    };

    const handleSendMotivation = (message) => {
        console.log(`Sending to ${selectedPatient?.patient}: ${message}`);
        // Add your actual sending logic here
        setShowMotivationPopup(false);
    };

    const filteredAlerts = activeTab === 'All'
        ? alerts.filter(alert => alert.status === 'pending')
        : alerts.filter(alert =>
            alert.category.toLowerCase() === activeTab.toLowerCase() &&
            alert.status === 'pending'
        );

    const renderAlertItem = (alert) => {
        const getBorderColor = () => {
            switch (alert.typeSpecific) {
                case 'medication': return 'border-red-400';
                case 'symptom-report': return 'border-yellow-400';
                case 'inactivity': return 'border-gray-300';
                default: return 'border-gray-200';
            }
        };

        const getIcon = () => {
            switch (alert.typeSpecific) {
                case 'medication':
                    return <MaterialCommunityIcons name="alert-circle" size={20} color="red" />;
                case 'symptom-report':
                    return <MaterialCommunityIcons name="clipboard-text" size={20} color="#facc15" />;
                case 'inactivity':
                    return <FontAwesome name="clock-o" size={20} color="#9ca3af" />;
                default:
                    return null;
            }
        };

        return (
            <View
                key={alert.id}
                className={`border ${getBorderColor()} rounded-xl p-6 pr-6 mb-4 bg-white shadow-sm`}
            >
                {/* Patient Info */}
                <Text className="text-sm font-semibold mb-1">
                    Patient: {alert.patient} | {alert.type}
                </Text>

                {/* Icon and Title */}
                <View className="flex-row items-start mb-2 space-x-2">
                    {getIcon()}
                    <Text className="text-base text-black ml-2">{alert.title}</Text>
                </View>

                {/* Date */}
                <Text className="text-gray-500 text-xs mb-2">{alert.date}</Text>

                {/* Buttons */}
                {alert.typeSpecific === 'medication' && (
                    <View className="flex-row space-x-2 mt-2">
                        <TouchableOpacity className="bg-[#FBF3B5] px-3 py-1 mr-4 rounded-full">
                            <Text className="text-yellow-800 text-sm">Remind patient</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            className="bg-[#FBF3B5] px-3 py-1 rounded-full"
                            onPress={() => markAsResolved(alert.id)}
                        >
                            <Text className="text-yellow-800 text-sm">Mark resolved</Text>
                        </TouchableOpacity>
                    </View>
                )}

                {alert.typeSpecific === 'symptom-report' && (
                    <View className="flex-row space-x-2 mt-2">
                        <TouchableOpacity className="bg-[#FBF3B5] px-3 mr-4 py-1 rounded-full">
                            <Text className="text-yellow-800 text-sm">Review Symptoms</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            className="bg-[#FBF3B5] px-3 py-1 rounded-full"
                            onPress={() => markAsResolved(alert.id)}
                        >
                            <Text className="text-yellow-800 text-sm">Mark resolved</Text>
                        </TouchableOpacity>
                    </View>
                )}

                {alert.typeSpecific === 'inactivity' && (
                    <View className="flex-row space-x-2 mt-2">
                        <TouchableOpacity
                            className="bg-[#FBF3B5] px-3 mr-4 py-1 rounded-full"
                            onPress={() => {
                                setSelectedPatient(alert);
                                setShowMotivationPopup(true);
                            }}
                        >
                            <Text className="text-yellow-800 text-sm">Send motivational Tip</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className="bg-[#FBF3B5] px-3 py-1 rounded-full">
                            <Text className="text-yellow-800 text-sm">Contact Patient</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        );
    };

    return (
        <View className="flex-1 bg-white">
            {/* Back Button */}
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                className="absolute z-10 p-4 mt-8"
            >
                <Ionicons name="arrow-back" size={26} color="gray" />
            </TouchableOpacity>
            <ScrollView className="px-4 pt-24">
                {/* Header */}
                <Text className="text-3xl font-bold text-center mb-1">Alerts</Text>
                <Text className="text-gray-600 text-center mb-6 text-base font-medium">
                    Each alert brings us closer to better care
                </Text>

                {/* Tabs */}
                <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-6">
                    <View className="flex-row space-x-4">
                        {['All', 'Missed Tasks', 'Symptoms', 'Inactivity'].map((tab) => (
                            <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)}>
                                <View className={`px-4 py-2 mr-4 rounded-lg ${activeTab === tab ? 'bg-[#BDF2F5]' : 'bg-gray-200'}`}>
                                    <Text className={`text-lg text-center font-semibold place-items-center ${activeTab === tab ? 'text-black' : 'text-gray-700'}`}>
                                        {tab}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>

                {/* Alert List */}
                {filteredAlerts.length > 0 ? (
                    filteredAlerts.map(renderAlertItem)
                ) : (
                    <Text className="text-center text-gray-500 mt-10">No pending alerts found</Text>
                )}
            </ScrollView>

            {/* Motivation Popup */}
            <MotivationPopup
                visible={showMotivationPopup}
                patient={selectedPatient}
                onClose={() => setShowMotivationPopup(false)}
                onSend={handleSendMotivation}
            />
        </View>
    );
};

export default AlertsScreen;