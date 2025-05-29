import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import { Ionicons, Entypo, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function CountrySelector() {
    const navigation = useNavigation();

    const [countryCode, setCountryCode] = useState('EG');
    const [country, setCountry] = useState(null);
    const [searchText, setSearchText] = useState('');
    const [showPicker, setShowPicker] = useState(false);

    const onSelect = (selectedCountry) => {
        setCountryCode(selectedCountry.cca2);
        setCountry(selectedCountry);
    };

    return (
        <View className="flex-1 bg-violet-100">
            {/* Header */}
            <View className="bg-violet-100 rounded-b-3xl px-4 pt-12 pb-6 flex-row items-center justify-between">
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={28} color="black" />
                </TouchableOpacity>
                <FontAwesome name="globe" size={24} color="black" />
            </View>

            <Text className="text-xl font-bold text-gray-900 -top-18 ml-6">Country</Text>

            {/* Content */}
            <View className="flex-1 bg-white rounded-t-3xl mt-12 px-6 pt-10 pb-10">
                {/* Title */}

                <Text className="text-2xl font-bold text-center text-gray-700">Country</Text>



                {/* Country Picker Trigger */}
                <TouchableOpacity
                    onPress={() => setShowPicker(true)}
                    className="flex-row items-center justify-between border border-gray-300 rounded-lg px-4 py-3 mt-8"
                >
                    <View className="flex-row items-center">
                        <CountryPicker
                            countryCode={countryCode}
                            withFlag
                            withEmoji
                            withCountryNameButton
                            withAlphaFilter
                            withFilter
                            visible={showPicker}
                            onClose={() => setShowPicker(false)}
                            onSelect={onSelect}
                            withCallingCode
                            withCurrency
                            withModal={true}
                            theme={{
                                fontSize: 16,
                            }}
                        />
                        <Text className="ml-2 text-gray-700">
                            {country?.name?.common || 'Select Country'}
                        </Text>
                    </View>
                    <Entypo name="chevron-down" size={20} color="gray" />
                </TouchableOpacity>


            </View>
        </View>
    );
}
