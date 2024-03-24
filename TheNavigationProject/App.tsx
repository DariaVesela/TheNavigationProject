


import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, SafeAreaView, Pressable, PermissionsAndroid } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import Geolocation from '@react-native-community/geolocation';

function App(): JSX.Element {

  const [region, setRegion] = useState<{ latitude: number, longitude: number, latitudeDelta: number, longitudeDelta: number } | null>(null);

  useEffect(() => {
        // Function to request location permission
        const requestLocationPermission = async () => {
          try {
            const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,{
                title: 'Location Permission',
                message: 'This app needs access to your location to provide location-based services.',
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
              },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
              console.log('Location permission granted');
              // Access the device's location
    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setRegion({
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      },
      error => console.log("Error getting location:", error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  } []);

  return (
    <View style={styles.wrapper}>
      {region && (
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          region={region}
          showsUserLocation
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({

wrapper: {
  flex: 1,
  backgroundColor: "#FFFFFF"
},

map: {
flex: 8,
},

currentLocationBar :{
flex: 0.5,

},

goText: {
  flex: 1
},

goContainer: { 


},

goButton: {
  color: '#FCF8F1',
  textAlign: 'center',
  textAlignVertical: 'center',
  
}


}
)


export default App;
