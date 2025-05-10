import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Modal, ScrollView } from 'react-native';

const MotivationPopup = ({ visible, patient, onClose, onSend }) => {
    const [selectedMessage, setSelectedMessage] = useState(null);
    const [customMessage, setCustomMessage] = useState('');

    const predefinedMessages = [
        `lets get back on track,${patient?.name || 'Jonathan'}. You ‘ve got this!`,
        'We believe in you .Your journey is important',
        'Just a little progress today can lead to big results',
    ];

    const handleSend = () => {
        const message = selectedMessage === 'custom' ? customMessage : selectedMessage;
        onSend(message);
        setSelectedMessage(null);
        setCustomMessage('');
    };

    return (
        <Modal
            visible={visible}
            transparent
            animationType="fade"
            onRequestClose={onClose}
        >
            <View className="flex-1 justify-center items-center bg-black/50 p-4">
                <View className="w-full bg-white rounded-xl p-6 max-w-md">
                    <Text className="text-xl font-bold mb-1">Motivation for :{patient?.name || 'Jonathan'}</Text>
                    <Text className="text-gray-600 mb-4">Select or write a message below</Text>

                    <ScrollView className="max-h-64 mb-4">
                        {predefinedMessages.map((msg, i) => (
                            <TouchableOpacity
                                key={i}
                                className="flex-row items-center p-3 mb-2 rounded-lg bg-gray-50"
                                onPress={() => {
                                    setSelectedMessage(msg);
                                    setCustomMessage('');
                                }}
                            >
                                <View className={`w-5 h-5 rounded-full border-2 mr-3 ${selectedMessage === msg ? 'border-[#DBD076]' : 'border-gray-400'}`} />
                                <Text className="text-gray-800">{msg}</Text>
                            </TouchableOpacity>
                        ))}

                        <TouchableOpacity
                            className="flex-row items-center p-3 mb-2 rounded-lg bg-gray-50"
                            onPress={() => setSelectedMessage('custom')}
                        >
                            <View className={`w-5 h-5 rounded-full border-2 mr-3 ${selectedMessage === 'custom' ? 'border-[#DBD076]' : 'border-gray-400'}`} />
                            <Text className="text-gray-800">Custom message</Text>
                        </TouchableOpacity>

                        {selectedMessage === 'custom' && (
                            <TextInput
                                className="border border-gray-300 rounded-lg p-3 mt-2 text-base bg-white"
                                multiline
                                placeholder="Custom message"
                                value={customMessage}
                                onChangeText={setCustomMessage}
                            />
                        )}

                    </ScrollView>

                    <View className="flex-row justify-end space-x-3 pt-2">
                        <TouchableOpacity
                            className="px-4 py-2 bg-[#D9D9D9] rounded-lg mr-4 border border-[#959595]"
                            onPress={onClose}
                        >
                            <Text className="text-black ">Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            className={`px-4 py-2 rounded-lg ${selectedMessage || customMessage ? 'bg-[#FBF3B5]' : 'bg-gray-300'}`}
                            onPress={handleSend}
                            disabled={!selectedMessage && !customMessage}
                        >
                            <Text className="text-black font-semibold">Send</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default MotivationPopup;
