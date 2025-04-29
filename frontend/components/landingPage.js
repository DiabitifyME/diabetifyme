import React, { useEffect } from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Animated, {
    useSharedValue,
    withTiming,
    useAnimatedStyle,
    Easing,
} from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';

export default function LandingPage() {
    const navigation = useNavigation();
    const opacity = useSharedValue(0);

    useEffect(() => {
        opacity.value = withTiming(1, {
            duration: 1000,
            easing: Easing.ease,
        });

        const timer = setTimeout(() => {
            navigation.replace('roleSelection');
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const animatedStyle = useAnimatedStyle(() => ({
        opacity: opacity.value,
    }));

    return (
        <View className="flex-1">
            <LinearGradient
                colors={['#ffffff', '#f8e5ff']}
                className="flex-1 items-center justify-center"
            >
                <Animated.View
                    style={animatedStyle}
                    className="items-center justify-center bg-white rounded-3xl p-8 shadow-lg mx-8"
                >
                    <Image
                        source={require('../assets/images/logo.png')}
                        className="w-64 h-64 mt-8"
                        resizeMode="contain"
                    />



                    <Text className="text-2xl font-bold text-center w-40 text-slate-400 text-2xl font-light font-serif">
                        Let's Beat Diabetes!
                    </Text>


                </Animated.View>
            </LinearGradient>
        </View>
    );
}