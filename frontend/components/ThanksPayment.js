import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

export default function ThanksScreen() {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            {/* Simulated Radial Gradient using LinearGradient */}
            <LinearGradient
                colors={['#DBEAFE', '#C2CCD9', '#F7F1D7', '#E4E3D8', '#DBEAFE', '#FFF3CD']}
                start={{ x: 0.1, y: 0.4 }}
                end={{ x: 0.8, y: 0.8 }}
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '55%',
                    borderTopLeftRadius: 24,
                    borderTopRightRadius: 24,
                }}
            />

            {/* Back Button */}
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{
                    position: 'absolute',
                    left: 16,
                    top: 36,
                    zIndex: 2,
                    backgroundColor: 'rgba(255,255,255,0.7)',
                    borderRadius: 20,
                    width: 36,
                    height: 36,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <AntDesign name="arrowleft" size={22} color="#232323" />
            </TouchableOpacity>

            {/* Header Text */}
            <View style={{ marginTop: 160, alignItems: 'center' }}>
                <Text style={{ fontSize: 28, fontWeight: '700', color: '#232323' }}>Thanks!</Text>
            </View>

            {/* Rounded Card Section */}
            <View
                style={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    height: '55%',
                    backgroundColor: '#fdf6d9',
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                    alignItems: 'center',
                    paddingTop: 48,
                }}
            >
                {/* Star Icon in Circle */}
                <View
                    style={{
                        width: 64,
                        height: 64,
                        borderRadius: 32,
                        backgroundColor: '#e6eaff',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom: 28,
                        borderWidth: 1,
                        borderColor: '#dbeafe',
                    }}
                >
                    <AntDesign name="staro" size={38} color="#bfae60" />
                </View>
                {/* Thank You Text */}
                <Text style={{ fontSize: 18, color: '#232323', fontWeight: '600', textAlign: 'center' }}>
                    Thanks you for purchasing.
                </Text>
            </View>
        </View>
    );
}
