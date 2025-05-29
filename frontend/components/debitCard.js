import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function DebitCardScreen() {
    const navigation = useNavigation();
    const [cardNumber, setCardNumber] = useState('');
    const [expiry, setExpiry] = useState('');
    const [securityCode, setSecurityCode] = useState('');
    const [saveCard, setSaveCard] = useState(false);

    return (
        <View className="flex-1 bg-[#232323] justify-center items-center px-2">
            <View className="w-full max-w-md bg-white rounded-2xl p-0 overflow-hidden" style={{ minHeight: 600 }}>
                {/* Gradient Header */}
                <LinearGradient
                    colors={['#e6eaff', '#f7ecd7']}
                    start={{ x: 0.1, y: 0.2 }}
                    end={{ x: 1, y: 1 }}
                    style={{
                        width: '100%',
                        height: 120,
                        borderTopLeftRadius: 16,
                        borderTopRightRadius: 16,
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'relative',
                    }}
                >
                    <TouchableOpacity
                        style={{
                            position: 'absolute',
                            left: 16,
                            top: 16,
                            zIndex: 2,
                            backgroundColor: 'rgba(255,255,255,0.7)',
                            borderRadius: 20,
                            width: 36,
                            height: 36,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        onPress={() => navigation.goBack()}
                    >
                        <AntDesign name="arrowleft" size={22} color="#232323" />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 22, fontWeight: '600', color: '#232323', marginTop: 12 }}>
                        Debit card
                    </Text>
                </LinearGradient>

                {/* Content */}
                <View style={{ paddingHorizontal: 20, paddingTop: 28, paddingBottom: 0 }}>
                    {/* Card Number */}
                    <Text style={{ marginBottom: 6, color: '#444', fontWeight: '500' }}>Card Number</Text>
                    <TextInput
                        style={{
                            borderWidth: 1,
                            borderColor: '#e5e7eb',
                            borderRadius: 8,
                            paddingHorizontal: 12,
                            paddingVertical: 10,
                            fontSize: 16,
                            color: '#111827',
                            marginBottom: 20,
                        }}
                        placeholder="xxxx-xxxx-xxxx-xxxx"
                        keyboardType="numeric"
                        value={cardNumber}
                        onChangeText={setCardNumber}
                        placeholderTextColor="#9ca3af"
                        maxLength={19}
                    />

                    {/* Expiry and Security */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 24 }}>
                        <View style={{ width: '48%' }}>
                            <Text style={{ marginBottom: 6, color: '#444', fontWeight: '500' }}>Expiry date</Text>
                            <TextInput
                                style={{
                                    borderWidth: 1,
                                    borderColor: '#e5e7eb',
                                    borderRadius: 8,
                                    paddingHorizontal: 12,
                                    paddingVertical: 10,
                                    fontSize: 16,
                                    color: '#111827',
                                }}
                                placeholder="MM/YY"
                                value={expiry}
                                onChangeText={setExpiry}
                                placeholderTextColor="#9ca3af"
                                maxLength={8}
                            />
                        </View>
                        <View style={{ width: '48%' }}>
                            <Text style={{ marginBottom: 6, color: '#444', fontWeight: '500' }}>Security code</Text>
                            <TextInput
                                style={{
                                    borderWidth: 1,
                                    borderColor: '#e5e7eb',
                                    borderRadius: 8,
                                    paddingHorizontal: 12,
                                    paddingVertical: 10,
                                    fontSize: 16,
                                    color: '#111827',
                                }}
                                placeholder="3 or 5 digit"
                                keyboardType="numeric"
                                value={securityCode}
                                onChangeText={setSecurityCode}
                                placeholderTextColor="#9ca3af"
                                maxLength={5}
                                secureTextEntry={true}
                            />
                        </View>
                    </View>

                    {/* Custom Save Card Checkbox */}
                    <TouchableOpacity
                        style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 32 }}
                        onPress={() => setSaveCard(!saveCard)}
                        activeOpacity={0.8}
                    >
                        <View
                            style={{
                                width: 24,
                                height: 24,
                                borderRadius: 6,
                                borderWidth: 2,
                                borderColor: saveCard ? '#fbbf24' : '#9ca3af',
                                backgroundColor: saveCard ? '#fbbf24' : 'transparent',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            {saveCard && <AntDesign name="check" size={16} color="white" />}
                        </View>
                        <Text style={{ marginLeft: 12, color: '#444', fontSize: 16, userSelect: 'none' }}>
                            Save this card
                        </Text>
                    </TouchableOpacity>

                    {/* Buttons */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                backgroundColor: '#fef3c7',
                                paddingVertical: 14,
                                borderRadius: 12,
                                marginRight: 10,
                                alignItems: 'center',
                            }}
                            activeOpacity={0.7}
                            onPress={() => navigation.goBack()}
                        >
                            <Text style={{ color: '#b45309', fontWeight: '700', fontSize: 16 }}>
                                Cancel Payment
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{
                                flex: 1,
                                backgroundColor: '#fbbf24',
                                paddingVertical: 14,
                                borderRadius: 12,
                                marginLeft: 10,
                                alignItems: 'center',
                            }}
                            activeOpacity={0.7}
                            onPress={() => {
                                navigation.navigate('ThanksPayment');
                                // Add your payment logic here
                                alert('Payment processed!');
                            }}
                        >
                            <Text style={{ color: 'white', fontWeight: '700', fontSize: 16 }}>
                                Pay Now
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}
