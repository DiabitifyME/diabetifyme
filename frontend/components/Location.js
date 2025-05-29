import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, StatusBar, Alert, ScrollView } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { Ionicons } from "@expo/vector-icons";

export default function LocationScreen({ navigation }) {
    const [location, setLocation] = useState(null);
    const [places, setPlaces] = useState([]);
    const [selectedFilter, setSelectedFilter] = useState('hospitals');

    const fetchNearbyPlaces = async (type) => {
        if (!location) return;

        const query = `
            [out:json][timeout:25];
            (
                node["amenity"="${type}"](around:5000,${location.latitude},${location.longitude});
            );
            out body;
        `;

        try {
            const response = await fetch("https://overpass-api.de/api/interpreter", {
                method: "POST",
                body: query,
            });
            const data = await response.json();
            setPlaces(data.elements || []);
        } catch (error) {
            Alert.alert("Error", "Failed to fetch nearby places");
        }
    };

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert("Permission denied", "You need to allow location access to use this feature.");
                return;
            }

            let loc = await Location.getCurrentPositionAsync({});
            setLocation(loc.coords);
        })();
    }, []);

    useEffect(() => {
        if (location) {
            fetchNearbyPlaces(selectedFilter);
        }
    }, [location, selectedFilter]);

    const filters = [
        { id: 'hospital', label: 'Hospitals', },
        { id: 'pharmacy', label: 'Pharmacies' },
        { id: 'clinic', label: 'Clinics' },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate("home")}>
                    <Ionicons name="arrow-back" size={24} color="#222" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Location-based services</Text>
            </View>

            <ScrollView horizontal style={styles.filtersContainer}>
                {filters.map((filter) => (
                    <TouchableOpacity
                        key={filter.id}
                        style={[
                            styles.filterButton,
                            selectedFilter === filter.id && styles.filterButtonActive
                        ]}
                        onPress={() => setSelectedFilter(filter.id)}
                    >
                        <Text style={[styles.filterText, selectedFilter === filter.id && styles.filterTextActive]}>
                            {filter.label}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: location?.latitude || 30.0444,
                    longitude: location?.longitude || 31.2357,
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.05,
                }}
                showsUserLocation={true}
            >
                {location && (
                    <Marker
                        coordinate={{ latitude: location.latitude, longitude: location.longitude }}
                        title="You are here"
                        description="Your current location"
                    />
                )}
                {places.map((place) => (
                    <Marker
                        key={place.id}
                        coordinate={{
                            latitude: place.lat,
                            longitude: place.lon
                        }}
                        title={place.tags.name || `${selectedFilter}`}
                        description={place.tags.address || ""}
                    />
                ))}
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: StatusBar.currentHeight || 40,
        paddingHorizontal: 16,
        paddingBottom: 12,
        backgroundColor: "#E3F2FD",
        marginTop: 14
    },
    headerText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#444",
        marginLeft: 12,
    },
    map: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height - 120, // Adjusted for filters
    },
    filtersContainer: {
        padding: 10,
        backgroundColor: "#fff",
    },
    filterButton: {
        flexDirection: "row",
        alignItems: "center",
        padding: 8,
        marginRight: 18,
        borderRadius: 15,
        backgroundColor: "#f0f0f0",
        marginLeft: 15
    },
    filterButtonActive: {
        backgroundColor: "#9BB9E2",
    },
    filterText: {
        color: "#666",
    },
    filterTextActive: {
        color: "#fff",
    },
});