


import React from 'react';
import {StyleSheet, Text, View, SafeAreaView } from 'react-native';
import MapView from "react-native-maps";

function App(): JSX.Element {

  return (

    <SafeAreaView style={styles.wrapper}>

 
      <MapView style={styles.map}
    initialRegion={{
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }}
      />
   


    </SafeAreaView>

    );
}
const styles = StyleSheet.create({

wrapper: {
  flex: 1,
  backgroundColor: "#262929"
},

map: {
flex: 4

}

}


)


export default App;
