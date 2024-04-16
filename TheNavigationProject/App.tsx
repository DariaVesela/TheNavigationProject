


import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, SafeAreaView, Pressable, PermissionsAndroid } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, Region } from "react-native-maps";
import Geolocation from '@react-native-community/geolocation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
    flex: 0.2
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

function App(): JSX.Element {

  const [region, setRegion] = useState<Region | null>(null);

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
                (position:any) => {
                  console.warn(position)
                  
                  const { latitude, longitude, accuracy } = position.coords;

                  setRegion({
                    latitude,
                    longitude,
                    latitudeDelta: accuracy/1000, // THis needs fixing
                    longitudeDelta: accuracy/1000,// THis needs fixing
                  });
                },
                (error:any) => console.log("Error getting location:", error.message),
                { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
              );
            }
          } catch (e:any){
            console.warn(e)
          }
        }
        requestLocationPermission()
      },[]);

  return (
  <SafeAreaView style={styles.wrapper}>
    <View style={styles.currentLocationBar}>
      <Text>
      {region
        ? `Latitude: ${region.latitude}, Longitude: ${region.longitude}`
        : 'Getting location...'}
    </Text>
    {region && (
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        region={region}
        showsUserLocation
      />
    )}
  </View>

  {/* <Pressable style={styles.goButton}> */}
  <View style={{ flex: 1 }}>
    <View style={{ flex: 1 }} />
    <Text style={{ fontSize: 60, color: '#000', textAlign: 'center' }}>Go!</Text>
    <View style={{ flex: 1 }} />
  </View>
  {/* </Pressable> */}
  
  <View style={styles.goText}></View>
</SafeAreaView>
  );
    }
export default App;
