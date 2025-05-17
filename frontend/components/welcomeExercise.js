import { View, Text, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from "@expo/vector-icons";

const WelcomeScreen = ({ navigation }) => {
    return (
        <View className="flex-1 bg-white px-6 pb-8 items-center">
            <TouchableOpacity onPress={() => navigation.goBack()} className="absolute top-14 left-5">
                <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>

            {/* Fire icon on the right */}
            <View className="w-full items-end ">
                <Text className="text-2xl pt-14">🔥</Text>
            </View>

            {/* Title */}
            <Text className="text-gray-600 text-3xl pt-8 font-semibold leading-8 text-center">
                Welcome to your calorie{"\n"}burn program
            </Text>

            {/* Subtitle */}
            <Text className="text-gray-500 text-md text-center mt-6">
                Monitor your physical activity and calorie{"\n"}burn to achieve your daily goal..
            </Text>

            {/* Image */}
            <Image
                source={require('../assets/images/fitness-bg.jpg')}
                className="w-64 h-96 rounded-3xl my-6 mt-8"
                resizeMode="cover"
            />

            {/* Button */}
            <TouchableOpacity
                className="bg-[#FFF3CD] px-6 py-4 w-72 rounded-2xl mt-4"
                onPress={() => navigation.navigate('exercisePrograms')}
            >
                <Text className="text-gray-800 font-semibold text-center text-lg">
                    Discover the program
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default WelcomeScreen;
