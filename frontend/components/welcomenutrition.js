import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';


const NutritionWelcomeScreen = ({ navigation }) => {
    return (
        <View className="flex-1 bg-blue-100 px-6 pt-12 justify-between pb-10">

            {/* Top Content */}
            <View className="items-center">
                <FontAwesome5 name="carrot" size={40} color="#FFA500" style={{ position: "absolute", top: 20, right: 3 }} />


                <Text className="text-2xl font-bold text-gray-800 text-center mb-12 -bottom-28 ">
                    Welcome to the Nutrition Program
                </Text>
                <Text className="text-base text-gray-600 text-center mb-8 top-28">
                    Discover how to reach your nutritional goals with Diabetify Me
                </Text>

                {/* Updated Image */}
                <View className="w-72 h-96 rounded-2xl overflow-hidden mt-28">
                    <Image
                        source={require('../assets/images/foodie.jpg')}
                        className="w-full h-full"

                    />
                </View>
            </View>

            {/* Bottom Button */}
            <TouchableOpacity
                onPress={() => navigation.navigate('nutritionprogram')}
                className="bg-white py-5 rounded-2xl items-center "
            >
                <Text className="text-lg font-semibold text-gray-700">
                    Discover the program
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default NutritionWelcomeScreen;