import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Pressable, Platform, PermissionsAndroid } from 'react-native';
import MapView, { Marker } from "react-native-maps";
import Geolocation from '@react-native-community/geolocation';

function App(): JSX.Element {

  const [initialPosition, setInitialPosition] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  // useEffect(() => {
  //   // Check for permission and get user's current location
  //   const requestLocationPermission = async () => {
  //     if (Platform.OS === 'android') {
  //       try {
  //         const granted = await PermissionsAndroid.request(
  //           PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  //           {
  //             title: 'Location Permission',
  //             message: 'This app needs access to your location to show it on the map.',
  //             buttonNeutral: 'Ask Me Later',
  //             buttonNegative: 'Cancel',
  //             buttonPositive: 'OK',
  //           },
  //         );
  //         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //           Geolocation.getCurrentPosition(
  //             position => {
  //               const { latitude, longitude } = position.coords;
  //               setInitialPosition({
  //                 latitude,
  //                 longitude,
  //                 latitudeDelta: 0.0922,
  //                 longitudeDelta: 0.0421,
  //               });
  //             },
  //             error => console.log(error),
  //             { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
  //           );
  //         } else {
  //           console.log('Location permission denied');
  //         }
  //       } catch (err) {
  //         console.warn(err);
  //       }
  //     }
  //   };

  //   requestLocationPermission();
  // }, []);

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={{ flex: 1, backgroundColor: '#FFE', justifyContent: 'center', padding: 5 }}>
        <Text style={{ color: '#000', fontSize: 20, textAlign: 'center' }}>Current Location</Text>
      </View>

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: initialPosition.latitude,
          longitude: initialPosition.longitude,
          latitudeDelta: initialPosition.latitudeDelta,
          longitudeDelta: initialPosition.longitudeDelta,
        }}
      >
        <Marker
          coordinate={{ latitude: initialPosition.latitude, longitude: initialPosition.longitude }}
          title={"Your Location"}
          description={"You are here!"}
        />
      </MapView>

      <View style={{ flex: 2, backgroundColor: '#FFE', elevation: 10 }}>
        <View style={{ flex: 1 }} />
        <Pressable
          style={({ pressed }) => [
            {
            },
          ]}
          onPress={() => {
            // Implement functionality here
          }}
        >
          <Text onPress={() => { }} style={{ color: '#000', fontSize: 40, textAlign: 'center' }}>Go!</Text>
        </Pressable>
        <View style={{ flex: 1 }} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#262929"
  },
  map: {
    flex: 15,
  },
  goContainer: {},
  goButton: {
    color: '#FCF8F1',
    textAlign: 'center',
    textAlignVertical: 'center',
  }
});

export default App;
