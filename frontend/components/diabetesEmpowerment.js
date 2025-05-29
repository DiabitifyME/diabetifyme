import React, { useState } from "react";
import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
    Dimensions,
    StatusBar,
    Modal,
} from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import Animated, { BounceIn } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';

// Success stories data
const successStories = [
    {
        id: 1,
        name: "Jamila Roberts",
        quote: "In 3 years I went from struggling to thriving 💪🏽",
        date: "24/4/2025",
        bg: "bg-pink-100",
        image: "https://randomuser.me/api/portraits/women/79.jpg",
        fullStory:
            "Three years ago, I was constantly tired, overwhelmed, and confused about how to manage my diabetes. I felt hopeless. But step by step, I started learning more about nutrition, monitoring my blood sugar, and finding a routine that worked for me. Today, I feel empowered, strong, and proud of how far I’ve come. This journey taught me resilience and self-love.",
    },
    {
        id: 2,
        name: "Ali Hossam",
        quote: "I reversed my prediabetes in just 6 months!",
        date: "13/2/2025",
        bg: "bg-green-100",
        image: "https://randomuser.me/api/portraits/men/44.jpg",
        fullStory:
            "I was shocked when I got diagnosed with prediabetes. But instead of giving up, I decided to act fast. I joined Diabetify Me, started walking every day, ate healthier, and followed the app’s recommendations. After 6 months, my levels were back to normal. It’s never too late to change!",
    },
    {
        id: 3,
        name: "Noura Said",
        quote: "Now I feel confident, healthy, and strong 🌟",
        date: "9/1/2025",
        bg: "bg-pink-100",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
        fullStory:
            "Before, I felt lost and scared. Diabetes made me question if I could ever feel normal again. But with time, support, and education, I learned how to take care of my body. I now work out regularly, eat mindfully, and feel more confident than ever!",
    },
    {
        id: 4,
        name: "Samiha Farouk",
        quote: "Living a full life with type 1 diabetes ❤️‍🔥",
        date: "2/3/2025",
        bg: "bg-green-100",
        image: "https://randomuser.me/api/portraits/women/32.jpg",
        fullStory:
            "I’ve been living with type 1 diabetes since childhood, but I never let it define me. With the right tools and mindset, I’ve traveled, worked, and thrived in every way. Diabetify Me helped me feel less alone and more in control of my daily routine.",
    },
    {
        id: 5,
        name: "Ahmed El-Sherif",
        quote: "Lost 15kg and normalized my blood sugar levels.",
        date: "10/4/2025",
        bg: "bg-yellow-100",
        image: "https://randomuser.me/api/portraits/men/25.jpg",
        fullStory:
            "Weight gain made my condition worse. I felt stuck. I began using Diabetify Me to track my meals and activity, and slowly started losing weight. I lost 15kg in a healthy way, and my blood sugar is now in the normal range. I feel lighter and more energized.",
    },
    {
        id: 6,
        name: "Fatima Ali",
        quote: "Started walking daily and changed my life 🚶‍♀️",
        date: "15/5/2025",
        bg: "bg-emerald-100",
        image: "https://randomuser.me/api/portraits/women/45.jpg",
        fullStory:
            "All I did was commit to one walk every day. That simple habit transformed my life. It boosted my mood, helped me control my sugar levels, and gave me time to think and reset. Walking became my therapy.",
    },
    {
        id: 7,
        name: "Youssef Mahmoud",
        quote: "My HbA1c is finally under control 🙌",
        date: "18/5/2025",
        bg: "bg-indigo-100",
        image: "https://randomuser.me/api/portraits/men/11.jpg",
        fullStory:
            "For years, I couldn’t lower my HbA1c below 8.5. After following a clear plan and using Diabetify Me consistently, I managed to bring it down to 6.4! I feel more balanced and in control than ever before.",
    },
    {
        id: 8,
        name: "Layla Osman",
        quote: "Thanks to Diabetify Me, I feel empowered!",
        date: "20/5/2025",
        bg: "bg-rose-100",
        image: "https://randomuser.me/api/portraits/women/18.jpg",
        fullStory:
            "Diabetify Me didn’t just give me tools—it gave me confidence. I learned how to understand my body, track my progress, and stay motivated. It made a huge difference in how I manage diabetes daily.",
    },
    {
        id: 9,
        name: "Hanan Khaled",
        quote: "Cooking healthier meals became a joy 🥗",
        date: "21/5/2025",
        bg: "bg-teal-100",
        image: "https://randomuser.me/api/portraits/women/26.jpg",
        fullStory:
            "I used to think healthy food was boring. But through the app and community recipes, I discovered fun, delicious meals that actually help my sugar stay stable. Now I enjoy cooking more than ever!",
    },
    {
        id: 10,
        name: "Mohamed Adel",
        quote: "My journey with insulin is now easier.",
        date: "25/5/2025",
        bg: "bg-orange-100",
        image: "https://randomuser.me/api/portraits/men/53.jpg",
        fullStory:
            "Taking insulin used to scare me. I didn’t know how to balance doses, food, and exercise. But after using the education tools inside Diabetify Me, it all made sense. Now I manage my doses with confidence and calm.",
    },
];


// Helper function to group into columns
function groupIntoColumns(data, itemsPerColumn = 2) {
    const columns = [];
    for (let i = 0; i < data.length; i += itemsPerColumn) {
        columns.push(data.slice(i, i + itemsPerColumn));
    }
    return columns;
}

export default function DiabetesEmpowerment({ navigation }) {
    const columns = groupIntoColumns(successStories, 2);
    const windowWidth = Dimensions.get("window").width;
    const [selectedStory, setSelectedStory] = useState(null);

    return (
        <View className="flex-1 bg-white">
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 16 }}>
                {/* Header image */}
                <View style={{ position: "relative", }}>
                    <Image
                        source={require("../assets/images/DiabetesEmpowerment.png")}
                        style={{
                            width: windowWidth,
                            height: windowWidth * 0.9,
                            resizeMode: "cover",
                        }}
                    />
                    <TouchableOpacity
                        style={{
                            position: "absolute",
                            top: StatusBar.currentHeight ? StatusBar.currentHeight + 10 : 32,
                            left: 16,
                            padding: 4,
                            top: 30,
                        }}
                        onPress={() => navigation.navigate("home")}
                    >
                        <Ionicons name="arrow-back" size={22} color="#222" />
                    </TouchableOpacity>
                </View>

                {/* Title */}
                <View className="px-6 py-5">
                    <Text className="text-3xl font-bold text-[#707070] leading-tight">
                        {"Diabetes\nEmpowerment"}
                    </Text>
                    <Text className="text-gray-500 mt-2">your health is in your hands!</Text>
                </View>

                {/* Success stories */}
                <View className="px-6">
                    <Text className="text-2xl font-semibold text-[#707070] mb-3">Success stories</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {columns.map((column, colIdx) => (
                            <View key={colIdx} className="mr-3 flex-col space-y-3">
                                {column.map((story) => (
                                    <TouchableOpacity
                                        key={story.id}
                                        onPress={() => setSelectedStory(story)}
                                        className={`w-40 h-46 rounded-2xl p-3 mb-6 ${story.bg} shadow-sm justify-start`}
                                    >
                                        <Image
                                            source={{ uri: story.image }}
                                            className="w-11 h-11 rounded-full mb-2 self-center"
                                            resizeMode="cover"
                                        />
                                        <Text className="font-semibold text-black text-center">{story.name}</Text>
                                        <Text className="text-xs text-gray-700 mt-1 text-center" numberOfLines={2}>
                                            {story.quote}
                                        </Text>
                                        <Text className="text-xs text-gray-400 mt-2 text-center">{story.date}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        ))}
                    </ScrollView>
                </View>
            </ScrollView>

            {/* Modal */}
            <Modal visible={!!selectedStory} transparent animationType="slide">
                <View className="flex-1 justify-center items-center bg-black/50 px-6">
                    <View className="bg-white rounded-2xl p-6 w-full max-w-md">
                        <View className="items-end">
                            <TouchableOpacity onPress={() => setSelectedStory(null)}>
                                <AntDesign name="close" size={24} color="black" />
                            </TouchableOpacity>
                        </View>
                        {selectedStory && (
                            <>
                                <Image
                                    source={{ uri: selectedStory.image }}
                                    className="w-16 h-16 rounded-full self-center mb-4"
                                />
                                <Text className="text-xl font-bold text-center mb-2">
                                    {selectedStory.name}
                                </Text>
                                <Text className="text-sm text-gray-800 text-center mb-1">
                                    {selectedStory.fullStory}
                                </Text>
                                <Text className="text-xs text-gray-500 text-center">
                                    {selectedStory.date}
                                </Text>
                            </>
                        )}
                    </View>
                </View>
            </Modal>


            <View className="bg-white p-2 mt-4 mx-4 mb-3 rounded-3xl flex-row justify-around items-center ">
                {/* Home Icon */}
                <TouchableOpacity className="items-center justify-center" onPress={() => navigation.navigate("home")}
                >
                    <View className="p-2 rounded-full bg-white-100">
                        <Ionicons name="home-outline" size={28} color="black" />
                    </View>
                </TouchableOpacity>

                {/* Notifications Icon */}
                <TouchableOpacity className="items-center justify-center" onPress={() => navigation.navigate("notifications")}>
                    <View className="p-3 rounded-full bg-white-100">
                        <Ionicons name="notifications-outline" size={28} color="black" />
                    </View>
                </TouchableOpacity>

                {/* Chat Icon (replacing QR Code Icon) */}
                <Animated.View entering={BounceIn.duration(500)}>
                    <TouchableOpacity className="items-center justify-center">
                        <LinearGradient
                            colors={['#D4D2E5', '#B8C6CC', '#E7DBF7', '#E6F7FF', '#E7E9FB']}
                            locations={[0.09, 0.20, 0.51, 0.77, 0.90]}
                            className="p-2 rounded-full"
                            style={{ width: 50, height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 28 }}
                        >
                            <Ionicons name="chatbubble-ellipses-sharp" size={28} color="white" />

                        </LinearGradient>
                    </TouchableOpacity>
                </Animated.View>

            </View>
        </View>
    );
}
