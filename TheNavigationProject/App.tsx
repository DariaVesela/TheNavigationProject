


import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, Pressable } from 'react-native';
import MapView, { Marker } from "react-native-maps";

function App(): JSX.Element {

  return (

    <SafeAreaView style={styles.wrapper}>

    
      <MapView style={styles.map}
    initialRegion={{
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.1122,
    longitudeDelta: 0.1421,
  }}
  
      >  
        </MapView>
      <View style={{flex:1}}/>
      
    <Pressable>
      <Text style={styles.goButton}>Go!</Text>
    </Pressable>
  

    </SafeAreaView>

    );
}
const styles = StyleSheet.create({

wrapper: {
  flex: 1,
  backgroundColor: "#262929"
},

map: {
flex: 5,

},

goButton: {
  color: '#FCF8F1',
  textAlign: 'center',
  textAlignVertical: 'center',
}


}
)


export default App;
